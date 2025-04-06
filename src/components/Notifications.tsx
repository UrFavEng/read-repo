import React from "react";
import NotificationsImg from "../../public/NotificationsImg.png";
import Image from "next/image";
import Link from "next/link";
const Notifications = () => {
  return (
    <div className=" flex p-3 md:p-6 h-fit rounded-xl relative bg-backgroundSec">
      <Link
        href={"/notification"}
        className=" border-0 outline-0  transition-all duration-200 hover:opacity-80 left-4 md:left-6 absolute top-4 md:top-6 bg-primary  cursor-pointer  border-primary border-solid text-backgroundSec rounded-md px-2 py-1.5"
      >
        المزيد
      </Link>
      <div className=" flex gap-5 ">
        <div>
          {" "}
          <Image src={NotificationsImg} alt="Image" />
        </div>
        <div>
          <h3 className=" text-primary font-bold text-2xl ">العنوان</h3>
          <p className=" mt-1.5 md:m-0 text-primary md:text-lg">
            هنا وصف الإعلان المرغوب في إعلانه
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
