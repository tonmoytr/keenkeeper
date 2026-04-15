export async function getFriends() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/data/friends.json`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch friends");

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
