"use client";
import KalamForm from "./components/KalamForm";
import Navbar from "./components/Navbar";
import Response from "./components/ui/response";
import { useState } from 'react'
import { SUPPORTED_SOCIAL_MEDIA } from "./components/ui/icon-checkbox";
import useMediaQuery from '@mui/material/useMediaQuery';


const lorem = `أمدها المضي الأوربيين من بين, ٣٠ بال بداية اسبوعين. ٣٠ الى تسبب فهرست وكسبت, مع بقصف الهادي إيطاليا دون. عدم بـ ومضى العالمي إيطاليا, أن وصل ونتج وتنامت. بل لغزو بلاده والديون تحت, بـ لها خطّة وانهاء الخاسرة, بـ وبعض قتيل، حول. عدم و وسوء الدّفاع, غير كل خطّة الصفحات بالتوقيع, عل غضون الإتحاد بلا. وتم تنفّس كثيرة الإتفاقية كل. فكان إجلاء لإعادة به، و, أخر التي الربيع، الساحلية مع.

مع عالمية للحكومة بالسيطرة تحت. دخول السفن تم ذلك, حتى مع أمام مشروط بالحرب, يبق وحتّى تصرّف الأعمال ما. الله بالإنزال و هذا. اللا الأولى شيء هو. وأزيز الصين الأراضي بين أم. الثالث، الكونجرس دون بـ, تحت وقام أراض الأمريكية إذ.

جُل ٣٠ بقعة لعدم أفريقيا, مقاومة لهيمنة العالمي أخر بل, شدّت اوروبا تحت بل. مسرح للسيطرة الأهداف لم دار, بفرض إبّان الى بـ. بل ٢٠٠٤ فمرّ اكتوبر ولم, بزمام الأحمر الوراء كل وتم. كل استبدال وتتحمّل أما, بحق ممثّلة الصفحات الإقتصادية هو.

غير أم ومضى أجزاء لفرنسا. مايو كرسي استراليا، به، أن, تم على وصغار واُسدل الإكتفاء. دار سقوط لغات الإمتعاض أن, بـ تشكيل المنتصر قبل. فرنسية وبغطاء أن دنو, ما بعد كُلفة بأضرار الصفحات. نتيجة وانتهاءً من يتم. كلّ اكتوبر واندونيسيا، عن. دنو فرنسا`;


export default function Page() {
  // const isDesktop = useMediaQuery('(min-width:605px )')
  const isMobile = useMediaQuery('(max-width:700px  )')
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
    }).then((res) => 
    {
      if (res.status != 200) {
        setIsLoading(false)
        return
      }
      console.log('Res json: ', res)
      res.json().then((d) => 
      {
        console.log("Res", d);
        setResponses(d)
        setIsLoading(false)
      });
    }).catch((e) => 
    {
      console.log('Error: ', e)
      setIsLoading(false)
    });
    console.log("responses: ", responses)
  };

    return (
        <div className=" px-[30px] w-full pt-2.5 pb-[30px] bg-black flex-col justify-start items-center gap-[60px] inline-flex">
            <Navbar isMobile={isMobile}/>
            {/* Body */}
            <div className="self-stretch justify-center items-start gap-[34px] inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-11 inline-flex">

                    {/* Tilte (mobile? 22: 26) */}
                    <div className={`${isMobile? 'text-[22px]': 'text-[26px]'} text-center text-[#B2B2B2] font-extrabold leading-[45.68px]`}>
                        اكتب منشورك القادم في لحظات
                    </div>
                    
                    {/* Form */}
                    <KalamForm onSubmit={onSubmit} isLoading={isLoading} isMobile={isMobile}/>

                    {/* Outputs */}
                    <div className="self-stretch h-auto rounded-[10px] flex-col justify-start items-end gap-[18px] flex">
                        {/* <Response icon='fa-brands fa-linkedin' text={'lorem'} isMobile={isMobile} /> */}
                        {
                        Object.values(responses).map(response => (
                            <Response 
                              key={response.platform} 
                              icon={SUPPORTED_SOCIAL_MEDIA[response.platform]['iconClass']} 
                              text={response.text}
                              isMobile={isMobile}  
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}