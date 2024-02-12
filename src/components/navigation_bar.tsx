import { Listbox, ListboxItem, Chip, User, Progress } from '@nextui-org/react';
import logo from '../images/nasher_logo.svg';
import fekrahIcon from '../images/fekrah_icon.svg';
import scraperIcon from '../images/scraper_icon.svg';
import rankingIcon from '../images/ranking_icon.svg';
import settingsIcon from '../images/setting_icon.svg';


export default function NavigationBar(){
    const name = 'John'
    const credit = 8
    const maxCredit = 12
    const hideCredits = true

    return(
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
    )
}