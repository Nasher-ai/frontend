import Image from "next/image";
import React from "react";


const OutputBlock = ({ icon, text }) => {
    return (
        <div className="self-stretch p-6 bg-outer-grey rounded-[20px] justify-center items-center gap-[30px] inline-flex">
            
            {/* Icon */}
            <div className="w-[61px] self-stretch pt-6 justify-center items-start gap-2.5 flex text-outer-label text-6xl">
                <i className={icon}></i>
            </div>
            
            {/* Response */}
            <div className="grow shrink basis-0 h-[173px] p-4 bg-inner-grey rounded-[10px] shadow items-start gap-2.5 flex">
                <div className="text-right text-white text-opacity-50 text-sm font-semibold leading-normal">
                    {text ? text : 'نبذة عن الشركة و الجمهور المستهدف' }
                </div>
            </div>
            
        </div>
    )
}

export default OutputBlock
