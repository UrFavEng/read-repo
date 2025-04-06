import Link from "next/link";
import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className=" px-2.5 text-primary font-medium mb-2.5 flex items-center justify-between">
        <span>تقييمات الإسبوع الحالي</span>
        <Link href={"/history"}>المزيد</Link>
      </div>
      <div className=" grid sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <div className=" text-primary w-48 pt-4 h-fit border border-solid border-background rounded-xl bg-backgroundSec ">
          <div className=" pb-2.5 text-lg font-bold text-center">السبت</div>
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
            <div className=" font-medium text-center text-xs">09:30 م</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
          </div>
          <div className="   text-[15px] grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
            <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
              السلوك
            </div>
            <div className=" font-medium text-xs text-center">10 / 10</div>
          </div>
          <div className="   text-[15px] grid grid-cols-2 place-items-center  border-solid border-0 border-background">
            <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
              الإنصراف
            </div>
            <div className=" font-medium text-xs text-center">10:30 م</div>
          </div>
        </div>
        <div className=" text-primary w-48 pt-4 h-fit border border-solid border-background rounded-xl bg-backgroundSec ">
          <div className=" pb-2.5 text-lg font-bold text-center">السبت</div>
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
            <div className=" font-medium text-center text-xs">09:30 م</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
          </div>
          <div className="   text-[15px] grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
            <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
              السلوك
            </div>
            <div className=" font-medium text-xs text-center">10 / 10</div>
          </div>
          <div className="   text-[15px] grid grid-cols-2 place-items-center  border-solid border-0 border-background">
            <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
              الإنصراف
            </div>
            <div className=" font-medium text-xs text-center">10:30 م</div>
          </div>
        </div>
        <div className=" text-primary w-48 pt-4 h-fit border border-solid border-background rounded-xl bg-backgroundSec ">
          <div className=" pb-2.5 text-lg font-bold text-center">السبت</div>
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
            <div className=" font-medium text-center text-xs">09:30 م</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
          </div>
          <div className="   text-[15px] grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
            <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
              السلوك
            </div>
            <div className=" font-medium text-xs text-center">10 / 10</div>
          </div>
          <div className="   text-[15px] grid grid-cols-2 place-items-center  border-solid border-0 border-background">
            <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
              الإنصراف
            </div>
            <div className=" font-medium text-xs text-center">10:30 م</div>
          </div>
        </div>
        <div className=" text-primary w-48 pt-4 h-fit border border-solid border-background rounded-xl bg-backgroundSec ">
          <div className=" pb-2.5 text-lg font-bold text-center">السبت</div>
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
            <div className=" font-medium text-center text-xs">09:30 م</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
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
            <div className=" font-medium text-xs text-center">10 / 10</div>
          </div>
          <div className="   text-[15px] grid grid-cols-2 place-items-center border-b border-solid border-0 border-background">
            <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
              السلوك
            </div>
            <div className=" font-medium text-xs text-center">10 / 10</div>
          </div>
          <div className="   text-[15px] grid grid-cols-2 place-items-center  border-solid border-0 border-background">
            <div className=" border-0 border-e  py-2 border-background border-solid w-full text-center">
              الإنصراف
            </div>
            <div className=" font-medium text-xs text-center">10:30 م</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
