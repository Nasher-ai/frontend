import fekrahChat from "../../../handlers/auth/fekrah_chat";
import { useState, useRef, useEffect } from "react";
import ExplanationContainer from "../../../components/fekrah/explanation_container";
import PromptInput from "../../../components/fekrah/prompt_input";
import SideBar from "../../../components/static components/side_bar";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavigationBar from "../../../components/static components/navigation_bar";
import SuggestChip from "../../../components/fekrah/suggest_chip";
import PageChatView from "../../../components/fekrah/chat_view";
import Page from "../../../components/static components/sidebar_page";

export interface MessageProps {
  id: number;
  text: string;
  isRes: boolean;
}

export default function FekrahPage() {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width:768px)");

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
    <Page className="flex-col flex pt:mt-20 md:pt-4 relative max-w-full h-screen flex-1">
      {chat.length === 0 ? (
        <ExplanationContainer />
      ) : (
        <PageChatView ref={messageContainerRef} chat={chat} />
      )}
      {/* // <div ref={messageContainerRef} className="overflow-auto flex-col flex pt-24 md:pt-0 gap-3 py-11 px-5  lg:px-20">
        //     {chat.map((message: MessageProps) => (
        //       <ChatMessage 
        //       key={message.id}
        //       aiResponse={message.isRes}>
        //         {message.text} 
        //       </ChatMessage>
        //     ))}
        //   </div>} */}

      <div className=" md:absolute bg-[#0F0F0F] fixed flex flex-col items-center w-full bottom-0">
        {chat.length !== 0 ? (
          <></>
        ) : (
          <div className="w-full flex flex-row justify-center">
            <div className="bottom-full w-full max-w-xs md:max-w-none mx-14 md:mx-0 md:w-min mb-11 md:mb-16 flex flex-col  md:flex-row gap-3 md:gap-1.5 items-stretch">
              <SuggestChip
                text="Write about war"
                callback={setPrompt}
                isMobile={isMobile}
              />
              <SuggestChip
                text="Write about health care"
                callback={setPrompt}
                isMobile={isMobile}
              />
              <SuggestChip
                text="Write about Sport"
                callback={setPrompt}
                isMobile={isMobile}
              />
            </div>
          </div>
        )}
        <div className="w-full lg:max-w-4xl 2xl:max-w-5xl">
          <div className="mx-2 mb-6 md:mx-4 pb-2  ">
            <PromptInput
              isMobile={isMobile}
              isLoading={isLoading}
              promptSetter={setPrompt}
              // onChange={(e) => setPrompt(e.currentTarget.value)}
              //  onInput={(e) => setPrompt(e.currentTarget.value)}
              onSend={handelSend}
              value={prompt}
            />
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      {/* <div className="bottom-0 flex flex-col bg-orange-600 w-full justify-center  items-center ">
          {/* Suggestion Chips */}
      {/* {chat.length !== 0 ? <></> :
          <div className="w-full fixed flex flex-row justify-center">
            <div className='bottom-full w-full max-w-xs md:max-w-none mx-14 md:mx-0 md:w-min mb-11 md:mb-16 flex flex-col md:flex-row gap-3 md:gap-1.5 items-stretch'>
              <SuggestChip text='Write about war' callback={setPrompt} isMobile={isMobile}/>
              <SuggestChip text='Write about health care' callback={setPrompt} isMobile={isMobile}/>
              <SuggestChip text='Write about Sport' callback={setPrompt} isMobile={isMobile}/>
            </div>
          </div>}  
          {/* Prompt Input  */}
      {/* <div className=" w-full flex flex-row justify-center relative">
            <div className="mx-2 mb-6 md:mx-4 w-full p-2 lg:max-w-4xl 2xl:max-w-5xl ">
              <PromptInput
              isLoading={isLoading}
              onValueChange={(value) => setPrompt(value)}
              onSend={handelSend}
              value={prompt}/>
            </div>
          </div>
        </div>  */}
    </Page>
  );
}
