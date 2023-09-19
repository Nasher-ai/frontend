import { IconCheckbox, SUPPORTED_SOCIAL_MEDIA } from "./icon-checkbox";
import Dropdown from "./dropdown";
import Form from "./form";
import SubmitButton from "./submit-button";

const promtPlaceholder = "السلام عليكم, اريد منك مساعدتي في كتابة محتوى عن اهميه الرياضة اليومية لجسم الإنسان و ايضا اهميتها للكبار في السن و الأثر اليومي لها عليهم نفسيا و جسدينا, المحتوى سيكون موجة لمنصة الإنستقرام"
const audiencePlaceholder = "نبذة عن الشركة او الجمهور المستهدف"

export default function MobileForm({ onSubmit, isLoading, isSubmitDisabled, control }) {
    
    {/* User Promt */}
    const prompt = <Form 
                        control={control}
                        // value={form.promt}
                        name="userPrompt"
                        className="h-[303px] flex-1"
                        placeholder={promtPlaceholder}
                        // {...form.register('promt')}
                        // onChange={}
                    />


    {/* Targeted Audience */}
    const about = <Form 
                        className="h-[180px] flex-1"
                        name="about"
                        control={control}
                        placeholder={audiencePlaceholder} 
                        // {...form.register('about')}
                    />


    {/* Submit Button */}
    const submit = <SubmitButton 
                    isDisabled={isSubmitDisabled}
                    isLoading={isLoading}    
                />

    
    {/* Targeted Platform */}
    const platforms = <div className="px-4 pt-0 pb-20 rounded-[10px] flex-col justify-start gap-[15px] flex">
                        
                        {/* Text */}
                        <div className="pr-2.5 justify-start gap-2.5 inline-flex">
                            <div className="text-right text-white text-outer-label text-s font-semibold leading-[21.08px]">المنصة المستهدفة</div>
                        </div>
                        
                        {/* Icons Container*/}
                        <div className="px-5 py-4 bg-inner-grey rounded-xl shadow justify-between items-center  inline-flex text-4xl">
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
    const tone = <div className="grow shrink basis-0 px-4 pb-6 rounded-[10px] flex-col justify-start gap-[15px] flex">
                        
                        {/* Text */}
                        <div className="pr-2.5 justify-start items-end gap-2.5 inline-flex">
                            <div className="text-right text-white text-outer-label text-s font-semibold leading-[21.08px]">النبره</div>
                        </div>

                        {/* Dropdown */}
                        <Dropdown 
                            control={control}
                            name="tone"
                            isMobile={true}
                        />
        
                    </div>

    return (
        <div className="self-stretch items-start gap-[20px] grid flex-col ">
            <div className="py-9">
                {platforms}
                {tone}
            </div>
            {prompt}
            {about}
            {submit}
        </div>
    )
}