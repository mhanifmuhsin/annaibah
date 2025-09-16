// import "./App.css";

import BottomNavigation from "./components/bottom-navigation";
import IncomeCard from "./components/IncomeCard";
const categories = [
  { name: "Kas An-Naibah", value: "Rp 3.317.740,00", color: "#ec4899" }, // pink
  { name: "Kas Kencleng", value: "Rp 2.841.980,00", color: "#3b82f6" }, // blue
  { name: "Lainnya", value: "Rp 2.267.920,00", color: "#6b7280" }, // gray
];
function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-50">
        {/* konten utama */}
        <div className="mx-auto w-full max-w-md flex-1 bg-gradient-to-b from-purple-200 via-purple-50 to-white shadow-md">
          <section className="mx-2 pt-2">
            <IncomeCard
              title="Laporan"
              date="Jan 2025"
              total="Rp 8.427.640,00 "
              categories={categories}
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
