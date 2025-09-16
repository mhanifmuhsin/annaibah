// import "./App.css";

import { GlassWaterIcon } from "lucide-react";
import BottomNavigation from "./components/bottom-navigation";
import IncomeCard from "./components/IncomeCard";
import ProgramCard from "./components/ProgramCard";
const categories = [
  { name: "Kas An-Naibah", value: "Rp 3.317.740,00", color: "#ec4899" }, // pink
  { name: "Kas Kencleng", value: "Rp 2.841.980,00", color: "#3b82f6" }, // blue
  { name: "Lainnya", value: "Rp 2.267.920,00", color: "#6b7280" }, // gray
];
const spendItems = [
  {
    icon: <GlassWaterIcon className="h-4 w-4 text-gray-600" />,
    title: "Sirraya di Manaqib An-Naibah",
    subtitle: "3 Dus Botol",
    amount: "Rp 105.000,00",
    date: "35.500,00/Dus",
  },
  {
    icon: <GlassWaterIcon className="h-4 w-4 text-gray-600" />,
    title: "Sirraya di Manaqib At-Taqwa",
    subtitle: "1.5 Dus Gelas",
    amount: "Rp 112.500,00",
    date: "75.000,00/Dus",
  },
  {
    icon: <GlassWaterIcon className="h-4 w-4 text-gray-600" />,
    title: "Sirraya di Manaqib Ibu Rella At-Taqwa",
    subtitle: "1.5 Dus Gelas",
    amount: "Rp 112.500,00",
    date: "75.000,00/Dus",
  },
];
function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-50">
        {/* konten utama */}
        <div className="mx-auto w-full max-w-md flex-1 bg-gradient-to-b from-purple-200 via-purple-50 to-white shadow-md">
          <section className="mx-2 pt-5">
            <IncomeCard
              title="Laporan DKM"
              date="Jan 2025"
              total="Rp 8.427.640,00 "
              totalExpense="Rp 2.000.000"
              categories={categories}
            />
          </section>
          <section className="m-2">
            <ProgramCard
              title="Program Pembiasaan"
              period="2025"
              items={spendItems}
            />
          </section>
        </div>

        {/* bottom navigation selalu di bawah */}
        <BottomNavigation />
      </div>
    </>
  );
}

export default App;
