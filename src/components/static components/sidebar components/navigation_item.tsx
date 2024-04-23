import React from 'react'

type Props = {
    href?: string
    text: string
    key: string
    isActive?: boolean
    icon?: React.ReactNode
}

/** The button of a page in the side bar. For example Dashboard, Fekrah, etc... */
function NavigationItem({href = '#', text, key, isActive = true, icon}: Props) {
  return (
      <li
        role="option"
        data-key={key}
        className={`flex group gap-2 items-center justify-between relative w-full h-full box-border rounded-small subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 focus-visible:dark:ring-offset-background-content1 ${isActive ? "hover:transition-colors hover:bg-default hover:text-default-foreground" : "opacity-50"} font-semibold bg-[#222222] py-2 px-4`}
      >
        {icon}
        <a
          href={isActive ? href : undefined}

          data-label="true"
          className="flex-1 text-small font-normal truncate"
        >
          {text}
        </a>
      </li>
  );
}

export default NavigationItem