import { Button, Input, InputProps } from '@nextui-org/react';

interface Props extends InputProps{
    isLoading?: boolean
    onSend?: (() => void)
}

export default function PromptInput({isLoading = false, onSend = ()=>null, ...props}: Props){
    return(
        <Input 
            
            variant='faded' 
            placeholder='Write to Fekrah what is in your mind' 
            classNames={
                {'inputWrapper': 'rounded-2xl h-[3.5rem] bg-[#101010]',
                 'input': 'pl-7 pr-4 text-lg  py-4'}} 
            onKeyUp={e => e.key == 'Enter'? onSend(): null}
            endContent={
                <Button isIconOnly onPress={onSend} isLoading={isLoading}   className='bg-white'>
                    <span className="material-symbols-rounded text-[#101010]">
                        arrow_forward
                    </span>
                </Button>
            }
             {...props}/>
    )
}