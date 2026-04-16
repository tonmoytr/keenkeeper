export async function getFriends() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://keenkeeper-trt.vercel.app");

  try {
    const res = await fetch(`${baseUrl}/data/friends.json`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch friends");

    return await res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}
