// import fekrahChat from '../../../handlers/auth/fekrah_chat';
// import { useState, useRef, useEffect } from 'react';
// import ChatMessage from '../../../components/fekrah/chat_message';
// import ExplanationContainer from '../../../components/fekrah/explanation_container';
// import PromptInput from '../../../components/fekrah/prompt_input';
// import NavigationBar from '../../../components/navigation_bar';

// interface MessageProps {
//     id: number;
//     text: string;
//     isRes: boolean;
// }

// export default function FekrahPage(){
//     const [prompt, setPrompt] = useState('')
//     const [chat, setChat] = useState<MessageProps[]>([
//         {id: 1, isRes: false, text: 'Write about war'},
//         {id: 2, isRes: true, text: `Certainly! War is a state of armed conflict between different nations or groups. It is a complex and multifaceted event that can have wide-ranging impacts on societies, economies, and political systems.

//         Wars can be fought for a variety of reasons, including territorial disputes, ideological differences, or the desire for power and resources. The causes of war are often rooted in long-standing conflicts or grievances between nations or groups.

//         During a war, military forces engage in combat, utilizing a range of weapons, strategies, and tactics to gain an advantage over the enemy. The outcome of a war is determined by a combination of factors, including the strength and capability of the opposing forces, available resources, and the support of the civilian population.

//         Wars have significant social, economic, and political consequences. They result in the loss of human lives, destruction of infrastructure, displacement of populations, and the disruption of economies. The impact of war can be felt for generations, as societies struggle to rebuild and recover from the devastation.

//         War also has a profound effect on societies, leading to changes in political systems, cultural norms, and international relations. It can reshape geopolitical boundaries, alter power dynamics, and influence global affairs.

//         Throughout history, there have been numerous wars that have had a profound impact on the world. Some notable examples include World War I, World War II, the Cold War, and ongoing conflicts in the Middle East. These wars have shaped the course of history, leaving a lasting impact on the lives of millions of people.

//         Efforts have been made to prevent and mitigate the effects of war. International organizations, such as the United Nations, aim to promote peace, resolve conflicts diplomatically, and provide humanitarian aid to war-affected areas. However, war continues to be a reality in many parts of the world, underscoring the complex nature of human conflict and the challenges of maintaining peace.
//         `}
//     ]);
//     const [isLoading, setIsLoading] = useState(false)
//     const messageContainerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (messageContainerRef.current) {
//             messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
//         }
//     }, [chat]);

//     const handelSend = async () => {
//         // if(event.key !== 'Enter') return
//         if (prompt.trim() === '') return;

//         const message: MessageProps = {
//             id: chat.length + 1,
//             text: prompt,
//             isRes: false, // Assuming the user sends the message
//         };

//         setChat(prevChat => [...prevChat, message])
//         setPrompt('')

//         console.log('getting response')
//         setIsLoading(true)
//         const res = await fekrahChat(prompt)
//         const response: MessageProps = {
//             id: chat.length + 1,
//             text: res,
//             isRes: true, // Assuming the user sends the message
//         }
//         setChat(prevChat => [...prevChat, response])
//         setIsLoading(false)

//     }

//     return(
//         <div className="flex flex-row ">
//             {/* Navigation Bar */}
//             {/* <NavigationBar/> */}

//             {/* Chat Container */}
//             <div  className=' my-11 mx-16  items-center h-full w-full justify-end flex flex-col'>
//                 {chat.length === 0
//                 // Explanation
//                 ? <ExplanationContainer promptSetter={setPrompt}/>

//                 // Chat
//                 : <div ref={messageContainerRef} className='flex flex-col overflow-y-auto pb-8 flex-1 gap-6 justify-end'>
//                     {chat.map((message: MessageProps) => (
//                         <ChatMessage aiResponse={message.isRes}>{message.text}</ChatMessage>
//                     ))}
//                   </div>
//                 }
//                 {/* Input Field */}
//                 <PromptInput
//                     isLoading={isLoading}
//                     onValueChange={value => setPrompt(value)}
//                     onSend={handelSend}
//                     value={prompt}
//                 />
//             </div>
//         </div>
//     )
// }

import fekrahChat from "../../../handlers/auth/fekrah_chat";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "../../../components/fekrah/chat_message";
import ExplanationContainer from "../../../components/fekrah/explanation_container";
import PromptInput from "../../../components/fekrah/prompt_input";
import NavigationBar from "../../../components/navigation_bar";

interface MessageProps {
  id: number;
  text: string;
  isRes: boolean;
}

export default function FekrahPage() {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState<MessageProps[]>([
    { id: 1, isRes: false, text: "Write about war" },
    {
      id: 2,
      isRes: true,
      text: `Certainly! War is a state of armed conflict between different nations or groups. It is a complex and multifaceted event that can have wide-ranging impacts on societies, economies, and political systems.

        Wars can be fought for a variety of reasons, including territorial disputes, ideological differences, or the desire for power and resources. The causes of war are often rooted in long-standing conflicts or grievances between nations or groups.
        
        During a war, military forces engage in combat, utilizing a range of weapons, strategies, and tactics to gain an advantage over the enemy. The outcome of a war is determined by a combination of factors, including the strength and capability of the opposing forces, available resources, and the support of the civilian population.
        
        Wars have significant social, economic, and political consequences. They result in the loss of human lives, destruction of infrastructure, displacement of populations, and the disruption of economies. The impact of war can be felt for generations, as societies struggle to rebuild and recover from the devastation.
        
        War also has a profound effect on societies, leading to changes in political systems, cultural norms, and international relations. It can reshape geopolitical boundaries, alter power dynamics, and influence global affairs.
        
        Throughout history, there have been numerous wars that have had a profound impact on the world. Some notable examples include World War I, World War II, the Cold War, and ongoing conflicts in the Middle East. These wars have shaped the course of history, leaving a lasting impact on the lives of millions of people.
        
        Efforts have been made to prevent and mitigate the effects of war. International organizations, such as the United Nations, aim to promote peace, resolve conflicts diplomatically, and provide humanitarian aid to war-affected areas. However, war continues to be a reality in many parts of the world, underscoring the complex nature of human conflict and the challenges of maintaining peace.
        `,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messageContainerRef = useRef<HTMLDivElement>(null);

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
  const textfield = <PromptInput
          isLoading={isLoading}
          onValueChange={(value) => setPrompt(value)}
          onSend={handelSend}
          value={prompt}
        />

  return (
    <div className="flex flex-row h-full w-full overflow-hidden ">
      <div className=" flex flex-col h-full max-w-full flex-1 overflow-auto">
        <div className="flex-col gap-6 overflow-y-auto">
          {chatView}
        </div>
        {textfield}
      </div>
    </div>
  );
}
