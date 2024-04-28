import React from 'react'
import ToolBar from './components/toolbar';

type Props = {}

function HujraWhiteboardPage({}: Props) {
  return (
    <div className="relative">
      <ToolBar className='absolute z-10 left-[1.5rem] top-1/2 transform -translate-y-1/2 ' />
      <canvas
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        className="bg-black"
      />
      <div className="absolute z-0 inset-0 bg-dots"/>
      
    </div>
  );
}

export default HujraWhiteboardPage