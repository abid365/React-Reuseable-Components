import React from "react";

const divbar = () => {
  return (
    <div className="border-y-2 border-black flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-500 via-lime-400 to-lime-200 drop-shadow-md">
      <img
        className="h-[20px] w-[20px]"
        src="/src/assets/RRC.svg"
        alt="react reuseable component logo"
      />
      <h1 className=" text-sm font-bold pt-2">React Reuseable Components</h1>
    </div>
  );
};

export default divbar;
