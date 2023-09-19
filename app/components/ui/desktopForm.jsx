import { IconCheckbox, SUPPORTED_SOCIAL_MEDIA } from "./icon-checkbox";
import Dropdown from "./dropdown";
import Form from "./form";
import SubmitButton from "./submit-button";

const promtPlaceholder = "السلام عليكم, اريد منك مساعدتي في كتابة محتوى عن اهميه الرياضة اليومية لجسم الإنسان و ايضا اهميتها للكبار في السن و الأثر اليومي لها عليهم نفسيا و جسدينا, المحتوى سيكون موجة لمنصة الإنستقرام"
const audiencePlaceholder = "نبذة عن الشركة او الجمهور المستهدف"

export default function DesktopForm({ onSubmit, isLoading, isSubmitDisabled, control }) {

    return (
        <div className="self-stretch justify-end items-start gap-[15px] inline-flex">
            {/* Right Side */}
            <div className="grow shrink basis-0 flex-col justify-start items-end gap-[15px] inline-flex">
                
                {/* User Promt */}
                <Form 
                    control={control}
                    // value={form.promt}
                    name="userPrompt"
                    className="h-[303px]"
                    placeholder={promtPlaceholder}
                    // {...form.register('promt')}
                    // onChange={}
                />


                {/* Targeted Audience */}
                <Form 
                    className="h-[180px]"
                    name="about"
                    control={control}
                    placeholder={audiencePlaceholder} 
                    // {...form.register('about')}
                />

                {/* Submit Button */}
                <SubmitButton 
                    isDisabled={isSubmitDisabled}
                    isLoading={isLoading}    
                />
            </div>

            {/* Left Side */}
            <div className="rounded-lg flex-col justify-start items-end inline-flex">
                
                {/* Targeted Platform */}
                <div className="w-[220px] h-[135px] p-4 rounded-[10px] flex-col justify-start items-end gap-[15px] flex">
                    
                    {/* Text */}
                    <div className="pr-2.5 justify-start items-end gap-2.5 inline-flex">
                        <div className="text-right text-white text-outer-label text-xs font-semibold leading-[21.08px]">المنصة المستهدفة</div>
                    </div>
                    
                    {/* Icons Container */}
                    <div className="w-[192px] h-[40px] p-3 bg-inner-grey rounded-xl shadow justify-center items-center gap-[12px] inline-flex text-xl">
                        {
                            
                        Object.entries(SUPPORTED_SOCIAL_MEDIA).map(([key, value])  => (
                            <IconCheckbox 
                                key={key}
                                icon={value.iconClass}
                                name={`targetedPlatforms.${key}`}
                                control={control}
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
                        control={control}
                        name="tone"
                    />
    
                </div>
            </div>
        </div>
    )
}