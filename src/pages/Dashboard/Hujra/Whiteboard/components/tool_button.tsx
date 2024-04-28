import React from 'react'

type Props = {}

function ToolButton({}: Props) {
  return (
    <div className="w-11 h-11 p-2.5 bg-gradient-to-br from-zinc-600 to-stone-950 rounded-[60px] shadow  backdrop-blur-2xl flex-col justify-center items-center gap-2.5 flex" />
  );
}

export default ToolButton