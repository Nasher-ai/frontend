import { ReactNode } from "react"

interface Props{
    className?: string
    children?: ReactNode
}

export default function PageInputsGroup({children, className}: Props){
    return(
        <div className={"flex flex-col gap-2.5 " + className}>
            {children}
        </div>
    )
}