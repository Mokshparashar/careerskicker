import React from "react";

function Navbar() {
  return (
    <div className="bg-white w-screen m-auto h-16 shadow-sm  flex items-center justify-between px-4">
      <h1 className="logo text-blue-500 text-xl font-extrabold">
        Careerkicker
      </h1>
      <button className="px-6 py-3 bg-yellow-300 rounded-full">
        Buy me a coffee
      </button>
    </div>
  );
}

export default Navbar;
