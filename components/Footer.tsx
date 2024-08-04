import { socialMedia } from "@/data";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-4 overflow-clip">
        <p className="md:text-base text-sm md:font-normal font-light flex gap-x-1">
          <span>Copyright &copy;</span>
          <span>{new Date().getFullYear()}</span>
          <span className="ml-2">Rohit</span>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img }) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              key={id}
            >
              <img src={img} alt={String(id)} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
