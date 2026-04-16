import Banner from "./components/homepage/Banner/Banner";
import FriendsList from "./components/homepage/FriendsList/FriendsList";


export const metadata = {
  title: "Home | Keen Keeper",
  description: "A Digital Diary App",
};

export default function Home() {
  return (
    <main className="bg-[#f8fafc]">
      <Banner />
      <FriendsList />
    </main>
  );
}
