import Image from "next/image";
import React from "react";


const Navbar = () => {
    return (
        <div className="self-stretch p-2.5 bg-outer-grey rounded-[10px] justify-between items-center gap-2.5 inline-flex mb-5">
            {/* Preorder Button */}
            <div className="self-stretch px-[22px] hover:bg-sky-700 bg-gradient-to-r from-blue-begin to-blue-end rounded-[7px] flex-col justify-center items-center gap-3 inline-flex">
                <div className="justify-center items-center gap-2.5 inline-flex">
                    <div className="text-right text-zinc-300 text-base font-bold leading-7">سجل في الإطلاق المسبق</div>
                </div>
            </div>

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
        </div>
    )
}

export default Navbar
