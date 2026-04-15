import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Using Fa6 for the updated X logo
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2d4f43] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Brand Name */}
        <h2 className="text-5xl font-semibold mb-4 tracking-tight">
          <span className="font-extrabold">Keen</span>Keeper
        </h2>

        {/* Tagline */}
        <p className="text-slate-300 text-center max-w-xl mb-8 text-sm md:text-base leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase">
            Social Links
          </span>
          <div className="flex gap-4">
            <SocialIcon icon={<FaInstagram />} href="#" />
            <SocialIcon icon={<FaFacebookF />} href="#" />
            <SocialIcon icon={<FaXTwitter />} href="#" />
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
