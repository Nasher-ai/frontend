import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function SectionContainer({ className, children }: Props) {
  return (
    <div
      className={
        " bg-neutral-900 rounded-[1.25rem] border border-neutral-800 backdrop-blur-[20px] inline-flex " +
        className
      }
    >
      {children}
    </div>
  );
}

export default SectionContainer;
