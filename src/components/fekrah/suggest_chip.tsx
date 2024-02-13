import { Button } from "@nextui-org/react";

interface Props{
    text: string;
    callback: (value: React.SetStateAction<string>) => void;
    isMobile: boolean;
}

export default function SuggestChip({text, callback, isMobile}: Props){
    return(
        <Button variant='ghost' radius='full' size={isMobile? 'sm': 'md'}
        onPress={() => callback(text)}>
            {text}
        </Button>
    )
}