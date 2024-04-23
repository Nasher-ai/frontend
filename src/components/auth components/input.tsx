import { ReactNode } from "react";
import {Input, InputProps} from "@nextui-org/react";

interface Props extends InputProps{
    children?: ReactNode
    className?: string
    label?: string
    isMissing?: boolean
    // any props that come into the component
}

export default function PageInput({label, isMissing = false, ...props}: Props){
    return(
        <Input size="sm" variant="bordered" label={label} color={isMissing ? "danger": "default"} isRequired={isMissing} classNames={{'inputWrapper':(isMissing?'border-pink-600': '')}}  {...props}/>
    )
}