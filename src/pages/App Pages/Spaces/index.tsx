import React from "react";
import SpaceCard from "../../../components/spaces/space_card";
import { ReactSVG } from "react-svg";
import { nasherLogo } from "../../../static/images";



function SpacesPage() {
  return (
    <div className="flex-1 relative flex w-full h-screen bg-[#0F0F0F] justify-center items-center">
      <div className="flex gap-[4.5rem] flex-col items-center">
        <div className="flex flex-row gap-11  ">
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
        </div>
        <span className="flex-row px-[1.125rem] gap-2.5 py-3 bg-sky-600 rounded-[14px] shadow-inner backdrop-blur-[20px] justify-between items-center inline-flex">
          <span className="material-symbols-outlined">add</span>
          <p className=" text-zinc-300 text-base font-semibold font-['IBM Plex Sans Arabic']">
            انشئ مساحة جديدة
          </p>
        </span>
      </div>
      <ReactSVG src={nasherLogo} className="absolute top-7 left-14"/>
    </div>
  );
}

export default SpacesPage;
