export default function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-white text-[#2d4f43] rounded-full flex items-center justify-center hover:bg-slate-200 transition-all text-xl"
    >
      {icon}
    </a>
  );
}
