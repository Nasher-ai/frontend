import { useMediaQuery } from '@mui/material';
import React from 'react'
import NavigationBar from './navigation_bar';
import SideBar from './side_bar';




type Props = {
    children?: React.ReactNode,
    className?: string
}

function Page({children, className}: Props) {
    const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="flex md:flex-row bg-[#0F0F0F] h-full w-full ">
      {isMobile ? <NavigationBar /> : <SideBar />}
      <div className={className}>{children}</div>
    </div>
  );
}

export default Page