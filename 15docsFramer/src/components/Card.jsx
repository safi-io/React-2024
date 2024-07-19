import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import { motion } from "framer-motion";

export default function Card({ desc, fileSize, download, constraintsRef }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        whileDrag={{ scale: 1.1 }}
        transition={{ duration: 2, type: "spring" }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 5 }}
        className="relative flex-shrink-0 bg-zinc-900 h-72 w-56 rounded-3xl text-white p-5 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm font-semibold mt-5 leading-tight">{desc}</p>
        <div className="absolute bottom-0 w-full h-8 left-0 mb-5">
          <div className="flex items-center justify-around">
            <h5>{fileSize}</h5>
            {download ? <LuDownload /> : <IoIosAdd />}
          </div>
        </div>
      </motion.div>
    </>
  );
}
