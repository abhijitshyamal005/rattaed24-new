import Link from "next/link";
import { FaSearch, FaRegHeart , FaRegUser, FaRegClipboard } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-around items-center border-t">
      <Link href="/search" className="flex flex-col items-center ">
        <FaSearch className="text-orange-500  font-thin  text-xl" />
        <span className="text-sm">Otsing</span>
      </Link>
      <Link href="/favorites" className="flex flex-col items-center ">
        <FaRegHeart className="text-orange-500   text-xl" />
        <span className="text-sm">Lemmikud</span>
      </Link>
      <Link href="/featured" className="flex flex-col items-center ">
        <FaRegClipboard className="text-orange-500   text-xl" />
        <span className="text-sm">Esindused</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center ">
        <FaRegUser className="text-orange-500   text-xl" />
        <span className="text-sm">Profile</span>
      </Link>
    </div>
  );
};

export default Footer;
