import FriendCard from "../../ui/FriendCard";

async function getFriends() {
  const res = await fetch("http://localhost:3000/data/friends.json", {
    cache: "no-store",
  });

  if (!res.ok) return [];
  return res.json();
}

export default async function FriendsList() {
  const friends = await getFriends();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-8 px-2">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
}
