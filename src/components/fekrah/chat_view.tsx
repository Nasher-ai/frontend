import { MessageProps } from "../../pages/Dashboard/Fekrah"
import ChatMessage from "./chat_message"

interface Props{
    ref?: React.LegacyRef<HTMLDivElement> 
    chat: MessageProps[]
}

export default function PageChatView({ref, chat}: Props){
    return(
        <div ref={ref} className="overflow-auto flex-col flex pt-24 md:pt-8 gap-3 py-11 px-5  lg:px-20">
            {chat.map((message: MessageProps) => (
                <ChatMessage 
                key={message.id}
                aiResponse={message.isRes}>
                {message.text} 
                </ChatMessage>
            ))}
            </div>
    )
}