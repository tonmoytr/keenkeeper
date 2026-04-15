import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { GoStopwatch } from "react-icons/go";
import { TfiStatsUp } from "react-icons/tfi";
import NavLink from "./NavLink";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/", icon: <RiHome2Line /> },
    { name: "Timeline", href: "/timeline", icon: <GoStopwatch /> },
    { name: "Stats", href: "/stats", icon: <TfiStatsUp /> },
  ];
  return (
    <nav className=" border-b border-slate-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* Navlinks */}
              {navLinks.map((link) => (
                <NavLink key={link.name} {...link} />
              ))}
            </ul>
          </div>
          <Link href={"/"} className="text-xl">
            <span className="font-bold">Keen</span>Keeper
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* Navlinks */}
            {navLinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
