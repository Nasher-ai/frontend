import React from 'react'

type Props = {}

function ScrapedSumCard({}: Props) {
  return (
    <div className="w-full px-[18px] py-5 bg-neutral-800 rounded-[20px] border border-neutral-900 flex-col justify-start items-start gap-1.5 inline-flex">
      <div className="text-right text-white text-s font-medium font-['IBM Plex Sans Arabic'] leading-[21.08px]">
        اسبريسو لاب
      </div>
      <div className="self-stretch text-right text-white text-opacity-80 text-xs font-light font-['IBM Plex Sans Arabic'] leading-[17.57px]">
        لم يتم تحديد محتوى محدد للسحب من مواقع معينة في هذا السياق، لذلك لا
        يمكنني توفير ملخص محدد للبيانات المسحوبة. إذا كان لديك مصدر معين أو
        بيانات محددة ترغب في{" "}
      </div>
    </div>
  );
}

export default ScrapedSumCard