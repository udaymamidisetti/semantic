"use client";
import React, { CSSProperties } from "react";
import Footer from "./Footer";
import Loading from "./Loading";

const DataList = (props) => {
  const { search, print, loading } = props;
  return (
    <div className="container m-auto h-[100vh]">
      <h1 className="text-[20px] font-semibold border-b-[2px] border-[#d9dadb] mt-[30px]">
        About 159,000 results for “{search}”
      </h1>
      <div className="text-[12px] flex justify-between border-b-[2px] border-[#d9dadb]">
        <div className="flex gap-[8px] mt-[8px] mb-[8px]">
          <p className="cursor-pointer border-[1px] p-[5px] bg-[white] border-[#d9dadb] rounded-[3px]">
            Field of Study
          </p>
          <p className="cursor-pointer border-[1px] p-[5px] bg-[white] border-[#d9dadb] rounded-[3px]">
            Date Range
          </p>
          <p className="cursor-pointer border-[1px] p-[5px] bg-[white] border-[#d9dadb] rounded-[3px]">
            Has PDF
          </p>
          <p className="cursor-pointer border-[1px] p-[5px] bg-[white] border-[#d9dadb] rounded-[3px]">
            Author
          </p>
          <p className="cursor-pointer border-[1px] p-[5px] bg-[white] border-[#d9dadb] rounded-[3px]">
            Journals & Conferences
          </p>
        </div>
        <div className="mt-[8px] mb-[8px]">
          <p className="cursor-pointer border-[1px] p-[5px] bg-[white] border-[#d9dadb] rounded-[3px]">
            Sort by relevance
          </p>
        </div>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          print.map((e) => (
            <div key={e.position}>
              <a href={e.url} target="_self">
                <h1 className="text-[#1857b6] text-[20px] font-semibold hover:underline hover:cursor-pointer">
                  {e.title}
                </h1>
              </a>
              <p className="text-[#536479] text-[14px] underline">
                {e.description}
              </p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DataList;
