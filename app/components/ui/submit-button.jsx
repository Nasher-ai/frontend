import { PulseLoader } from "react-spinners";
import { useState } from "react";

export default function SubmitButton({ isDisabled, isLoading }) {
    // const [isLoading, setIsLoading] = useState(false);

    const label = <div className="text-right text-base font-bold leading-7">انـــشــاء</div>
    const defualtClass = "self-stretch px-4 py-3 bg-gradient-to-r disabled:from-[#3E3E3E] disabled:to-[#3E3E3E] disabled:text-[#6B6B6B] disabled:stroke-2 text-white from-blue-begin to-blue-end rounded-[7px] justify-center items-center gap-3 inline-flex"
    const disabledState = "disabled:from-[#3E3E3E] disabled:to-[#3E3E3E] disabled:text-[#6B6B6B] disabled:stroke-2"

    return (
            <button 
                type="submit"
                disabled={isDisabled}
                className="self-stretch px-[16px] py-[12px] bg-gradient-to-r disabled:from-[#3E3E3E] disabled:to-[#3E3E3E] disabled:text-[#6B6B6B] disabled:ring  disabled:stroke-2 text-white from-blue-begin to-blue-end rounded-[7px] justify-center items-center gap-3 inline-flex"
                // onClick={() => console.log('submited')}
                >
                    {isLoading 
                        ?
                        <PulseLoader className="text-base py-[4.495px]" color="#fff" />
                        : label
                    }
            </button>
    )
}