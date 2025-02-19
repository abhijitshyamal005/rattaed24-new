import Link from "next/link";
import { FaSearch, FaRegHeart, FaRegUser, FaRegClipboard } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg py-3 px-6 flex justify-between items-center border-t">
      {[  
        { href: "/search", icon: <FaSearch />, label: "Otsing" },
        { href: "/favorites", icon: <FaRegHeart />, label: "Lemmikud" },
        { href: "/esindused", icon: <FaRegClipboard />, label: "Esindused" },
        { href: "/profile", icon: <FaRegUser />, label: "Profiil" }
      ].map((item, index) => (
        <Link key={index} href={item.href} className="flex flex-col items-center gap-1 text-gray-700">
          <span className="text-orange-500 text-xl">{item.icon}</span>
          <span className="text-sm font-medium">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
