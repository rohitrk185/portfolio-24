import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="py-20" id="recent-projects">
      <h1 className="heading">
        <span>{"My"}</span>
        <span className="text-purple">{" work experience"}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(
          ({ id, title, desc, className, thumbnail, tech, duration }) => (
            <Button
              className={
                "flex-1 text-white border-neutral-200 dark:border-slate-800"
              }
              key={id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={thumbnail}
                  alt={thumbnail}
                  className="lg:w-32 md:w-20 w-16 self-center md:self-auto"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {title}
                  </h1>

                  <h3 className="text-start text-xs text-gray-300 mt-3 font-semibold">
                    {duration}
                  </h3>

                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {desc}
                  </p>

                  <p className="text-start text-gray-500 mt-3">{tech}</p>
                </div>
              </div>
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
