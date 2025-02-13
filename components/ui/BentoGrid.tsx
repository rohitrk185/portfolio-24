"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rohitsmudge190@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img ? (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-center")}
            />
          ) : null}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80" : ""
          }`}
        >
          {spareImg ? (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center h-full w-full"}
            />
          ) : null}
        </div>

        {id === 6 ? <BackgroundGradientAnimation /> : null}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 3 ? "!pl-3" : ""
          )}
        >
          <div
            className={
              (cn(
                "font-sans font-extralight md:max-w-32 md:text-xs text-sm text-[#C1C2D3] z-10"
              ),
              id === 3 ? "" : "lg:text-base")
            }
          >
            {description}
          </div>

          <div
            className={cn(
              "font-sans text-lg max-w-96 font-bold z-10",
              id === 3 ? "" : "lg:text-3xl"
            )}
          >
            {title}
          </div>

          {id === 2 ? <GlobeDemo /> : null}

          {id === 3 ? (
            <div className="flex gap-1 w-fit absolute right-4 lg:-right-2 top-2 text-green-400">
              <div className="flex flex-col gap-3 relative lg:top-8">
                {["React.js(Next.js)", "Node.js", "Typescript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 px-3 lg:px-1 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}

                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>

              <div className="flex flex-col gap-3 relative -top-5">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["C++ & Python", "GCP", "AWS"].map((item) => (
                  <span
                    key={item}
                    className="py-2 px-3 lg:px-1 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {id === 6 ? (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 block`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={200}
                  width={400}
                />
              </div>

              <MagicButton
                title={copied ? "Email Copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161831]"
                handleClick={handleCopy}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
