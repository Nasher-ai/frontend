import { MouseEventHandler } from "react";
import { ReactSVG } from "react-svg";

type Props = {
  icon: string;
  onMouseDown?: MouseEventHandler<HTMLButtonElement> | undefined;
  isActive?: boolean;
  className?: string
};

function ToolButton({ icon, onMouseDown, isActive, className }: Props) {
  return (
    <button
      type="button"
      onMouseDown={onMouseDown}
      className={`h-full flex items-center justify-center px-[0.75rem] rounded-xl hover:bg-neutral-600 transition ${isActive && "bg-neutral-600"} ` + className}
    >
      <ReactSVG src={icon} />
    </button>
  );
}

export default ToolButton;
