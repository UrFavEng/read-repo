"use client";
import React from "react";
import Image from "next/image";
import ComplaintImage from "../../../../../public/image 15.svg";

interface ComplaintProps {
  isOpen: boolean;
  onClose: () => void;
}

const Complaint: React.FC<ComplaintProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`absolute w-full h-full flex items-center justify-center top-0 left-0  z-50 transition-all duration-300 
        ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
    >
      {" "}
      <div
        onClick={onClose}
        className=" bg-black opacity-10 -z-10 absolute top-0 left-0 w-full h-full"
      />
      <div className="bg-background rounded-2xl flex flex-col items-center justify-center p-4 w-80 sm:w-96 h-fit shadow-lg">
        <Image src={ComplaintImage} alt="image" />
        <p className="font-bold text-lg text-primary">تسجيل شكوى</p>
        <p className="text-[#EAE1D6] text-sm">
          ما سيتم تسجيله هنا سيتم ارسالة الى المشرف
        </p>
        <input
          type="text"
          placeholder="العنوان"
          className="placeholder:text-[#A9A9A9] mt-2.5 outline-none border-none bg-white text-black w-full rounded-lg h-11 px-3"
        />
        <textarea
          placeholder="الوصف..."
          className="resize-none placeholder:text-[#A9A9A9] mt-2.5 outline-none border-none bg-white text-black w-full rounded-lg h-28 p-4"
        ></textarea>
        <input
          type="submit"
          value="ارسال"
          className="bg-primary text-center py-1.5 rounded-lg text-white mt-2.5 cursor-pointer w-full"
        />
      </div>
    </div>
  );
};

export default Complaint;
