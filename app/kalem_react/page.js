"use client";
import KalamForm from "./components/KalamForm";
import Navbar from "./components/Navbar";
import Response from "./components/ui/response";
import { useState } from 'react'
import { SUPPORTED_SOCIAL_MEDIA } from "./components/ui/icon-checkbox";


export default function Page() {
    const [responses, setResponses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    console.log('fetching')
    console.log('data: ', data)
    setIsLoading(true)
    setResponses([])

    data.tone = data.tone?.value
    fetch("/api/kalem", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status != 200) {
        setIsLoading(false)
        return
      }
      console.log('Res json: ', res)
      res.json().then((d) => {
        console.log("Res", d);
        setResponses(d)
        setIsLoading(false)
      });
    }).catch((e) => {
      console.log('Error: ', e)
      setIsLoading(false)
    });
    console.log("responses: ", responses)

    // const targetedPlatforms = data.platforms;
    // console.log('type', typeof responses)
    // let toPush = []
    // for (const [plat, isTargeted] of Object.entries(targetedPlatforms)) {
    //     if(isTargeted) {
    //         toPush.push(plat)
    //     }
    // }
    // setResponses(toPush)
  };

    return (
        <div className=" px-[30px] w-full pt-2.5 pb-[30px] bg-black flex-col justify-start items-center gap-[60px] inline-flex">
            <Navbar/>
            {/* Body */}
            <div className="self-stretch justify-center items-start gap-[34px] inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-11 inline-flex">

                    {/* Tilte */}
                    <div className="text-center text-[#B2B2B2] text-[26px] font-extrabold leading-[45.68px]">
                        اكتب منشورك القادم في لحظات
                    </div>
                    
                    {/* Form */}
                    <KalamForm onSubmit={onSubmit} isLoading={isLoading}/>

                    {/* Outputs */}
                    <div className="self-stretch h-auto rounded-[10px] flex-col justify-start items-end gap-[18px] flex">
                        {
                        Object.values(responses).map(response => (
                            <Response key={response.platform} icon={SUPPORTED_SOCIAL_MEDIA[response.platform]['iconClass']} text={response.text}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}