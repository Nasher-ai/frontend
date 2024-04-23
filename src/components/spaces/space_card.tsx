import React from 'react'
import * as Images from '../../static/images';

type Props = {
    name?: string
    image?: string
    href?: string
}

function SpaceCard({href, image, name}: Props) {
  return (
    <a href="dashboard/">
      <div className="w-[13.75rem] h-[12.5rem] h- rounded-[1.25rem] items-center p-2 pb-4 justify-between bg-[#212121] flex-col flex">
        <div className="w-full h-[70%] rounded-2xl bg-neutral-700  ">
          <img className="w-fit" src={Images.aljazeeraLogo} alt="" />
        </div>

        <div className="relative flex-1 w-full">
          <p className="text-center absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base font-semibold leading-7">
            قناة الجزيرة
          </p>
        </div>
      </div>
    </a>
  );
}

export default SpaceCard