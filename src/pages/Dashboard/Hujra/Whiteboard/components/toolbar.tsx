import React from 'react'
import ToolButton from './tool_button';

type Props = {
    className: string
}

function ToolBar({className}: Props) {
  return (
    <div className={" px-3 py-4 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[60px] backdrop-blur-[30px] flex-col justify-center items-center gap-2.5 inline-flex "+className}>
      <ToolButton></ToolButton>
      <ToolButton></ToolButton>
      <ToolButton></ToolButton>
      <ToolButton></ToolButton>
      <ToolButton></ToolButton>
      <ToolButton></ToolButton>
      <ToolButton></ToolButton>
    </div>
  );
}

export default ToolBar