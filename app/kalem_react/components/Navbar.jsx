"use client"
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-[100%] p-2.5 bg-outer-grey rounded-[10px] justify-between items-center gap-2.5 inline-flex mb-5">
            
            {/* Logo */}
            <div className="p-3 bg-inner-grey rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[186.97px] h-[45.76px] relative">
                    <Image 
                    src="/images/nasher_logo.png"
                    width={187}
                    height={46}
                    />
                </div>
            </div>

            {/* Preorder Button */}
            <button className="self-stretch px-[22px] bg-gradient-to-r from-blue-begin to-blue-end rounded-[7px] flex-col justify-center items-center gap-3 inline-flex">
                <div 
                  className="justify-center items-center gap-2.5 inline-flex"
                  onClick={() => {
                    console.log("Preorder button clicked")
                  }}
                >
                    <div className="text-right text-zinc-300 text-base font-bold leading-7">سجل في الإطلاق المسبق</div>
                </div>
            </button>
            
        </div>
    );
}