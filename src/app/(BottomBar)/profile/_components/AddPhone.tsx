"use client";
import React from "react";
interface AddPhoneProps {
  isOpen: boolean;
  onClose: () => void;
}
const AddPhone: React.FC<AddPhoneProps> = ({ isOpen, onClose }) => {
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
        <div className=" text-backgroundSec w-12 flex items-center justify-center rounded-full h-12 bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="currentColor"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
        </div>
        <p className="font-bold text-lg text-primary">إضافة رقم هاتف</p>
        <p className="text-[#EAE1D6] text-sm">
          يمكنك اضافة رقم هاتف آخر من هنا
        </p>
        <input
          type="text"
          placeholder="اكتب الرقم هنا..."
          className="placeholder:text-[#A9A9A9] mt-2.5 outline-none border-none bg-white text-black w-full rounded-lg h-11 px-3"
        />

        <input
          type="submit"
          value="إضافة رقم الهاتف"
          className="bg-primary text-center py-1.5 rounded-lg text-white mt-2.5 cursor-pointer w-full"
        />
      </div>
    </div>
  );
};

export default AddPhone;
