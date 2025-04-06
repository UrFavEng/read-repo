import BackBtn from "@/components/BackBtn";
import React from "react";

const page = () => {
  return (
    <div className=" bg-backgroundSec flex flex-col min-h-screen min-w-screen">
      <div className=" bg-background flex justify-between items-center rounded-b-3xl px-4 py-3">
        <div className=" flex gap-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="#062b22"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </div>
          <div className=" text-lg font-bold text-primary">
            <p>المحادثة مع المحفظ:</p>
            <h4 className=" font-normal">أ. عمرو عبد الحافظ</h4>
          </div>
        </div>
        <BackBtn />
      </div>
      <div className=" p-4 flex-1">
        {" "}
        <div className="flex gap-3 flex-row-reverse text-[#F3F8FF]">
          <p className="bg-background text-sm max-w-[40%] py-4 px-3  rounded-t-xl rounded-r-xl">
            {"message"}
          </p>
        </div>{" "}
        <div className="flex gap-3  justify-start  text-[#2B303A]">
          <p className="bg-primary text-[#F3F8FF] text-sm max-w-[40%] py-4 px-3 rounded-t-xl rounded-l-xl">
            {"message"}
          </p>
        </div>
      </div>
      <div className=" flex items-start gap-4 mb-4 bg-background rounded-2xl w-[95%] p-2 mx-auto">
        <button
          className=" cursor-pointer flex items-center justify-center border-none outline-none bg-primary  rounded-full p-2.5"
          title="send"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#be9159"
          >
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
          </svg>
        </button>{" "}
        <textarea
          placeholder="اكتب هنا..."
          className=" bg-[#F4F4F4F4] resize-none rounded-xl p-4 outline-none border-none flex-1 h-[90%]"
        ></textarea>
      </div>
    </div>
  );
};

export default page;
