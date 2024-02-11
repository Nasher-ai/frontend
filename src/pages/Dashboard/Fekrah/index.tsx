import { Chip, Input, Listbox, ListboxItem, Progress, User, Button } from '@nextui-org/react';
import logo from '../../../images/nasher_logo.svg';
import fekrahIcon from '../../../images/fekrah_icon.svg';
import scraperIcon from '../../../images/scraper_icon.svg';
import rankingIcon from '../../../images/ranking_icon.svg'
import settingsIcon from '../../../images/setting_icon.svg';
import sendIcon from '../../../images/send_icon.svg';   
import fekrahLogo from '../../../images/fekrah_logo.svg';

export default function FekrahPage(){
    const name = 'Abdulaziz'
    const credit = 8
    const maxCredit = 12
    const hideCredits = true

    return(
        <div className="flex flex-row h-screen">
            {/* Navigation Bar */}
            <div className="bg-[#101010] flex flex-col pt-4 pb-3 px-3 justify-between rounded-xl m-2 w-60 ">
                <div>
                    {/* Logo */}
                    <img src={logo} alt="Nasher" className='px-4 pb-9'/>

                    {/* Navigation */}
                    <div>
                        <Listbox disabledKeys={['scraper', 'analytics']} classNames={{list: 'gap-3'}}>
                            <ListboxItem startContent={<img src={fekrahIcon} alt=''/>} key='fekrah' className='font-semibold'>
                                Fekrah
                            </ListboxItem>
                            <ListboxItem startContent={<img src={scraperIcon} alt=''/>} key='scraper' className='font-semibold' endContent={<Chip color='primary' variant='flat' size='sm'>Coming Soon</Chip>}>
                                Scraper
                            </ListboxItem>
                            <ListboxItem startContent={<img src={rankingIcon} alt=''/>} key='analytics' className='font-semibold' endContent={<Chip color='primary' variant='flat' size='sm'>Coming Soon</Chip>}>
                                Analytics
                            </ListboxItem>
                        </Listbox>
                    </div>
                </div>

                {/* User Data */}
                <div className='flex flex-col gap-3'>
                    {/* Profile Card */}
                    <div className='bg-[#1F1F1F] h-14 rounded-[0.625rem] p-3  flex justify-between'>
                        <User name={name} classNames={{'name': 'font-semibold'}}/>
                        <img src={settingsIcon} alt="" />
                    </div>
                    {/* Credits Card */}
                    {hideCredits ? <></> : <div className='bg-[#1F1F1F] h-[4.5rem] rounded-[0.625rem] flex flex-col p-3 items-center justify-between text-lg font-black'>
                        <div className='flex-row flex items-center gap-2'>
                           <div className='font-bold text-base'>{credit}</div> Credits 
                        </div>
                        <Progress value={(credit / maxCredit) * 100} classNames={{indicator: "bg-white"}}/>
                    </div>}
                </div>
            </div>
            <div className='flex-1 my-11 mx-16 gap-28 items-center justify-end flex flex-col'>
                <div className='flex-1 flex flex-col items-center justify-between'>
                    <div className='flex flex-col items-center gap-5'>
                       <div>
                        <img src={fekrahLogo} alt="" className='drop-shadow-[0_0_55px_rgba(216,146,22,0.3)]' />
                    </div>
                    <p className='font-mulish font-extrabold text-center w-8/12 text-2xl'>A brainstorming chat AI tool facilitates collaborative idea generation through real-time conversation</p> 
                    </div>
                    
                    {/* Suggestions */}
                    <div className='flex flex-row gap-2'>
                        <Button variant='ghost' radius='full'>Write about war</Button>
                        <Button variant='ghost' radius='full'>Write about health care</Button>
                        <Button variant='ghost' radius='full'>Write about Sport</Button>
                    </div>
                </div>
                <Input variant='faded' placeholder='Write to Fekrah what is in your mind' classNames={{'inputWrapper': 'rounded-2xl h-[3.5rem] bg-[#101010]', 'input': 'pl-7 pr-5 py-4 text-lg  py-4'}} endContent={<img className='h-9' src={sendIcon} alt=''/>}/>
            </div>
        </div>
    )
}