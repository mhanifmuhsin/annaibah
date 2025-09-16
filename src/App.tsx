// import "./App.css";

import { GlassWaterIcon } from "lucide-react";
import BottomNavigation from "./components/bottom-navigation";
import IncomeCard from "./components/IncomeCard";
import ProgramCard from "./components/ProgramCard";
import WhatsAppButton from "./components/WhatsAppButton";
const categories = [
  { name: "Kas An-Naibah", value: "Rp 573.000,00", color: "#ec4899" }, // pink
  { name: "Kas Kencleng", value: "Rp 260.000,00", color: "#3b82f6" }, // blue
  { name: "Lainnya", value: "Rp 495.000,00", color: "#6b7280" }, // gray
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
          <section className="mx-2 pt-2">
            <IncomeCard
              title="Laporan DKM AN-NAIBAH"
              date="September 2025"
              total="Rp 1.090.000,00 "
              totalExpense="Rp 850.000,00"
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
          <section className="flex justify-center p-4">
            <WhatsAppButton
              phone="6281916511138"
              message="Halo, saya ingin memberikan masukan."
              title="Berikan Masukan"
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
