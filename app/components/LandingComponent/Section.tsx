import React from "react";
import { FaAngleDown } from "react-icons/fa";

function Section() {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-80 gap-2">
        <h1 className="text-5xl font-semibold uppercase text-red-500">
          Stucked ??
        </h1>
        <h1 className="text-2xl font-semibold  text-gray-400">
          in the Ocean of
        </h1>
        <h1 className="text-4xl font-semibold uppercase text-blue-500">
          {" "}
          tech tutorials.
        </h1>
      </div>
      <div className="w-1/2 m-auto flex items-center justify-center flex-col gap-6">
        <button className="px-6 py-3 bg-yellow-300 rounded-full shadow-2xl">
          Try Careerkicker
        </button>
        <div className="downArrow">
          <FaAngleDown className="text-4xl font-light text-blue-500" />
        </div>
      </div>
    </>
  );
}

export default Section;
