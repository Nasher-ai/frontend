"use client";
import React from "react";
import Form from "./form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

const lorem = `أمدها المضي الأوربيين من بين, ٣٠ بال بداية اسبوعين. ٣٠ الى تسبب فهرست وكسبت, مع بقصف الهادي إيطاليا دون. عدم بـ ومضى العالمي إيطاليا, أن وصل ونتج وتنامت. بل لغزو بلاده والديون تحت, بـ لها خطّة وانهاء الخاسرة, بـ وبعض قتيل، حول. عدم و وسوء الدّفاع, غير كل خطّة الصفحات بالتوقيع, عل غضون الإتحاد بلا. وتم تنفّس كثيرة الإتفاقية كل. فكان إجلاء لإعادة به، و, أخر التي الربيع، الساحلية مع.

مع عالمية للحكومة بالسيطرة تحت. دخول السفن تم ذلك, حتى مع أمام مشروط بالحرب, يبق وحتّى تصرّف الأعمال ما. الله بالإنزال و هذا. اللا الأولى شيء هو. وأزيز الصين الأراضي بين أم. الثالث، الكونجرس دون بـ, تحت وقام أراض الأمريكية إذ.

جُل ٣٠ بقعة لعدم أفريقيا, مقاومة لهيمنة العالمي أخر بل, شدّت اوروبا تحت بل. مسرح للسيطرة الأهداف لم دار, بفرض إبّان الى بـ. بل ٢٠٠٤ فمرّ اكتوبر ولم, بزمام الأحمر الوراء كل وتم. كل استبدال وتتحمّل أما, بحق ممثّلة الصفحات الإقتصادية هو.

غير أم ومضى أجزاء لفرنسا. مايو كرسي استراليا، به، أن, تم على وصغار واُسدل الإكتفاء. دار سقوط لغات الإمتعاض أن, بـ تشكيل المنتصر قبل. فرنسية وبغطاء أن دنو, ما بعد كُلفة بأضرار الصفحات. نتيجة وانتهاءً من يتم. كلّ اكتوبر واندونيسيا، عن. دنو فرنسا`;


export default function Response({ icon, text, isMobile }) {
    const [aiMessage, setAiMessage] = useState('');


    const simulateTyping = (message) => {
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i <= message.length) {
            setAiMessage(message.substring(0, i));
            i++;
          } else {
            clearInterval(typingInterval);
          }
        }, 20); // Adjust the timing here (in milliseconds) to control typing speed
      };

      useEffect(() => {
        simulateTyping(text)
      }, [text])
    

    return (
        
        <div className={`self-stretch ${isMobile? 'p-8' : 'inline-flex p-6'} bg-outer-grey rounded-[20px] justify-center  gap-[30px]`}>
            
            {/* Icon */}
            {/* <div className={` ${isMobile? 'text-8xl pb-5' : 'text-7xl pt-0 justify-center'} self-stretch items-start gap-2.5 flex text-outer-label `}>
                <i className={icon}></i>
            </div> */}

            <FontAwesomeIcon icon={icon} className={` ${isMobile? 'text-8xl pb-5' : 'text-7xl pt-0 justify-center'} self-stretch items-start gap-2.5 flex text-outer-label `} 
              onClick={() => field.onChange(!field.value)}/>
            
            {/* Response */}
            {/* <Form className="h-[173px]" placeholder="نبذة عن الشركة و الجمهور المستهدف"/> */}

            <div className="grow shrink basis-0 h-auto p-6 bg-inner-grey rounded-[10px] shadow items-start gap-2.5 flex">
                <div className="text-right text-white text-opacity-50 text-sm font-semibold leading-normal">
                    {/* {aiMessage} */}
                    {text}
                </div>
            </div>
            
        </div>
    )
}

