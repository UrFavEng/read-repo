import Link from "next/link";
import React from "react";
import NotificationCard from "./_components/NotificationCard";
import EventCard from "./_components/EventCard";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const pageType = type === "old" ? "old" : "new";
  return (
    <div className=" bg-backgroundSec py-20 flex flex-col min-h-screen ">
      <div className=" fixed z-50 top-0 left-0 w-full bg-background flex justify-between items-center rounded-b-3xl px-4 py-5">
        <div className=" bg-backgroundSec py-1.5 rounded-xl flex px-2">
          <Link
            href={"/notification?type=new"}
            className={` ${
              pageType == "new"
                ? "text-white bg-primary"
                : "text-primary bg-transparent"
            } border-none  font-normal text-sm p-2 outline-none  rounded-lg`}
          >
            الإشعارات
          </Link>
          <Link
            href={"/notification?type=old"}
            className={` border-none  font-normal text-sm p-2 outline-none rounded-lg ${
              pageType == "old"
                ? "text-white bg-primary"
                : "text-primary bg-transparent"
            }`}
          >
            الأحداث
          </Link>
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
      <div className=" space-y-3 mt-4 mx-4">
        {pageType == "new" && (
          <>
            {" "}
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
          </>
        )}
        {pageType == "old" && (
          <>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </>
        )}
      </div>
    </div>
  );
}
