import TextareaAutosize from 'react-textarea-autosize';


interface Props {
    isLoading: boolean
    isMobile: boolean
    value?: string | number | readonly string[] | undefined
    promptSetter: (value: React.SetStateAction<string>) => void
    onSend?: (() => void)
}

export default function PromptInput({value, isMobile, isLoading = false, promptSetter = ()=>null , onSend = ()=>null}: Props){
    const placeholder = 'Write to Fekrah what is in your mind'

    return(
        <>
        
        <div className='w-full flex flex-row items-end relative border-medium border-default-200 hover:border-default-400 transition-background duration-150 transition-colors motion-reduce:transition-none rounded-2xl p-2  pl-4  bg-[#101010]'>
            {/* <div className='w-full h-full flex items-start'> */}
                <TextareaAutosize className='w-full bg-transparent scrollbar-hide focus-visible:outline-none break-words resize-none py-1 md:py-2 min-h-[1rem] max-h-[80svh] md:min-h-[2rem] ' 
                placeholder={placeholder} 
                value={value}
                inputMode='text'
                autoFocus
                onInput={e => promptSetter(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.key !== 'Enter') return
                    if (isMobile) {
                        onSend();
                        e.currentTarget.blur();
                    }
                    if (!e.shiftKey) {
                        e.preventDefault();
                        onSend();  
                    }                       
                }}
                />
                <button
                onClick={onSend}
                className="bg-white w-9 h-8 md:w-11 md:h-10 flex flex-row items-center justify-center rounded-xl"><span className="material-symbols-rounded text-[#101010]">arrow_forward</span></button>
            {/* </div> */}
        </div>


            

        {/* <Input 
            variant='faded' 
            placeholder={placeholder}
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
             {...props}/> */}
             
             
             </>
    )
}