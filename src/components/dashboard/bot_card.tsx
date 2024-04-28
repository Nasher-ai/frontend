import React from "react";
import { aramcoLogo } from "../../static/images";

type Props = {};

function BotCard({}: Props) {
  return (
    <div className=" h-20 px-[18px] py-5 bg-neutral-800 rounded-[20px] justify-between items-center inline-flex">
      <div className="justify-end items-start gap-2 flex">
        <img
          className="w-[43px] h-[43px] rounded-[22.50px] object-cover"
          src={aramcoLogo}
        />
        <div className="flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-right text-white text-s font-bold font-['IBM Plex Sans Arabic'] leading-[21.08px]">
            بوت ارامكو
          </div>
          <div className="justify-start items-start gap-2 inline-flex text-right text-white text-opacity-80 text-xs font-normal font-['IBM Plex Sans Arabic'] leading-[17.57px]">
            <p>نوع البوت:</p>
            <p>مدة السحب:</p>
          </div>
        </div>
      </div>
      <div className="rounded-[20px] justify-end items-center gap-1.5 flex">
        <span className="w-[5px] h-[5px] bg-emerald-600 rounded-full" />
        <p className="text-center text-white text-opacity-80 text-xs font-normal font-['IBM Plex Sans Arabic'] leading-[14.06px]">
          نشط
        </p>
      </div>
    </div>
  );
}

export default BotCard;
