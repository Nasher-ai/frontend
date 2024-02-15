import { Button } from "@nextui-org/react";

interface Props{
    text: string;
    callback: (value: React.SetStateAction<string>) => void;
    isMobile: boolean;
}

export default function SuggestChip({text, callback, isMobile}: Props){
    return(
        <button className="border px-3.5 text-sm md:text-base py-2 md text-nowrap rounded-full border-[#3f3f46] bg-black"
        onClick={() => callback(text)}>
            {text}
        </button>
    )
}