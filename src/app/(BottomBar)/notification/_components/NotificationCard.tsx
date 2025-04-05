import Image from "next/image";
import React from "react";
import noti from "../../../../../public/image 9.svg";
const NotificationCard = () => {
  return (
    <div className=" bg-background p-4 rounded-xl relative">
      <div className=" absolute top-2 p-1.5 left-2 bg-primary rounded-lg text-white text-xs">
        منذ: 5د
      </div>
      <div className=" flex items-start gap-4">
        <div>
          <Image src={noti} alt="noti" className=" w-14" />
        </div>
        <div>
          <h4 className=" text-lg font-bold text-primary">العنوان</h4>
          <p className=" text-primary">هنا وصف الإشعار المرغوب به</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
