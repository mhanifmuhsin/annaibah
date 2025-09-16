import { Edit3Icon } from "lucide-react"; // icon untuk tombol download
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="mx-2  bg-white rounded-xl shadow-md overflow-hidden border">
      <div className="flex items-center gap-2 p-4">
        <span className="text-xl font-bold text-blue-600">Dashboard</span>
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 rounded-t-xl">
        <p className="flex items-center justify-center gap-2 text-sm mb-2">
          {/* <span className="bg-white text-blue-600 rounded-full px-2 py-0.5 text-xs font-bold">
            1
          </span> */}
          Halal Travel Apps Pertama di Indonesia!
        </p>
        {/* <h2 className="text-center text-lg font-semibold">
          Rencanakan Perjalanan Halalmu bersama
        </h2> */}
        <h1 className="text-center text-xl font-extrabold mt-1">AN NAIBAH</h1>

        {/* Tombol Download */}
        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
            <Edit3Icon className="h-5 w-5" />
            Buat Masukan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
