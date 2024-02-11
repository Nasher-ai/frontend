import { ReactNode } from "react";
import {Input, InputProps} from "@nextui-org/react";

interface Props extends InputProps{
    children?: ReactNode
    className?: string
    label?: string
    // any props that come into the component
}

export default function PageInput({label, }: Props){
    return(
        <Input size="sm" variant="bordered" label={label}  />
    )
}