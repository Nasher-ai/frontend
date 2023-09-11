"use client";
import { IconCheckbox, SUPPORTED_SOCIAL_MEDIA } from "./ui/icon-checkbox";
import Dropdown from "./ui/dropdown";
import Form from "./ui/form";
import { useForm } from "react-hook-form";



const promtPlaceholder = "السلام عليكم, اريد منك مساعدتي في كتابة محتوى عن اهميه الرياضة اليومية لجسم الإنسان و ايضا اهميتها للكبار في السن و الأثر اليومي لها عليهم نفسيا و جسدينا, المحتوى سيكون موجة لمنصة الإنستقرام"
const audiencePlaceholder = "نبذة عن الشركة او الجمهور المستهدف"

export default function KalamForm({onSubmit: submit}) {
    const onSubmit = (data) => {submit(data)
};
    
      const form = useForm({  
        defaultValues: {
          userPromt: "",
          about: "",
          tone: null,
          targetedPlatforms: {
            'facebook' : false,
            'instagram': false,
            'twitter'  : false,
            'tiktok'   : false,
            'linkedin' : false,
          },
        },
      });
    
    return(
        <form onSubmit={form.handleSubmit(onSubmit)} dir='rtl'className="self-stretch p-[30px] bg-outer-grey rounded-[20px] flex-col justify-start items-end gap-[35px] flex">
            <div className="self-stretch justify-end items-start gap-[15px] inline-flex">
                {/* Right Side */}
                <div className="grow shrink basis-0 flex-col justify-start items-end gap-[15px] inline-flex">
                    
                    {/* User Promt */}
                    <Form 
                        control={form.control}
                        // value={form.promt}
                        name="userPromt"
                        className="h-[303px]"
                        placeholder={promtPlaceholder}
                        // {...form.register('promt')}
                        // onChange={}
                    />


                    {/* Targeted Audience */}
                    <Form 
                        className="h-[180px]"
                        name="about"
                        control={form.control}
                        placeholder={audiencePlaceholder} 
                        // {...form.register('about')}
                    />

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className="self-stretch px-4 py-3 bg-gradient-to-r from-blue-begin to-blue-end rounded-[7px] justify-center items-center gap-3 inline-flex"
                        // onClick={() => console.log(form.getValues())}
                        >
                            <div className="text-right text-white text-base font-bold leading-7">انـــشــاء</div>
                    </button>
                </div>

                {/* Left Side */}
                <div className="rounded-lg flex-col justify-start items-end inline-flex">
                    
                    {/* Targeted Platform */}
                    <div className="w-[220px] h-[135px] p-4 rounded-[10px] flex-col justify-start items-end gap-[15px] flex">
                        
                        {/* Text */}
                        <div className="pr-2.5 justify-start items-end gap-2.5 inline-flex">
                            <div className="text-right text-white text-outer-label text-xs font-semibold leading-[21.08px]">المنصة المستهدفة</div>
                        </div>
                        
                        {/* Icons */}
                        <div className="w-[192px] h-[40px] p-3 bg-inner-grey rounded-xl shadow justify-center items-center gap-[12px] inline-flex text-xl">
                            {
                             
                            Object.entries(SUPPORTED_SOCIAL_MEDIA).map(([key, value])  => (
                                <IconCheckbox 
                                    icon={value.iconClass}
                                    name={`platforms.${key}`}
                                    control={form.control}
                                />
                            ))}
                            
                        </div>
                    </div>

                    {/* Tone */}
                    <div className="w-[220px] grow shrink basis-0 p-4 rounded-[10px] flex-col justify-start items-end gap-[15px] flex">
                        
                        {/* Text */}
                        <div className="pr-2.5 justify-start items-end gap-2.5 inline-flex">
                            <div className="text-right text-white text-outer-label text-xs font-semibold leading-[21.08px]">النبره</div>
                        </div>

                        {/* Dropdown */}
                        <Dropdown 
                            control={form.control}
                            name="tone"
                        />
                
        
                    </div>
                </div>
            </div>
        </form>

    )
}