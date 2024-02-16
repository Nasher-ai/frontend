import fekrahLogo from '../../images/fekrah_logo.svg';

interface Props{
    promptSetter: React.Dispatch<React.SetStateAction<string>>;
    isMobile: boolean;
}

export default function ExplanationContainer({promptSetter, isMobile}: Props){
    return(
        <div className='w-full flex-1 flex flex-col  items-center justify-around'>
            {/* <div/> */}
            <div className=''>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                    <img src={fekrahLogo} alt="" className='h-24 md:h-32 drop-shadow-[0_0_55px_rgba(216,146,22,0.3)]' />
                </div>
                <p className='font-mulish font-extrabold text-center w-10/12 text-lg md:text-2xl'>A brainstorming chat AI tool facilitates collaborative idea generation through real-time conversation</p> 
                </div>
            </div>
            {/* <div/> */}
            <div/>
            {/* <div/> */}
            
        </div>
    )
}