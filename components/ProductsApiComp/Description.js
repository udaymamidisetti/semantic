import React from "react";
import Image from "next/image";
const Description = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] m-auto w-full">
        <p className="text-[#dc710f] pt-[40px]">Schemantic Scholar-API</p>
        <div className="flex items-center justify-between pb-[40px]">
          <div className="w-[700px]">
            <h1 className="text-[56px] font-bold text-[#1857b6] leading-[60px]">
              Providing a reliable source of scholarly data for developers
            </h1>
            <p className="text-[22px] leading-[30px] pt-[10px] font-[300]">
              Build projects that accelerate scientific progress with the
              Semantic Scholar Academic Graph API
            </p>
            <ul className="list-disc list-inside pl-[36px] pt-[10px]">
              <li className="text-[#1857b6] underline cursor-pointer hover:no-underline marker:text-black">
                Code Examples
              </li>
              <li className="text-[#1857b6] underline cursor-pointer hover:no-underline marker:text-black">
                Q&A Bank
              </li>
              <li className="text-[#1857b6] underline cursor-pointer hover:no-underline marker:text-black">
                Request an API key
              </li>
              <li className="text-[#1857b6] underline cursor-pointer hover:no-underline marker:text-black">
                Join the Community
              </li>
              <li className="text-[#1857b6] underline cursor-pointer hover:no-underline marker:text-black">
                Read the{" "}
              </li>
            </ul>
          </div>

          <div>
            <img
              src="https://assets-global.website-files.com/605236bb767e9a5bb229c63c/610c7a03d5f5738687626adb_api-site.png"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
