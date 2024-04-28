import { yazanAccount } from "../../static/images";


type Props = {}

function HujraCard({}: Props) {
  return (
    <a href="/dashboard/hujra" className="aspect-[7/4] w-60 p-3 bg-stone-400 bg-opacity-20 rounded-[20px] flex-col justify-between items-center inline-flex">
      <div className="self-stretch justify-end items-center gap-2.5 inline-flex">
        <div className="w-[30px] h-[30px] p-[3px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[30px] backdrop-blur-[30px] flex-col justify-center items-center inline-flex">
          <img
            className="self-stretch grow shrink basis-0 rounded-[100px]"
            src={yazanAccount}
          />
        </div>
      </div>
      <div className="self-stretch h-[51px] px-3 py-1.5 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[10px] backdrop-blur-[30px] flex-col justify-start flex">
        <div className="text-right text-white text-sm font-medium font-['IBM Plex Sans Arabic'] leading-normal">
          السياسه في اوروبا
        </div>
        <div className="text-right text-white text-opacity-50 text-[8px] font-medium font-['IBM Plex Sans Arabic'] leading-[14.06px]">
          التاريخ, اخر تعديل
        </div>
      </div>
    </a>
  );
}

export default HujraCard