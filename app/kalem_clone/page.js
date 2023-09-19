import { useMediaQuery } from 'react-responsive'
import React from "react";


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
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    
      return <div>
        <h1>Device Test!</h1>
        {/* {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You  have a huge screen</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
        {isRetina && <p>You are retina</p>} */}
      </div>
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