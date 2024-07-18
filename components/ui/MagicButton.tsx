import React from "react";

type Props = {
  title: string;
  icon: any;
  position?: string;
  handleClick?: () => {};
  otherClasses?: string;
};

const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
}: Props) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-60 md:mt-10">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" ? icon : null}
        {title}
        {position === "right" ? icon : null}
      </span>
    </button>
  );
};

export default MagicButton;
