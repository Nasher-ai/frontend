import { ReactNode } from "react"

interface Props{
    children: ReactNode
    aiResponse?: boolean
}

export default function ChatMessage({aiResponse = false, children}: Props){
    return(
        <div className={`py-6 px-8 break-words leading-10 w-full ${aiResponse? 
            '':
            'bg-[#0F0F0F] rounded-xl'}`}>
            <p>{children}</p>
        </div>
    )
}