import { ReactNode } from "react";


interface Props {
    children?: ReactNode
    className?: string
    title?: string
    whiteSpace?: string
    // any props that come into the component
}

export default function HeadingText({title, children, className}: Props){
    return(
        <div className={"flex-col items-start gap-2.5 inline-flex " + className}>
            <div className="text-white text-[32px] font-bold font-inter">
                {title}
            </div>
            <div className="text-white gap-1 flex-row flex text-base">
                {children}
            </div>    
        </div>
    )
}