// import BottomNavigation from "@/components/BottomNavigation";
import Entertainment from "@/components/Entertainment";
import Notifications from "@/components/Notifications";
import ProfileCard from "@/components/ProfileCard";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className=" bg-white">
      <div className=" pb-20  space-y-4 px-4 md:px-0 pt-4 container mx-auto">
        <Notifications />
        <ProfileCard />
        <Entertainment />
        <Reviews />
      </div>
    </main>
  );
}
