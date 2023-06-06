import React from "react";

const Header = () => {
  return (
    <div className="bg-[#f5f6f7] w-[100%]">
      <div className="w-[85%] h-[60px] m-auto flex justify-between items-center drop-shadow-2xl sticky">
        <div className="font-bold">SEMANTIC SCHOLAR API</div>
        <div>
          <div className="flex gap-[15px]">
            <h1>Overview</h1>
            <h1 className="text-[#1857b6]">Tutorial</h1>
            <h1 className="text-[#1857b6]">Documentation</h1>
            <h1 className="text-[#1857b6]">Gallery</h1>
            <h1 className="text-[#1857b6]">Cite the paper</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
