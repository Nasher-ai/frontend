"use client"
import Image from "next/image";

export default function Navbar({ isMobile }) {
    return (
        <div className={"w-[100%] p-2.5 bg-outer-grey rounded-[10px] justify-between items-center gap-2.5 inline-flex mb-5"}>
            
            {/* Logo */}
            <div className="p-3 bg-inner-grey rounded-[5px] flex-col justify-center items-center inline-flex">
                <div className="p-1 relative">
                    <Image 
                    src="/images/nasher_logo.png"
                    width={isMobile ? 128 :187}
                    height={isMobile ? 32: 46}
                    quality={100}
                    />
                </div>
            </div>

            {/* Preorder Button */}
            <button className={`${isMobile? ' w-[160px] h-[63px]': ''} px-[8px] self-stretch bg-gradient-to-r from-blue-begin to-blue-end rounded-[7px] flex-col justify-center items-center gap-3 inline-flex`}>
                <div 
                  className="justify-center items-center gap-2.5 inline-flex"
                  onClick={() => {
                    console.log("Preorder button clicked")
                  }}
                >
                    <div className={`${isMobile? 'text-xs': 'text-base'} text-center text-zinc-300 font-bold leading-7`}>سجل في الإطلاق المسبق</div>
                </div>
            </button>
            
        </div>
    );
}