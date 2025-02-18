import React from "react";
import { FaRegClipboard } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="p-6 max-w-screen-lg -mt-20 mb-11">
      {/* Top Navigation Links */}
      <div className="flex justify-between gap-2 mb-4">
        {[
          "Esindused ja kontaktid",
          "Minu otsingud ja lemmikud",
          "Rattad24 äriklientidele",
        ].map((text, index) => (
          <div
            key={index}
            className=" items-center gap-2 p-4 bg-gray-100 rounded-md"
          >
            <FaRegClipboard className="text-orange-500" />
            <span className="text-xs font-medium">{text}</span>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2">Mis teid huvitab?</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { img: "/p1.png", text: "Rehvid" },
          { img: "/p2.png", text: "Veljed" },
          { img: "/p3.png", text: "Veljed+Rehvid" },
          { img: "/p4.png", text: "Rehvikoda ja teenused" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex flex-col items-start  shadow"
          >
            <img src={item.img} alt={item.text} className="w-20 h-20 mb-2" />
            <span className="text-lg font-semibold">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-4 mb-5">
        <button className="w-full py-2 bg-orange-500 text-white text-md font-semibold rounded-lg">
          Broneeri teenus
        </button>
      </div>
    </section>
  );
};

export default Hero;
