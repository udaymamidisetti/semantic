"use client";
import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "@/redux/counterSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 960,
  height: 558,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};
function Header() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const value = useSelector((store) => store.counter.value);
  console.log(value);
  const handleModal = () => {
    setModal(!modal);
  };
  const handleClose = () => {
    setModal(false);
  };
  return (
    <header>
      {/* <h1 className="text-[white]">Count:{value}</h1>
      <button className="text-[white]" onClick={() => dispatch(increment())}>
        Click
      </button> */}
      <div className="container m-auto h-[70px] flex gap-[20px] justify-end items-end ">
        <button
          className="text-[#f4d35e] border-[#f4d35e] border-[1px] text-[14px] h-[30px] w-[80px] rounded-md"
          onClick={handleModal}
        >
          Sign In
        </button>
        <button
          className="text-[#f4d35e] border-[#f4d35e] border-[1px] text-[14px] h-[30px] w-[190px] rounded-md"
          onClick={handleModal}
        >
          Create Free Account
        </button>
      </div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex">
            <div className="bg-[url('https://res.cloudinary.com/drjnmxyd5/image/upload/v1685015329/login-background_wckga7.png')] h-[558px] w-[50%] bg-cover p-[48px]">
              <h1 className="text-[#f4d35e] text-[34px] leading-[42px] font-bold mt-[60px]">
                Explore. Discover. Achieve Impact.
              </h1>
              <p className="text-[18px] text-[#fff] font-light mt-[18px]">
                Build your research library and stay up to date by creating
                alerts for the authors, topics, and papers that pertain to your
                research.
              </p>
            </div>
            <div className="p-[48px] w-[50%] bg-[#f5f6f7]">
              <h1 className="font-bold text-[24px]">Sign In</h1>
              <p className="text-[14px]">
                Don't have an account <span>Create new Account</span>
              </p>
              <p className="bg-[#25252e] text-[#fff] text-[12px] h-[35px] flex items-center cursor-pointer mt-[20px] rounded-[5px]">
                Sign In with your Institution
              </p>
              <p className="bg-[#0c57cf] text-[#fff] text-[12px] h-[35px] flex items-center cursor-pointer mt-[20px] rounded-[5px]">
                Sign In with Google
              </p>
              <p className="text-right text-[#0c57cf] hover:underline text-[14px] mt-[10px] cursor-pointer">
                View additional options
              </p>
              <div className="flex items-center justify-between">
                <div className="border-b-[1px] w-[44%]"></div>
                <p className="text-[12px]">OR</p>
                <div className="border-b-[1px] w-[44%] border-[#d9dadb]"></div>
              </div>
              <input
                className="border-2 w-full rounded-md h-[32px] mt-[10px] text-[12px] pl-[10px]"
                placeholder="Email Address"
              />
              <input
                className="border-2 w-full rounded-md h-[32px] mt-[10px] text-[12px] pl-[10px]"
                placeholder="Password"
              />
              <div className="flex justify-between items-center mt-[10px]">
                <p className="text-[13px] text-[#0c57cf]">Forgot Password ?</p>
                <button className="bg-[#536478] text-[#fff] text-[11px] h-[25px] w-[60px] rounded-md">
                  Sign In
                </button>
              </div>
              <p className="text-[12px] absolute bottom-[33px]">
                By signing in, you accept our Terms of Service & Privacy Policy.
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </header>
  );
}
export default Header;
