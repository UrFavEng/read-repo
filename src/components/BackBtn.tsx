"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div onClick={handleGoBack} className=" bg-primary px-3 py-2 rounded-lg">
      <svg
        className=" cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="#be9159"
      >
        <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
      </svg>
    </div>
  );
};

export default BackBtn;
