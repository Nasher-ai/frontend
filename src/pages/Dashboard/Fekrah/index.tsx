import fekrahChat from "../../../handlers/auth/fekrah_chat";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "../../../components/fekrah/chat_message";
import ExplanationContainer from "../../../components/fekrah/explanation_container";
import PromptInput from "../../../components/fekrah/prompt_input";
import SideBar from "../../../components/side_bar";
import useMediaQuery from '@mui/material/useMediaQuery';


interface MessageProps {
    id: number;
    text: string;
    isRes: boolean;
}

export default function FekrahPage() {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <div className="flex flex-row h-screen w-full overflow-hidden">
      {isMobile ? <></> : <SideBar/>}
      <div className=" flex-col flex justify-between max-w-full flex-1 ">
        {chat.length === 0 
        ? <ExplanationContainer promptSetter={setPrompt}/> 
        : <div ref={messageContainerRef} className="overflow-auto flex-col flex gap-3 py-11 px-20">
            {chat.map((message: MessageProps) => (
              <ChatMessage aiResponse={message.isRes}>{message.text}</ChatMessage>
            ))}
          </div>}
        <div className="pb-11 px-16 ">
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
