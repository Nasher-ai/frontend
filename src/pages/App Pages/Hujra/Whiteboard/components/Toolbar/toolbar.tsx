import React from "react";
import ToolButton from "./button";
import { MdPostAdd } from "react-icons/md";
import { IoShapes } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { FaEraser, FaNoteSticky } from "react-icons/fa6";
import { TbTextRecognition } from "react-icons/tb";
import { LuUpload } from "react-icons/lu";
import { ReactSVG } from "react-svg";
import { ToolbarIcons } from "../../../../../../static/icons";

type Props = {
  className?: string;
};


function ToolBar({ className }: Props) {
  return (
    <div
      className={
        " px-3 py-4 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[60px] backdrop-blur-[30px] flex-col justify-center items-center gap-2.5 inline-flex " +
        className
      }
    >
      <ToolButton>
        <ReactSVG src={ToolbarIcons.addPage} />
      </ToolButton>
      <ToolButton>
        <ReactSVG src={ToolbarIcons.shapes} />
      </ToolButton>
      <ToolButton>
        <ReactSVG src={ToolbarIcons.pen} />
      </ToolButton>
      <ToolButton>
        <ReactSVG src={ToolbarIcons.eraser} />
      </ToolButton>
      <ToolButton>
        <ReactSVG src={ToolbarIcons.textBox} />
      </ToolButton>
      <ToolButton>
        <ReactSVG src={ToolbarIcons.stickyNotes} />
      </ToolButton>
      <ToolButton>
        <ReactSVG src={ToolbarIcons.export} />
      </ToolButton>
    </div>
  );
}

export default ToolBar;
