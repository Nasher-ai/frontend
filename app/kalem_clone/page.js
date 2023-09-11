import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar";
import { Noto_Sans_Arabic } from 'next/font/google'
import OutputBlock from "./components/output_block";

// const font = Noto_Sans_Arabic({
//     subsets: ['arabic'],
//     variable: '--font-noto-sans'
// })

// Todo:
//  - Break down the code to components
//  - Make app functional
//  - Edit styling (fonts, icons)
//  - Add the backend side

const page = () => {
    return (
        <div className=" px-[30px] pt-2.5 pb-[30px] bg-black flex-col justify-start items-center gap-[60px] inline-flex">
            {/* Nav Bar */}
            <Navbar></Navbar>

            {/* Body */}
            <div className="self-stretch justify-center items-start gap-[34px] inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-11 inline-flex">

                    {/* Tilte */}
                    <div className="text-center text-[#B2B2B2] text-[26px] font-extrabold leading-[45.68px]">
                        اكتب منشورك القادم في لحظات
                    </div>
                    
                    {/* Inputs Container */}
                    <div className="self-stretch h-[631px] p-[30px] bg-outer-grey rounded-[20px] flex-col justify-start items-end gap-[35px] flex">
                        <div className="self-stretch justify-end items-start gap-[15px] inline-flex">
                            <div className="h-[571px] rounded-lg flex-col justify-start items-end inline-flex">
                                
                                {/* Targeted Platform */}
                                <div className="w-[220px] h-[135px] p-4 rounded-[10px] shadow flex-col justify-start items-end gap-[15px] flex">
                                    
                                    {/* Text */}
                                    <div className="pr-2.5 justify-start items-end gap-2.5 inline-flex">
                                        <div className="text-right text-white text-outer-label text-xs font-semibold leading-[21.08px]">المنصة المستهدفة</div>
                                    </div>
                                    
                                    {/* Icons */}
                                    <div className="w-[192px] h-[40px] p-3 bg-inner-grey rounded-xl shadow justify-center items-center gap-[12px] inline-flex text-xl">
                                        <button className=" focus:bg-violet-700  ">
                                            <i class="fa-brands fa-linkedin fa-fw text-outer-label"/>
                                        </button>
                                        <button className="text-outer-label focus:bg-violet-700">
                                            <i class="fa-brands fa-tiktok fa-fw "/>
                                        </button>
                                        <span className="text-outer-label">
                                            <i class="fa-brands fa-square-x-twitter fa-fw"/>
                                        </span>
                                        <span className="text-outer-label">
                                            <i class="fa-brands fa-instagram fa-fw"/>
                                        </span>
                                        <span className="text-outer-label">
                                            <i className="fa-brands fa-square-facebook fa-fw"/>
                                        </span>
                                    </div>
                                </div>

                                {/* Tone */}
                                <div className="w-[220px] grow shrink basis-0 p-4 rounded-[10px] shadow flex-col justify-start items-end gap-[15px] flex">
                                    
                                    {/* Text */}
                                    <div className="pr-2.5 justify-start items-end gap-2.5 inline-flex">
                                        <div className="text-right text-white text-outer-label text-xs font-semibold leading-[21.08px]">النبره</div>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="w-[192px] h-[40px] p-2 bg-inner-grey rounded-xl shadow justify-end items-center gap-[22px] inline-flex">
                                        <div className="grow shrink basis-0 self-stretch p-[5px] justify-between items-center gap-[11px] flex">
                                            <div className="text-right text-zinc-500 text-[11px] font-bold leading-tight">نـــبرة الخطاب</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grow shrink basis-0 flex-col justify-start items-end gap-[15px] inline-flex">
                                
                                {/* User Promt */}
                                <div className="self-stretch h-[303px] pl-[45px] pr-4 pt-4 pb-[34px] bg-inner-grey rounded-[10px] shadow justify-end items-start gap-2.5 inline-flex">
                                    <div className="grow shrink basis-0 text-right text-neutral-400 text-sm font-semibold leading-[34.40px]">السلام عليكم, اريد منك مساعدتي في كتابة محتوى عن اهميه الرياضة اليومية لجسم الإنسان و ايضا اهميتها للكبار في السن و الأثر اليومي لها عليهم نفسيا و جسدينا, المحتوى سيكون موجة لمنصة الإنستقرام</div>
                                </div>

                                {/* Targeted Audience */}
                                <div className="self-stretch h-[180px] pl-[45px] pr-4 pt-4 pb-[34px] bg-inner-grey rounded-[10px] shadow justify-end items-start gap-2.5 inline-flex">
                                    <div className="grow shrink basis-0 text-right text-neutral-400 text-sm font-semibold leading-[34.40px]">نبذة عن الشركة او الجمهور المستهدف</div>
                                </div>

                                {/* Submit Button */}
                                <div className="self-stretch px-4 py-3 bg-gradient-to-r from-blue-begin to-blue-end rounded-[7px] justify-center items-center gap-3 inline-flex">
                                    <div className="text-right text-white text-base font-bold leading-7">انـــشــاء</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Outputs */}
                    <div className="self-stretch h-[1177px] rounded-[10px] flex-col justify-start items-end gap-[18px] flex">
                        <OutputBlock icon="fa-brands fa-square-facebook"/>
                        <OutputBlock icon="fa-brands fa-instagram"/>
                        <OutputBlock icon="fa-brands fa-square-x-twitter"/>
                        <OutputBlock icon="fa-brands fa-tiktok"/>
                        <OutputBlock icon="fa-brands fa-linkedin"/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default page



const htmlCssCode = <div className="main">


{/* App Bar */}
<div className="appbar">
    
    {/* Preorder Button */}
    <div className="preorder-container">
        <div className="preorder-content">
            <div className="preorder-text">سجل في الإطلاق المسبق</div>
        </div>
    </div>

    {/* Logo */}
    <div className="logo-container">
        <div className="logo-image">
        </div>
    </div>
</div>

{/* Body */}
<div className="body">
    <div className="body-content">

        {/* Tilte */}
        <div className="title">اكتب منشورك القادم في لحظات</div>
        
        {/* Input Container */}
        <div className="input-container">
            <div className="input-containter-inner">
                <div className="input-container-content">
                    
                    {/* Targeted Platform */}
                    <div className="platforms-container">
                        <div className="platfoems-content">
                            <div className="platforms-text">المنصة المستهدفة</div>
                        </div>
                        <div className="platforms-icons-container" />
                    </div>

                    {/* Tone */}
                    <div className="tone-container">
                        <div className="tone-content">
                            <div className="tone-text">النبره</div>
                        </div>
                        <div className="tone-dropdown-container">
                            <div className="tone-dropdown">
                                <div className="tone-dropdown-text">نـــبرة الخطاب</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="input-fields-container">
                    
                    {/* User Promt */}
                    <div className="user-promt-container">
                        <div className="user-promt-text">السلام عليكم, اريد منك مساعدتي في كتابة محتوى عن اهميه الرياضة اليومية لجسم الإنسان و ايضا اهميتها للكبار في السن و الأثر اليومي لها عليهم نفسيا و جسدينا, المحتوى سيكون موجة لمنصة الإنستقرام</div>
                    </div>

                    {/* Targeted Audience */}
                    <div className="audience-container">
                        <div className="audience-text">نبذة عن الشركة او الجمهور المستهدف</div>
                    </div>

                    {/* Submit Button */}
                    <div className="submit-container">
                        <div className="submit-text">انـــشــاء</div>
                    </div>

                </div>
            </div>
        </div>

        {/* Output */}
        <div className="outputs-container">
            <div className="facebook-output">
                <div className="grow shrink basis-0 h-[173px] p-4 bg-zinc-800 rounded-[10px] shadow justify-end items-start gap-2.5 flex">
                    <div className="text-right text-white text-opacity-50 text-sm font-semibold leading-normal">نبذة عن الشركة و الجمهور المستهدف</div>
                </div>
                <div className="w-[61px] self-stretch pt-6 justify-center items-start gap-2.5 flex" />
            </div>
            <div className="facebook-output">
                <div className="grow shrink basis-0 h-[173px] p-4 bg-zinc-800 rounded-[10px] shadow justify-end items-start gap-2.5 flex">
                    <div className="text-right text-white text-opacity-50 text-sm font-semibold leading-normal">نبذة عن الشركة و الجمهور المستهدف</div>
                </div>
                <div className="w-[61px] self-stretch pt-6 justify-center items-start gap-2.5 flex" />
            </div>
            <div className="facebook-output">
                <div className="grow shrink basis-0 h-[173px] p-4 bg-zinc-800 rounded-[10px] shadow justify-end items-start gap-2.5 flex">
                    <div className="text-right text-white text-opacity-50 text-sm font-semibold leading-normal">نبذة عن الشركة و الجمهور المستهدف</div>
                </div>
                <div className="w-[61px] self-stretch pt-6 justify-center items-start gap-2.5 flex" />
            </div>
            <div className="facebook-output">
                <div className="grow shrink basis-0 h-[173px] p-4 bg-zinc-800 rounded-[10px] shadow justify-end items-start gap-2.5 flex">
                    <div className="text-right text-white text-opacity-50 text-sm font-semibold leading-normal">نبذة عن الشركة و الجمهور المستهدف</div>
                </div>
                <div className="w-[61px] self-stretch pt-6 justify-center items-start gap-2.5 flex" />
            </div>
            <div className="facebook-output">
                <div className="grow shrink basis-0 h-[173px] p-4 bg-zinc-800 rounded-[10px] shadow justify-end items-start gap-2.5 flex">
                    <div className="text-right text-white text-opacity-50 text-sm font-semibold leading-normal">نبذة عن الشركة و الجمهور المستهدف</div>
                </div>
                <div className="w-[61.08px] self-stretch pt-6 justify-center items-start gap-2.5 flex" />
            </div>
        </div>
    </div>
</div>
</div>