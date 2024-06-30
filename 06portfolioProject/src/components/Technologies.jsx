import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Technologies() {
  return (
    <>
      <div className="heading flex items-center justify-center text-3xl">
        <h1>Technologies</h1>
      </div>

      <div className="flex items-center justify-center gap-4 mb-5 h-[60vh]">

        <div className=" border-2 border-white border-solid rounded-2xl p-8">
          <DiRedis className="text-6xl text-cyan-400"/>
        </div>

        <div className=" border-2 border-white border-solid rounded-2xl p-8">
          <FaNodeJs className="text-6xl text-cyan-400"/>
        </div>

        <div className=" border-2 border-white border-solid rounded-2xl p-8">
          <RiReactjsLine className="text-6xl text-cyan-400"/>
        </div>

        <div className=" border-2 border-white border-solid rounded-2xl p-8">
          <SiMongodb className="text-6xl text-cyan-400"/>
        </div>

        <div className=" border-2 border-white border-solid rounded-2xl p-8">
          <TbBrandNextjs className="text-6xl text-cyan-400"/>
        </div>

      </div>
    </>
  );
}
