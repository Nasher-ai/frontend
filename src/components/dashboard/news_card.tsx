import React from 'react'
import { yazanAccount } from '../../static/images';

type Props = {}

function NewsCard({}: Props) {
  return (
    <div className=" h-[8.5rem] px-[18px] py-4 bg-neutral-800 rounded-[20px] border border-neutral-900 flex-col justify-center gap-5 inline-flex">
      <div className="items-center gap-4 inline-flex">
        <img
          className="w-[45px] h-[45px] rounded-[100px]"
          src={yazanAccount}
        />
        <div className="h-[43px] flex-col justify-start inline-flex">
          <div className="text-right text-neutral-200 text-[10px] font-normal font-['IBM Plex Sans Arabic'] leading-[17.57px]">
            مشرف
          </div>
          <div className="text-right text-white text-xs font-bold font-['IBM Plex Sans Arabic'] leading-[21.08px]">
            يزن ابو النعاج
          </div>
        </div>
        
      </div>
      <div className="self-stretch text-right text-white text-opacity-80 text-[10px] font-light font-['IBM Plex Sans Arabic'] leading-[17.57px]">
        مرحباً جميعاً، أود أن أبلغكم بأننا أنجزنا المرحلة الأولى من المشروع
        بنجاح وننتقل الآن إلى المرحلة التالية. شكراً لجهودكم.
      </div>
    </div>
  );
}

export default NewsCard