import React from 'react'

type Props = {}

function BotCard({}: Props) {
  return (
    <div className=" h-20 px-[18px] py-5 bg-neutral-800 rounded-[20px] justify-between items-center inline-flex">
      <div className="rounded-[20px] justify-end items-center gap-1.5 flex">
        <div className="text-center text-white text-opacity-80 text-[8px] font-normal font-['IBM Plex Sans Arabic'] leading-[14.06px]">
          نشط
        </div>
        <div className="w-[5px] h-[5px] bg-emerald-600 rounded-full"></div>
      </div>
      <div className="justify-end items-start gap-2 flex">
        <div className="flex-col justify-start items-end gap-1 inline-flex">
          <div className="text-right text-white text-xs font-bold font-['IBM Plex Sans Arabic'] leading-[21.08px]">
            بوت ارامكو
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="text-right text-white text-opacity-80 text-[10px] font-normal font-['IBM Plex Sans Arabic'] leading-[17.57px]">
              نوع البوت
            </div>
            <div className="text-right text-white text-opacity-80 text-[10px] font-normal font-['IBM Plex Sans Arabic'] leading-[17.57px]">
              مدة السحب
            </div>
          </div>
        </div>
        <img
          className="w-[43px] h-[43px] rounded-[22.50px]"
          src="https://via.placeholder.com/43x43"
        />
      </div>
    </div>
  );
}

export default BotCard