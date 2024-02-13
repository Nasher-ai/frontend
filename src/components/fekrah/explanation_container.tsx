import { Button } from '@nextui-org/react';
import fekrahLogo from '../../images/fekrah_logo.svg';

interface Props{
    promptSetter: React.Dispatch<React.SetStateAction<string>>
}

export default function ExplanationContainer({promptSetter}: Props){
    return(
        <div className='flex-1 flex pb-28 flex-col items-center justify-between'>
            <div/>
            <div className='flex flex-col items-center gap-5'>
                <div>
                <img src={fekrahLogo} alt="" className='drop-shadow-[0_0_55px_rgba(216,146,22,0.3)]' />
            </div>
            <p className='font-mulish font-extrabold text-center w-8/12 text-2xl'>A brainstorming chat AI tool facilitates collaborative idea generation through real-time conversation</p> 
            </div>
            
            {/* Suggestions */}
            <div className='flex flex-row gap-2'>
                <Button variant='ghost' radius='full' 
                onPress={() => promptSetter('Write about war')}>
                    Write about war
                </Button>
                <Button variant='ghost' radius='full'
                onPress={() => promptSetter('Write about health care')}>
                    Write about health care
                </Button>
                <Button variant='ghost' radius='full'
                onPress={() => promptSetter('Write about Sport')}>
                    Write about Sport
                </Button>
            </div>
        </div>
    )
}