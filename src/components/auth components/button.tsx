import { Button, ButtonProps } from "@nextui-org/react";

interface Props extends ButtonProps{
    className?: string
    label?: string
    outlined?: boolean 
}

export default function PageButton({label, outlined = false, className, ...props}: Props){
    return(
    <Button className={`flex font-semibold
    ${outlined? 'text-white ':'text-black bg-white'} ${className}`} 
    variant={outlined? 'bordered': 'solid'} {...props}>
        {label}
    </Button>)
}