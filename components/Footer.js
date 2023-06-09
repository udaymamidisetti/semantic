"use client";
import React from "react";
import Link from "next/link";
const Footer = () => {
  const email = () => {
    var email = "Uday@gmail.com";
    document.getElementById("email_input").value = email;
  };
  return (
    <footer className="w-full bg-[#040d1b] mt-[40px]">
      <div className="container max-w-[1180px] h-[120px] m-auto flex items-center">
        <h1 className="text-[#fff] text-[20px]">
          Stay connected with semantic scholar
        </h1>
        <input
          id="email_input"
          className="h-[36px] w-[60%] ml-auto pl-[10px] text-[14px] focus:outline-none"
          placeholder="Your E-Mail Address"
        />
        {/* <ToastContainer /> */}
        <button
          className="text-[#fff] bg-[#1857b6] h-[36px] text-[10px] w-[80px] rounded-tr-md rounded-br-md"
          onClick={email}
        >
          <Link href="/profile">Sign Up</Link>
        </button>
      </div>
      <div className="bg-[#11223d] h-[200px]">
        <div className="max-w-[1180px] m-auto flex justify-between items-center h-[200px]">
          <div className="text-[#fff] flex flex-col justify-center gap-[10px]">
            <h1>What Is Semantic Scholar?</h1>
            <p>
              Semantic Scholar is a free, AI-powered research tool for
              scientific literature, based at the Allen Institute for AI.
            </p>
            <p className="text-[#5492ef] hover:underline hover:cursor-pointer">
              Learn More
            </p>
          </div>
          <div className="flex text-[#5492ef] gap-[30px]">
            <div className="w-[100px]">
              <h1 className="text-[white]">About</h1>
              <Link href="/about">
                <p className="text-[12px] mt-[10px] hover:underline">
                  About Us
                </p>
              </Link>
              <Link href="/publishers">
                <p className="text-[12px] hover:underline">Publishers</p>
              </Link>
              <Link href="/blog">
                <p className="text-[12px] hover:underline">Blog</p>
              </Link>
              <Link href="/careers">
                <p className="text-[12px] hover:underline">AI2 Careers</p>
              </Link>
            </div>
            <div className="w-[100px]">
              <h1 className="text-[white]">Product</h1>
              <Link href="/productoverview">
                <p className="text-[12px] mt-[10px] hover:underline">
                  Product Overview
                </p>
              </Link>
              <Link href="/betaprogram">
                <p className="text-[12px] hover:underline">Beta Program</p>
              </Link>
              <Link href="/s2agapi">
                <p className="text-[12px] hover:underline">S2AG API</p>
              </Link>
              <Link href="/semanticreader">
                <p className="text-[12px] hover:underline">Semantic Reader</p>
              </Link>
            </div>
            <div className="w-[100px]">
              <h1 className="text-[white]">Research</h1>
              <Link href="/publications">
                <p className="text-[12px] mt-[10px] hover:underline">
                  Publications
                </p>
              </Link>
              <Link href="/team">
                <p className="text-[12px] hover:underline">Team</p>
              </Link>
              <Link href="/researchcareers">
                <p className="text-[12px] hover:underline cursor-pointer">
                  Research Careers
                </p>
              </Link>
              <Link href="/resources">
                <p className="text-[12px] hover:underline">Resources</p>
              </Link>
            </div>
            <div className="w-[100px]">
              <h1 className="text-[white]">Help</h1>
              <Link href="/faq">
                <p className="text-[12px] mt-[10px] hover:underline">FAQ</p>
              </Link>
              <Link href="/librarians">
                <p className="text-[12px] hover:underline">Librarians</p>
              </Link>
              <Link href="/tutorials">
                <p className="text-[12px] hover:underline">Tutorials</p>
              </Link>
              <Link href="/contact">
                <p className="text-[12px] hover:underline">Contact</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[white] max-w-[1180px] m-auto flex justify-between h-[90px] items-center">
        <div>
          <p>
            Proudly built by{" "}
            <span className="text-[#5492ef] cursor-pointer">AI2</span>
          </p>
          <p className="text-[#5492ef] hover:underline text-[14px] cursor-pointer">
            Collaborators & Attributions
            <span className="text-[white] p-[5px]">•</span>
            Terms of Service(opens in a new tab){" "}
            <span className="text-[white] p-[5px]">•</span>Privacy Policy
          </p>
        </div>
        <p>Allen Institute of AI</p>
      </div>
    </footer>
  );
};

export default Footer;
