import React from "react";
import { SiMarketo } from "react-icons/si";
import { RiToolsLine } from "react-icons/ri";
import { AiOutlineFileSearch } from "react-icons/ai";

const Ido = () => {
  return (
    <section className="h-[auto] mx-5 md:mx-20 mt-40">
      <h3 className="text-center text-4xl font-bold mb-10">What I Do</h3>

      <div className="flex gap-10 flex-col md:flex-row">
        <div className="border-l-[1px] border-slate-500 p-7">
          <div className="flex md:gap-5 gap-3 items-center mb-3">
            <RiToolsLine className="text-5xl text-[#cf1f1f]" />
            <p className="text-2xl font-bold">Web Development</p>
          </div>
          <p className="leading-relaxed text-slate-400 pl-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
            repellat provident obcaecati labore iste sit. Necessitatibus quis
            rem eligendi.
          </p>
        </div>

        <div className="border-l-[1px] border-slate-500 p-7">
          <div className="flex md:gap-5 gap-3 items-center mb-3">
            <AiOutlineFileSearch className="text-5xl text-[#cf1f1f]" />
            <p className="text-2xl font-bold">SEO Optimization</p>
          </div>
          <p className="leading-relaxed text-slate-400 pl-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
            repellat provident obcaecati labore iste sit. Necessitatibus quis
            rem eligendi.
          </p>
        </div>

        <div className="border-l-[1px] border-slate-500 p-7">
          <div className="flex md:gap-5 gap-3 items-center mb-3">
            <SiMarketo className="text-5xl text-[#cf1f1f]" />
            <p className="text-2xl font-bold">Digital Marketing</p>
          </div>
          <p className="leading-relaxed text-slate-400 pl-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
            repellat provident obcaecati labore iste sit. Necessitatibus quis
            rem eligendi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ido;
