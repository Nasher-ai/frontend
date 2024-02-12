import fekrahChat from "../../../handlers/auth/fekrah_chat";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "../../../components/fekrah/chat_message";
import ExplanationContainer from "../../../components/fekrah/explanation_container";
import PromptInput from "../../../components/fekrah/prompt_input";
import NavigationBar from "../../../components/navigation_bar";
import useMediaQuery from '@mui/material/useMediaQuery';


interface MessageProps {
  id: number;
  text: string;
  isRes: boolean;
}

export default function FekrahPage() {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width:768px)')

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const handelSend = async () => {
    // if(event.key !== 'Enter') return
    if (prompt.trim() === "") return;

    const message: MessageProps = {
      id: chat.length + 1,
      text: prompt,
      isRes: false, // Assuming the user sends the message
    };

    setChat((prevChat) => [...prevChat, message]);
    setPrompt("");

    console.log("getting response");
    setIsLoading(true);
    const res = await fekrahChat(prompt);
    const response: MessageProps = {
      id: chat.length + 1,
      text: res,
      isRes: true, // Assuming the user sends the message
    };
    setChat((prevChat) => [...prevChat, response]);
    setIsLoading(false);
  };

  const chatView = chat.map((message: MessageProps) => (
            <ChatMessage aiResponse={message.isRes}>{message.text}</ChatMessage>
          ))
  

        return (
            <div className="flex flex-row">
                {isMobile ? <></> : <NavigationBar/>}
                <div className=" flex flex-col justify-between h-screen max-w-full flex-1">
                    {chat.length === 0 ?
                    <ExplanationContainer promptSetter={setPrompt}/>
                    :<div ref={messageContainerRef} className="overflow-y-auto gap-3 px-16 py-11">
                        {chatView}
                    </div>}
                    <div className=" bottom-8 w-full pt-2 pb-12 px-10">
                        <PromptInput
                            isLoading={isLoading}
                            onValueChange={(value) => setPrompt(value)}
                            onSend={handelSend}
                            value={prompt}
                        />
                    </div>
                </div>
            </div>
          );
}
