import React from 'react'
import ToolButton from './tool_button';
import { MdPostAdd } from "react-icons/md";
import { IoShapes } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { FaEraser, FaNoteSticky } from "react-icons/fa6";
import { TbTextRecognition } from "react-icons/tb";
import { LuUpload } from "react-icons/lu";


type Props = {
    className?: string
}

function ToolBar({className}: Props) {
  return (
    <div
      className={
        " px-3 py-4 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[60px] backdrop-blur-[30px] flex-col justify-center items-center gap-2.5 inline-flex " +
        className
      }
    >
      
      <ToolButton>
        <MdPostAdd size={25}></MdPostAdd>
      </ToolButton>
      <ToolButton>
        <IoShapes size={25}></IoShapes>
      </ToolButton>
      <ToolButton>
        <FaPen size={25}></FaPen>
      </ToolButton>
      <ToolButton>
        <FaEraser size={25}></FaEraser>
      </ToolButton>
      <ToolButton>
        <TbTextRecognition size={25}></TbTextRecognition>
      </ToolButton>
      <ToolButton>
        <FaNoteSticky size={25}></FaNoteSticky>
      </ToolButton>
      <ToolButton>
        <LuUpload size={25}></LuUpload>
      </ToolButton>
    </div>
  );
}

export default ToolBar