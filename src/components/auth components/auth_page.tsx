import { ReactNode } from "react";
import { authImage, nasherLogo } from "../../static/images";

interface Props {
    children?: ReactNode
    className?: string
    gap?: number
    twoSide?: boolean
    hideLogo?: boolean
    // any props that come into the component
}

export default function AuthPage({
        className, 
        children, 
        gap = 6.5, 
        twoSide = false, 
        hideLogo = false,
    } : Props){
    return(
        <div className=" h-screen flex bg-black items-center justify-center">
            <div className={`bg-black h-[95%] w-[95%] max-w-[1700] border rounded-[2rem] drop-shadow-[0_4px_18px_rgba(255,255,255,0.12)] border-white border-opacity-25 font-inter  flex-row flex text-white justify-center ${!twoSide? 'p-8': 'pt-8 pl-8 pr-16 pb-16'}`}>
                {/* Left Side */}
                {twoSide? 
                    <div className="flex-1 flex-col flex justify-between ">
                        {/* Logo */}
                        <div className="w-[16.5rem] ">
                            <img src={nasherLogo} alt="Nasher"/>
                        </div>

                        {/* Image */}
                        <div className="w-[60%] max-w-64">
                            <img src={authImage} alt="" />
                        </div>

                        {/* Bottom Text */}
                        <div className="w-[65%] break-words">
                            <div className=" text-3xl text-white pb-5 font-bold "
                            >
                                Your Tool to Creativity
                            </div>

                            <div className="text-lg text-white text-opacity-80">
                                Automate the process of content creation and posting with enabling the power of AI.
                            </div>
                        </div>
                        
                    </div> : !hideLogo ?
                        <div className="w-[16.5rem] absolute left-8">
                            <img src={nasherLogo} alt="Nasher"/>
                        </div> : <></>
                }
                {/* Right Side */}
                <div className={`flex-col justify-center flex ${twoSide? 'flex-1': 'w-1/2 justify-center'} gap-[${gap}rem] ${className}`}>
                    {children}
                </div>   
            </div> 
        </div>
        
    )
}