import React from "react";
import historyImage from "../../../public/image 31.svg";
import Image from "next/image";
const page = () => {
  return (
    <div className=" bg-backgroundSec flex flex-col min-h-screen pb-4">
      <div className=" bg-background flex justify-between items-center rounded-b-3xl px-4 py-3">
        <div className=" items-center flex gap-4">
          <div>
            <Image src={historyImage} alt="image" />
          </div>
          <div className=" text-lg font-bold text-primary">سجل الحفظ</div>
        </div>
        <div className=" bg-primary px-3 py-2 rounded-lg">
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
      </div>
      <div className=" space-x-3 mt-4 mx-4">
        <span className=" text-primary text-sm font-medium">من :</span>
        <input
          type="date"
          className="input bg-white  text-[#A9A9A9]  focus:text-primary transition-all duration-200 !border w-32 !h-8 !border-primary !border-solid !ring-0 !outline-0"
          title="from"
        />
        <span />
        <span />
        <span className=" text-primary text-sm font-medium">إلى :</span>

        <input
          type="date"
          className="input bg-white  text-[#A9A9A9]  focus:text-primary transition-all duration-200 !border w-32 !h-8 !border-primary !border-solid !ring-0 !outline-0"
          title="to"
        />
      </div>
      <div className=" space-y-4 mt-4 mx-4">
        {" "}
        <div className="collapse collapse-arrow ">
          <input
            title="choose"
            type="radio"
            name="my-accordion-2"
            defaultChecked
          />
          <div className="collapse-title bg-primary font-semibold">
            الإسبوع الثالث 1/11/2024 - 8/11/2024
          </div>
          <div className="collapse-content bg-background border-0 outline-0 text-sm">
            <div className=" pt-4 grid sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <div className=" text-primary w-48 pt-4 h-fit border border-solid border-background rounded-xl bg-backgroundSec ">
                <div className=" pb-2.5 text-lg font-bold text-center">
                  السبت
                </div>
                <div className="  font-bold grid grid-cols-2 place-items-center border-y border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    العامل
                  </div>
                  <div>القيمة</div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الحضور
                  </div>
                  <div className=" font-medium text-center text-xs">
                    09:30 م
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الجديد
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من سورة المزمل آية 10 إلى آية 50
                  </div>
                </div>
                <div className="  grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم الجديد
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    المراجعة
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من صفحة 50 آية 10إلى 52 آية 50
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم المراجعة
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px]  border-0 border-e  py-2 border-background border-solid w-full text-center">
                    ماضي آخر
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من صفحة 50 آية 10إلى 52 آية 50
                  </div>
                </div>
                <div className=" text-[15px]  grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم الماضي
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   text-[15px] grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    السلوك
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   text-[15px] grid grid-cols-2 place-items-center  border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الإنصراف
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10:30 م
                  </div>
                </div>
              </div>
              <div className="text-primary w-48 pt-4 h-fit border border-solid border-background rounded-xl bg-backgroundSec ">
                <div className=" pb-2.5 text-lg font-bold text-center">
                  السبت
                </div>
                <div className="  font-bold grid grid-cols-2 place-items-center border-y border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    العامل
                  </div>
                  <div>القيمة</div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الحضور
                  </div>
                  <div className=" font-medium text-center text-xs">
                    09:30 م
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الجديد
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من سورة المزمل آية 10 إلى آية 50
                  </div>
                </div>
                <div className="  grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم الجديد
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    المراجعة
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من صفحة 50 آية 10إلى 52 آية 50
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم المراجعة
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px]  border-0 border-e  py-2 border-background border-solid w-full text-center">
                    ماضي آخر
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من صفحة 50 آية 10إلى 52 آية 50
                  </div>
                </div>
                <div className=" text-[15px]  grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم الماضي
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   text-[15px] grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    السلوك
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   text-[15px] grid grid-cols-2 place-items-center  border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الإنصراف
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10:30 م
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input
            title="choose"
            type="radio"
            name="my-accordion-2"
            defaultChecked
          />
          <div className="collapse-title bg-primary font-semibold">
            الإسبوع الثالث 1/11/2024 - 8/11/2024
          </div>
          <div className="collapse-content bg-background border-0 outline-0 text-sm">
            <div className=" pt-4 grid sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <div className=" text-primary w-48 pt-4 h-fit border border-solid border-background rounded-xl bg-backgroundSec ">
                <div className=" pb-2.5 text-lg font-bold text-center">
                  السبت
                </div>
                <div className="  font-bold grid grid-cols-2 place-items-center border-y border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    العامل
                  </div>
                  <div>القيمة</div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الحضور
                  </div>
                  <div className=" font-medium text-center text-xs">
                    09:30 م
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الجديد
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من سورة المزمل آية 10 إلى آية 50
                  </div>
                </div>
                <div className="  grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم الجديد
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    المراجعة
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من صفحة 50 آية 10إلى 52 آية 50
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم المراجعة
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px]  border-0 border-e  py-2 border-background border-solid w-full text-center">
                    ماضي آخر
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من صفحة 50 آية 10إلى 52 آية 50
                  </div>
                </div>
                <div className=" text-[15px]  grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم الماضي
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   text-[15px] grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    السلوك
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   text-[15px] grid grid-cols-2 place-items-center  border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الإنصراف
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10:30 م
                  </div>
                </div>
              </div>
              <div className="text-primary w-48 pt-4 h-fit border border-solid border-background rounded-xl bg-backgroundSec ">
                <div className=" pb-2.5 text-lg font-bold text-center">
                  السبت
                </div>
                <div className="  font-bold grid grid-cols-2 place-items-center border-y border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    العامل
                  </div>
                  <div>القيمة</div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الحضور
                  </div>
                  <div className=" font-medium text-center text-xs">
                    09:30 م
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الجديد
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من سورة المزمل آية 10 إلى آية 50
                  </div>
                </div>
                <div className="  grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم الجديد
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    المراجعة
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من صفحة 50 آية 10إلى 52 آية 50
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" text-[15px] border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم المراجعة
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className="text-[15px]  border-0 border-e  py-2 border-background border-solid w-full text-center">
                    ماضي آخر
                  </div>
                  <div className=" font-medium text-xs text-center">
                    من صفحة 50 آية 10إلى 52 آية 50
                  </div>
                </div>
                <div className=" text-[15px]  grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    تقييم الماضي
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   text-[15px] grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    السلوك
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10 / 10
                  </div>
                </div>
                <div className="   text-[15px] grid grid-cols-2 place-items-center  border-solid border-0 border-background">
                  <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
                    الإنصراف
                  </div>
                  <div className=" font-medium text-xs text-center">
                    10:30 م
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
