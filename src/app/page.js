import Image from "next/image";
import Banner from "./components/homepage/Banner/Banner";
import FriendsList from "./components/homepage/FriendsList/FriendsList";

export default function Home() {
  return (
    <main className="bg-[#f8fafc]">
      <Banner />
      <FriendsList />
    </main>
  );
}
