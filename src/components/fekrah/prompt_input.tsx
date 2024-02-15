import { Input, InputProps } from '@nextui-org/react';

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
                {'inputWrapper': 'rounded-2xl pr-2 h-[3rem] md:h-[3.5rem] bg-[#101010]',
                 'input': 'pl-7 pr-3 truncate md:text-lg py-5 md:py-4'}} 
            onKeyUp={e => e.key === 'Enter'? onSend(): null}
            endContent={
            <button onClick={onSend} className='bg-white w-9 h-8 md:w-11 md:h-10 flex flex-row items-center justify-center rounded-xl'>
                <span className="material-symbols-rounded text-[#101010]">
                    arrow_forward
                </span>
            </button>
               
            }
             {...props}/>
    )
}