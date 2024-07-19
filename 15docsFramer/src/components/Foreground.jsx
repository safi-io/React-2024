import React from "react";
import Card from "./Card";
import { useRef } from "react";

export default function Foreground() {
  const constraintsRef = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fileSize: "0.60mbs",
      download: true,
    },
    {
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fileSize: "1.25mbs",
      download: false,
    },
    {
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      fileSize: "0.80mbs",
      download: true,
    },
    {
      desc: "Nisi ut aliquip ex ea commodo consequat.",
      fileSize: "2.10mbs",
      download: false,
    },
    {
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      fileSize: "1.75mbs",
      download: true,
    },
  ];

  return (
    <>
      <div
        className="fixed z-[3] w-full h-full flex gap-5 flex-wrap p-10"
        ref={constraintsRef}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            desc={item.desc}
            fileSize={item.fileSize}
            download={item.download}
            constraintsRef={constraintsRef}
          />
        ))}
      </div>
    </>
  );
}
