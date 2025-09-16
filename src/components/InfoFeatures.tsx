import React from "react";
import { Wallet, TrendingUp, TrendingDown, History } from "lucide-react";

const features = [
  {
    icon: <Wallet className="h-6 w-6 text-blue-600" />,
    title: "Saldo Terkini",
    desc: "Lihat saldo kas masjid secara real-time dan transparan.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    title: "Pemasukan",
    desc: "Pantau donasi, infaq, dan pemasukan lain yang tercatat otomatis.",
  },
  {
    icon: <TrendingDown className="h-6 w-6 text-red-600" />,
    title: "Pengeluaran",
    desc: "Transparansi penggunaan dana untuk kegiatan masjid.",
  },
  {
    icon: <History className="h-6 w-6 text-purple-600" />,
    title: "Histori Laporan",
    desc: "Akses laporan kas harian, mingguan, dan bulanan dengan mudah.",
  },
];

const InfoFeatures: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-center text-sm font-bold text-gray-800 mb-8">
        Apa Saja yang Bisa Dilihat di Platform Pantau Aku ?
      </h2>

      <div className="grid grid-cols-1  gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoFeatures;
