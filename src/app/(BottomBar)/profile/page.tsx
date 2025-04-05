"use client";
import React, { useState } from "react";
import logo from "../../../../public/لوجو-زيني 1.png";
import Image from "next/image";
import Complaint from "./_components/Complaint";
import AddPhone from "./_components/AddPhone";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addPhone, setAddPhone] = useState(false);

  return (
    <div className="pt-10 bg-backgroundSec  h-screen relative">
      <div className=" flex flex-col items-center justify-center w-full">
        {" "}
        <Image src={logo} alt="logo" />
        <p className=" mt-2.5 text-primary text-lg">
          <span>رقم الهاتف:</span>
          <span> 01099690997</span>
        </p>
      </div>
      <div className="container px-4 md:px-0 space-y-3 mx-auto mt-12">
        <div className=" flex items-start gap-4">
          <div>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#062b22"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
          </div>
          <div>
            <p className=" text-lg text-primary"> اختر الطالب :</p>
            <div className=" space-y-2 bg-[#2B4940] p-2.5 w-60 sm:w-96 rounded-xl">
              <div className="  cursor-pointer text-[#F5F5F5] bg-background p-2 rounded-lg">
                الطالب: أيمن إيهاب
              </div>
              <div className=" cursor-pointer text-black bg-hoverColor p-2 rounded-lg">
                الطالب: عمرو إيهاب
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-primary w-full h-[0.5px]" />
        <div className="flex gap-4 items-center">
          <div className=" text-backgroundSec w-9 flex items-center justify-center rounded-full h-9 bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
          </div>
          <p className=" text-black text-lg" onClick={() => setAddPhone(true)}>
            إضافة رقم هاتف جديد
          </p>
        </div>{" "}
        <div className=" bg-primary w-full h-[1px]" />{" "}
        <div className="flex gap-4 items-center">
          <div className=" text-backgroundSec w-9 flex items-center justify-center rounded-full h-9 bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
            </svg>
          </div>
          <p onClick={() => setIsOpen(true)} className=" text-black text-lg">
            تسجيل شكوى
          </p>
        </div>{" "}
        <div className=" bg-primary w-full h-[1px]" />{" "}
        <div className="  flex gap-4 items-center">
          <div className=" text-backgroundSec w-9 flex items-center justify-center rounded-full h-9 bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
          </div>
          <p className=" text-black text-lg">تسجيل الخروج</p>
        </div>{" "}
        <div className=" bg-primary w-full h-[0.5px]" />{" "}
      </div>
      <Complaint isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <AddPhone isOpen={addPhone} onClose={() => setAddPhone(false)} />
    </div>
  );
};

export default Page;
