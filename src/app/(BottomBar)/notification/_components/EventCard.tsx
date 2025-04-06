import React from "react";

const EventCard = () => {
  return (
    <div className=" flex items-start gap-4 bg-background p-4 rounded-xl relative">
      <div className=" absolute top-2 p-1.5 left-2 bg-primary rounded-lg text-white text-xs">
        منذ: 5د
      </div>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="45px"
          viewBox="0 -960 960 960"
          width="45px"
          fill="#062b22"
          className=" -rotate-[24deg]"
        >
          <path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" />
        </svg>
      </div>
      <div className=" flex-1">
        <h4 className=" text-lg font-bold text-primary">العنوان</h4>
        <p className=" text-primary">هنا وصف الإشعار المرغوب به</p>
        <div className=" bg-[#EAE1D6] text-primary gap-y-1.5 mt-1.5 grid-cols-2 grid p-2 rounded-xl w-full">
          <p className=" text-[13px] sm:text-sm">تاريخ الحدث: 05/10/2024</p>
          <p className=" text-[13px]  sm:text-sm">المستضيف: ش. محمد جلال</p>
          <p className=" text-[13px]  sm:text-sm">الموعد: الخميس - 02:20 م</p>
          <p className=" text-[13px] sm:text-sm">المكان: دار التحفيظ</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
