import React from "react";

const ProfileCard = () => {
  return (
    <div className=" text-primary grid grid-cols-3 gap-y-2 p-3 md:p-6 h-fit rounded-xl relative bg-backgroundSec">
      <div className=" flex flex-col">
        <span className=" font-bold  text-lg">الإسم :</span>
        <span>أيمن إيهاب</span>
      </div>
      <div className=" flex flex-col">
        <span className=" font-bold  text-lg">المستوى :</span>
        <span>المجادلة</span>
      </div>
      <div className=" flex flex-col">
        <span className=" font-bold  text-lg">العمر :</span>
        <span>16 عاما</span>
      </div>
      <div className=" flex flex-col">
        <span className=" font-bold  text-lg">رقم الهاتف :</span>
        <span>0109969097</span>
      </div>
      <div className=" flex flex-col">
        <span className=" font-bold  text-lg">المجموعة :</span>
        <span>أ.عممرو عبد الحافظ</span>
      </div>
    </div>
  );
};

export default ProfileCard;
