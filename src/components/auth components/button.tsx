import { Button } from "@nextui-org/react";

interface Props {
    className?: string
    label?: string
    outlined?: boolean 
}

export default function PageButton({label: text, outlined: isOutlined = false, className}: Props){
    return(
    <Button className={`flex font-semibold
    ${isOutlined? 'text-white ':'text-black bg-white'} ${className}`}
    variant={isOutlined? 'bordered': 'solid'}>
        {text}
    </Button>)
}