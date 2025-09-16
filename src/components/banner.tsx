import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white  shadow-md overflow-hidden border">
      <div className="bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 rounded-t-xl">
        <h1 className="text-center text-lg font-extrabold mt-1">
          DKM AN-NAIBAH
        </h1>
        <p className="text-center text-xs">
          Pantau setiap pemasukan, pengeluaran, dan <strong>kas</strong> secara
          langsung.
        </p>
      </div>
    </div>
  );
};

export default Banner;
