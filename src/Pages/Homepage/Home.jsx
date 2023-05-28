import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-20 mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-2 lg:gap-2 md:gap-2 items-center lg:items-start md:items-center">
        <div className="">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            A React and Tailwind based component library created for
            reuseability
          </h1>
          <p className="text-muted text-slate-500 text-xs">
            It's my initiative to dsitribute my knowledge while I learn on the
            go
          </p>
          <p className="text-slate-600">
            React Reuseable Components [RRC] is a collection of free tailwind
            css based components build on react. Primarily It is serving
            different types of pricing card components
          </p>
        </div>
        <div className=" text-slate-900 place-self-center self-start">
          <div className="border-2 border-dashed border-slate-500 text-black rounded-lg p-4 flex flex-col gap-3">
            <p className="text-xs">Enjoy RRC? Give it a star</p>
            <Link>Blog</Link>
            <Link>FAQs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
