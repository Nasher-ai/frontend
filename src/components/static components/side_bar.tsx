import { NasherIcons } from "../../static/icons";
import { nasherLogo, userAvatar1 } from "../../static/images";
import { exUser1 } from "../../static/sample_data";
import NavigationItem from "./sidebar components/navigation_item";

export default function SideBar() {
  return (
    <div className="bg-[#151515]  border-e-1 border-[#222222] flex flex-col pt-8 pb-5 px-5  gap-5 w-60 ">
      {/* Logo */}
      <img src={nasherLogo} className="px-4" alt="Nasher" />

      <hr className="bg-[#D7D7D7] mx-4 opacity-60" />

      {/* User Data */}
      <div className="py-2 pe-3 flex flex-row gap-4 items-center">
        {/* Button */}
        <button className="w-8 h-8 rounded-full flex justify-center items-center  p-3 bg-[#212121]">
          <span className=" material-symbols-rounded text-[#AFAEAE]">
            chevron_right
          </span>
        </button>
        {/* Profile */}
        <div className="flex flex-row gap-3">
          {/* Image */}
          <img className="w-10 h-10 rounded-full" src={exUser1.avatar} alt="" />
          <div className="flex flex-col">
            <p className="text-white text-sm font-medium font-['IBM Plex Sans Arabic'] leading-[21.08px]">
              {exUser1.name}
            </p>
            <p className="text-white text-opacity-80 text-xs font-normal font-['IBM Plex Sans Arabic'] leading-[14.06px]">
              بهشة شهير
            </p>
          </div>
        </div>
      </div>

      <div />

      {/* Navigation */}
      <div>
        <ul className="gap-3 flex flex-col p-1">
          <NavigationItem
            href="/spaces"
            text="Dashboard"
            icon={<span className="material-symbols-rounded">dashboard</span>}
            key="dashboard"
          />
          <NavigationItem
            href="/dashboard/fekrah"
            text="Fekrah"
            key="fekrah"
            icon={<img src={NasherIcons.fekrah} alt="" />}
          />
          <div className="inline-flex w-full mb-2 mt-4 items-center justify-center">
            <hr className="w-full opacity-15" />
            <div className="absolute px-2 bg-[#151515]">
              <span className="text-[#0070f0] text-xs px-1.5 py-[2px] rounded-full bg-[#0070f0] bg-opacity-20">
                Coming Soon
              </span>
            </div>
          </div>
          <NavigationItem
            href="#"
            text="Scraper"
            key="scraper"
            isActive={false}
            icon={<img src={NasherIcons.scraper} alt="" />}
          />
          <NavigationItem
            href="#"
            text="Analytics"
            key="analytics"
            isActive={false}
            icon={<img src={NasherIcons.analytics} alt="" />}
          />
        </ul>
      </div>
    </div>
  );
}
