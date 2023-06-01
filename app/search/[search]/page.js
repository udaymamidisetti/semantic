"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import DataList from "@/components/DataList";
import Loading from "@/components/Loading";
const page = () => {
  const query = useParams();
  // console.log(query.search);
  const [searchInput, setSearchInput] = useState(query.search);
  const [print, setPrint] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(searchInput);
    getData();
  }, []);

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
      params: {
        q: searchInput,
        pageNumber: "1",
        pageSize: "10",
        autoCorrect: "true",
      },
      headers: {
        "X-RapidAPI-Key": "cb71be83e8msh4469adcf64b9195p17e5d8jsn0fa73888fb5c",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setPrint(response.data.value);
      setLoading(false);
      // console.log(print);
    } catch (error) {
      console.error(error);
    }
  };
  const getSearchData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
      params: {
        q: searchInput,
        pageNumber: "1",
        pageSize: "10",
        autoCorrect: "true",
      },
      headers: {
        "X-RapidAPI-Key": "cb71be83e8msh4469adcf64b9195p17e5d8jsn0fa73888fb5c",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setPrint(response.data.value);
      setLoading(false);
      // console.log(print);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[100vh]">
      <header className="m-auto bg-[white] flex justify-between items-center">
        <div>
          <a className="h-[50px]" aria-label="Homepage" href="/">
            <svg
              viewBox="0 0 552.2 100"
              aria-labelledby="s2-logo-full-title s2-logo-full-desc"
              role="img"
              className="h-[50px] w-[180px]"
            >
              <title id="s2-logo-full-title">Semantic Scholar</title>
              <desc id="s2-logo-full-desc">Semantic Scholar's Logo</desc>
              <g className="fill-[#1f3c73]">
                <path d="M174,40.5c-0.1,0.2-0.3,0.4-0.4,0.5c-0.1,0.1-0.3,0.2-0.6,0.2c-0.2,0-0.5-0.1-0.8-0.3 c-0.3-0.2-0.7-0.5-1.2-0.7c-0.5-0.3-1-0.5-1.7-0.7c-0.6-0.2-1.4-0.3-2.3-0.3c-0.8,0-1.6,0.1-2.2,0.3c-0.6,0.2-1.2,0.5-1.6,0.9 c-0.4,0.4-0.8,0.8-1,1.4c-0.2,0.5-0.3,1.1-0.3,1.7c0,0.8,0.2,1.4,0.6,1.9c0.4,0.5,0.9,0.9,1.6,1.3c0.6,0.4,1.4,0.7,2.2,0.9 c0.8,0.3,1.7,0.5,2.5,0.8c0.9,0.3,1.7,0.6,2.5,1c0.8,0.4,1.6,0.9,2.2,1.4c0.6,0.6,1.2,1.3,1.6,2.1c0.4,0.8,0.6,1.8,0.6,3 c0,1.3-0.2,2.5-0.7,3.6c-0.4,1.1-1.1,2.1-1.9,2.9c-0.8,0.8-1.9,1.5-3.1,2c-1.2,0.5-2.6,0.7-4.1,0.7c-0.9,0-1.8-0.1-2.7-0.3 c-0.9-0.2-1.7-0.4-2.5-0.8c-0.8-0.3-1.5-0.7-2.2-1.2c-0.7-0.5-1.3-1-1.8-1.6l1.2-2.1c0.1-0.2,0.3-0.3,0.4-0.4 c0.2-0.1,0.4-0.2,0.6-0.2c0.3,0,0.6,0.1,1,0.4c0.4,0.3,0.8,0.6,1.4,1s1.2,0.7,2,1c0.8,0.3,1.7,0.4,2.8,0.4c0.9,0,1.7-0.1,2.4-0.4 c0.7-0.2,1.3-0.6,1.8-1c0.5-0.4,0.8-1,1.1-1.6c0.3-0.6,0.4-1.3,0.4-2.1c0-0.8-0.2-1.5-0.6-2.1c-0.4-0.5-0.9-1-1.6-1.4 c-0.6-0.4-1.4-0.7-2.2-0.9c-0.8-0.3-1.7-0.5-2.5-0.8c-0.9-0.3-1.7-0.6-2.5-1c-0.8-0.4-1.6-0.8-2.2-1.4c-0.6-0.6-1.2-1.3-1.6-2.2 c-0.4-0.9-0.6-2-0.6-3.3c0-1,0.2-2,0.6-3c0.4-1,1-1.8,1.8-2.6c0.8-0.7,1.7-1.3,2.9-1.8c1.1-0.5,2.4-0.7,3.9-0.7 c1.6,0,3.1,0.3,4.5,0.8c1.4,0.5,2.5,1.3,3.6,2.2L174,40.5z"></path>
                <path d="M198.2,61.2l0,3.5h-17.9V35.7h17.9v3.5h-13.6v9.2h11v3.4h-11v9.4H198.2z"></path>
                <path d="M232.7,35.7v28.9H229V44.1c0-0.3,0-0.6,0-1s0-0.7,0.1-1.1l-9.6,17.7c-0.3,0.7-0.9,1-1.6,1h-0.6 c-0.7,0-1.2-0.3-1.5-1L206,42c0.1,0.8,0.1,1.5,0.1,2.1v20.6h-3.8V35.7h3.2c0.4,0,0.7,0,0.9,0.1s0.4,0.3,0.6,0.6l9.7,17.3 c0.2,0.3,0.4,0.7,0.5,1.1c0.2,0.4,0.3,0.8,0.5,1.2c0.3-0.8,0.6-1.6,1-2.3l9.5-17.3c0.2-0.3,0.4-0.5,0.6-0.6s0.5-0.1,0.9-0.1H232.7 z"></path>
                <path d="M263.3,64.7H260c-0.4,0-0.7-0.1-0.9-0.3c-0.2-0.2-0.4-0.4-0.5-0.7l-2.6-6.7h-12.8l-2.6,6.7 c-0.1,0.3-0.3,0.5-0.5,0.7c-0.3,0.2-0.6,0.3-0.9,0.3h-3.3l11.5-28.9h4.3L263.3,64.7z M254.8,53.9l-4.3-11.2 c-0.3-0.8-0.6-1.7-0.9-2.9c-0.1,0.6-0.3,1.1-0.5,1.6c-0.2,0.5-0.3,0.9-0.5,1.3l-4.3,11.2H254.8z"></path>
                <path d="M290.1,35.7v28.9h-2.2c-0.3,0-0.6-0.1-0.8-0.2c-0.2-0.1-0.4-0.3-0.7-0.6l-16.3-21.1c0,0.4,0.1,0.7,0.1,1.1 c0,0.4,0,0.7,0,1v19.8h-3.8V35.7h2.2c0.4,0,0.7,0,0.8,0.1c0.2,0.1,0.4,0.3,0.6,0.6l16.4,21.2c0-0.4-0.1-0.8-0.1-1.1 c0-0.4,0-0.7,0-1V35.7H290.1z"></path>
                <path d="M316.2,39.3H307v25.3h-4.3V39.3h-9.2v-3.6h22.7V39.3z"></path>
                <path d="M323.9,64.7h-4.3V35.7h4.3V64.7z"></path>
                <path d="M350.8,58.5c0.2,0,0.4,0.1,0.6,0.3l1.7,1.9c-1.2,1.4-2.6,2.5-4.3,3.2c-1.7,0.8-3.7,1.1-6.1,1.1 c-2.1,0-4-0.4-5.7-1.1c-1.7-0.7-3.1-1.7-4.4-3c-1.2-1.3-2.1-2.9-2.8-4.7c-0.7-1.8-1-3.8-1-6c0-2.2,0.3-4.2,1-6 c0.7-1.8,1.7-3.4,2.9-4.7c1.2-1.3,2.7-2.3,4.5-3c1.7-0.7,3.7-1.1,5.8-1.1c2.1,0,3.9,0.3,5.5,1c1.6,0.7,3,1.6,4.2,2.7l-1.4,2 c-0.1,0.1-0.2,0.3-0.4,0.4c-0.1,0.1-0.3,0.1-0.6,0.1c-0.3,0-0.6-0.1-0.9-0.4c-0.3-0.3-0.8-0.5-1.4-0.9c-0.6-0.3-1.2-0.6-2.1-0.9 c-0.8-0.3-1.8-0.4-3.1-0.4c-1.4,0-2.8,0.3-3.9,0.8c-1.2,0.5-2.2,1.2-3.1,2.2c-0.9,0.9-1.5,2.1-2,3.5c-0.5,1.4-0.7,2.9-0.7,4.7 c0,1.8,0.2,3.3,0.7,4.7c0.5,1.4,1.2,2.5,2.1,3.5c0.9,1,1.9,1.7,3.1,2.2c1.2,0.5,2.5,0.7,3.8,0.7c0.8,0,1.6-0.1,2.2-0.2 c0.7-0.1,1.3-0.3,1.8-0.5c0.6-0.2,1.1-0.5,1.6-0.8c0.5-0.3,1-0.7,1.5-1.1c0.1-0.1,0.2-0.2,0.3-0.2 C350.5,58.5,350.6,58.5,350.8,58.5z"></path>
                <path d="M383.2,41.3c-0.2,0.3-0.4,0.6-0.6,0.7c-0.2,0.2-0.5,0.2-0.9,0.2c-0.3,0-0.6-0.1-1-0.3 c-0.4-0.2-0.8-0.4-1.2-0.7c-0.5-0.2-1-0.5-1.5-0.7c-0.6-0.2-1.2-0.3-2-0.3c-1.3,0-2.2,0.3-2.9,0.8c-0.6,0.5-0.9,1.3-0.9,2.2 c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.7,1.5,1c0.6,0.3,1.3,0.5,2.1,0.8c0.8,0.2,1.6,0.5,2.4,0.8c0.8,0.3,1.6,0.6,2.4,1 c0.8,0.4,1.5,0.9,2.1,1.5c0.6,0.6,1.1,1.3,1.5,2.2c0.4,0.9,0.6,1.9,0.6,3.1c0,1.4-0.2,2.6-0.7,3.8c-0.5,1.2-1.2,2.2-2,3.1 c-0.9,0.9-2,1.6-3.3,2.1c-1.3,0.5-2.8,0.8-4.5,0.8c-0.9,0-1.8-0.1-2.8-0.3c-0.9-0.2-1.9-0.5-2.7-0.8c-0.9-0.3-1.7-0.7-2.5-1.2 c-0.8-0.5-1.5-1-2-1.6l2-3.2c0.2-0.2,0.4-0.4,0.6-0.6c0.3-0.2,0.5-0.2,0.9-0.2c0.4,0,0.8,0.1,1.2,0.4c0.4,0.3,0.9,0.5,1.4,0.8 c0.5,0.3,1.1,0.6,1.8,0.8c0.7,0.3,1.5,0.4,2.4,0.4c1.2,0,2.2-0.3,2.9-0.8c0.7-0.5,1-1.4,1-2.6c0-0.7-0.2-1.2-0.6-1.7 c-0.4-0.4-0.9-0.8-1.5-1.1s-1.3-0.5-2.1-0.7c-0.8-0.2-1.6-0.5-2.4-0.7c-0.8-0.3-1.6-0.6-2.4-1c-0.8-0.4-1.5-0.9-2.1-1.5 c-0.6-0.6-1.1-1.4-1.5-2.3c-0.4-0.9-0.6-2.1-0.6-3.5c0-1.1,0.2-2.2,0.7-3.2c0.4-1,1.1-2,2-2.8c0.9-0.8,1.9-1.5,3.2-2 c1.2-0.5,2.7-0.7,4.3-0.7c0.9,0,1.8,0.1,2.6,0.2c0.9,0.1,1.7,0.3,2.4,0.6c0.8,0.3,1.5,0.6,2.1,1c0.7,0.4,1.3,0.8,1.8,1.3 L383.2,41.3z"></path>
                <path d="M408.6,57.1c0.2,0,0.3,0,0.5,0.1c0.2,0.1,0.3,0.2,0.5,0.3l2.7,2.8c-1.2,1.5-2.7,2.7-4.4,3.5 c-1.8,0.8-3.9,1.2-6.3,1.2c-2.2,0-4.2-0.4-6-1.1c-1.8-0.8-3.3-1.8-4.5-3.1c-1.2-1.3-2.2-2.9-2.8-4.8c-0.7-1.8-1-3.8-1-6 c0-2.2,0.4-4.2,1.1-6c0.7-1.8,1.7-3.4,3-4.7c1.3-1.3,2.8-2.4,4.6-3.1c1.8-0.7,3.8-1.1,5.9-1.1c1.1,0,2.1,0.1,3.1,0.3 c1,0.2,1.9,0.5,2.7,0.8c0.8,0.3,1.6,0.8,2.3,1.2c0.7,0.5,1.3,1,1.9,1.6l-2.3,3.1c-0.1,0.2-0.3,0.4-0.5,0.5 c-0.2,0.2-0.5,0.2-0.8,0.2c-0.2,0-0.5-0.1-0.7-0.2c-0.2-0.1-0.4-0.2-0.7-0.4c-0.2-0.2-0.5-0.3-0.8-0.5c-0.3-0.2-0.6-0.3-1-0.5 c-0.4-0.2-0.9-0.3-1.4-0.4c-0.5-0.1-1.2-0.2-1.9-0.2c-1.1,0-2.2,0.2-3.1,0.6c-0.9,0.4-1.7,1-2.4,1.8c-0.7,0.8-1.2,1.8-1.6,2.9 c-0.4,1.2-0.6,2.5-0.6,4c0,1.5,0.2,2.8,0.6,4c0.4,1.2,1,2.2,1.7,3c0.7,0.8,1.5,1.4,2.5,1.8c0.9,0.4,1.9,0.6,3,0.6 c0.6,0,1.2,0,1.7-0.1c0.5-0.1,1-0.2,1.4-0.3c0.4-0.1,0.9-0.3,1.2-0.6c0.4-0.2,0.8-0.5,1.2-0.9c0.2-0.1,0.3-0.2,0.5-0.3 C408.2,57.1,408.4,57.1,408.6,57.1z"></path>
                <path d="M440.2,35.3v29.4h-6.9V52.3h-11.9v12.4h-6.9V35.3h6.9v12.3h11.9V35.3H440.2z"></path>
                <path d="M474.3,50c0,2.1-0.4,4.1-1.1,5.9c-0.7,1.8-1.8,3.4-3.1,4.8c-1.3,1.3-2.9,2.4-4.8,3.2c-1.9,0.8-4,1.1-6.2,1.1 c-2.3,0-4.4-0.4-6.2-1.1s-3.5-1.8-4.8-3.2c-1.3-1.4-2.4-2.9-3.1-4.8c-0.7-1.8-1.1-3.8-1.1-5.9c0-2.1,0.4-4.1,1.1-5.9 c0.7-1.8,1.8-3.4,3.1-4.8c1.3-1.3,2.9-2.4,4.8-3.2s4-1.1,6.2-1.1c2.3,0,4.4,0.4,6.2,1.2c1.9,0.8,3.5,1.8,4.8,3.2 c1.3,1.3,2.4,2.9,3.1,4.8C474,45.9,474.3,47.9,474.3,50z M467.4,50c0-1.5-0.2-2.8-0.6-3.9c-0.4-1.2-0.9-2.1-1.6-3 c-0.7-0.8-1.6-1.4-2.6-1.9c-1-0.4-2.2-0.6-3.5-0.6c-1.3,0-2.5,0.2-3.5,0.6c-1,0.4-1.9,1-2.6,1.9c-0.7,0.8-1.2,1.8-1.6,3 s-0.6,2.5-0.6,3.9c0,1.5,0.2,2.8,0.6,3.9s0.9,2.1,1.6,3c0.7,0.8,1.6,1.4,2.6,1.8c1,0.4,2.2,0.6,3.5,0.6c1.3,0,2.5-0.2,3.5-0.6 c1-0.4,1.9-1,2.6-1.8c0.7-0.8,1.2-1.8,1.6-3C467.2,52.8,467.4,51.5,467.4,50z"></path>
                <path d="M495.7,59.2v5.4H478V35.3h6.8v23.9H495.7z"></path>
                <path d="M526.3,64.7H521c-0.6,0-1.1-0.1-1.4-0.4c-0.4-0.3-0.6-0.6-0.8-1.1l-1.7-5.1h-11.2l-1.7,5.1 c-0.1,0.4-0.4,0.7-0.8,1c-0.4,0.3-0.9,0.5-1.4,0.5h-5.3l11.4-29.4h7L526.3,64.7z M515.5,53.5l-2.7-8c-0.2-0.5-0.4-1.1-0.6-1.8 c-0.2-0.7-0.5-1.4-0.7-2.2c-0.2,0.8-0.4,1.6-0.6,2.3c-0.2,0.7-0.4,1.3-0.6,1.8l-2.7,8H515.5z"></path>
                <path d="M552.2,64.7h-6.2c-1.1,0-2-0.4-2.5-1.3l-4.9-8.5c-0.2-0.4-0.5-0.6-0.8-0.8c-0.3-0.2-0.7-0.3-1.2-0.3H535v10.9 h-6.8V35.3h9.6c2.1,0,3.9,0.2,5.4,0.7c1.5,0.4,2.7,1,3.7,1.8s1.6,1.7,2.1,2.8c0.4,1.1,0.6,2.2,0.6,3.5c0,1-0.1,1.9-0.4,2.7 c-0.3,0.8-0.6,1.6-1.1,2.3c-0.5,0.7-1.1,1.4-1.8,1.9c-0.7,0.6-1.6,1-2.5,1.4c0.4,0.2,0.9,0.5,1.2,0.9c0.4,0.3,0.7,0.7,1,1.2 L552.2,64.7z M537.8,49.1c0.9,0,1.7-0.1,2.4-0.4c0.7-0.2,1.2-0.6,1.6-1c0.4-0.4,0.7-0.9,0.9-1.5c0.2-0.6,0.3-1.2,0.3-1.8 c0-1.3-0.4-2.3-1.3-3c-0.8-0.7-2.1-1.1-3.9-1.1H535v8.7H537.8z"></path>
              </g>
              <g className="fill-[#f3d25f]">
                <path d="M138.7,30.4c-4.9,3.1-8.3,4.8-12.4,7.2c-24,14.5-47.1,30.6-65,51.9L52.7,100L26.3,58 c5.9,4.7,20.6,17.9,26.6,20.8l19.4-14.6C85.8,54.7,124,34,138.7,30.4z"></path>
                <path d="M46.5,68.5c2,1.6,4,3.1,5.6,4.3c4.4-21.2,0.7-44-10.9-63.8c19.5-0.3,38.9-0.5,58.4-0.8 c4.4,9.7,6.9,20,7.5,30.6c1.7-0.9,3.4-1.7,5.1-2.5c-0.6-10.8-3.7-22.6-9.6-36.2C76,0,49.5,0,22.9,0C40.2,20.5,48.1,45.3,46.5,68.5 z"></path>
                <path d="M42.9,65.7c0.5,0.5,1.1,0.9,1.6,1.3c-0.8-19.7-8.2-39.8-22.1-57.1c-4.1,0-8.3,0-12.4,0 C27.9,26.4,38.8,46.3,42.9,65.7z"></path>
                <path d="M38.6,61.9c0.6,0.5,1.2,1,1.9,1.6c-5.2-14.6-14.4-29-27.4-41.6c-4.4,0-8.7,0-13.1,0 C16.7,33.9,29.6,47.8,38.6,61.9z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div>
          <form onSubmit={getSearchData}>
            <input
              className="border-[1px] focus:outline-none h-[39px] w-[40vw] pl-[10px]"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="bg-[#f4d35e] h-[39px] text-[black] w-[100px]">
              Search
            </button>
          </form>
        </div>
        <div>
          <button className="p-[6px] border-[1px] border-[#1857b6] rounded-md text-[14px]">
            Sign In
          </button>
        </div>
        <div>
          <button className="bg-[#0f3875] p-[6px] rounded-md text-white text-[14px]">
            Create Free Account
          </button>
        </div>
      </header>

      <div>
        <DataList search={searchInput} print={print} loading={loading} />
      </div>
    </div>
  );
};

export default page;