"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, name, icon }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-sm transition-all ${
        isActive
          ? "bg-green-900 text-white shadow-md"
          : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{name}</span>
    </Link>
  );
}
