import fekrahLogo from '../../images/fekrah_logo.svg';

export default function ExplanationContainer(){
    return(
        <div className='w-full flex-1 flex flex-col  items-center justify-around'>
            {/* <div/> */}
            <div className=''>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                    <img src={fekrahLogo} alt="" className='h-24 md:h-32 drop-shadow-[0_0_45px_rgba(216,146,22,0.65)]' />
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