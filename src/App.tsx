// import "./App.css";

import { GlassWaterIcon } from "lucide-react";
import BottomNavigation from "./components/bottom-navigation";
import IncomeCard from "./components/IncomeCard";
import ProgramCard from "./components/ProgramCard";
import WhatsAppButton from "./components/WhatsAppButton";
import React from "react";
import InOut from "./components/InOut";

const categories = [
  {
    id: "kas_annaibah",
    name: "Kas An-Naibah",
    value: "Rp 573.000,00",
    color: "#ec4899",
  }, // pink
  {
    id: "kencleng_annaibah",
    name: "Kas Kencleng",
    value: "Rp 260.000,00",
    color: "#3b82f6",
  }, // blue
  {
    id: "wakaf_annaibah",
    name: "Lainnya",
    value: "Rp 115.000,00",
    color: "#6b7280",
  }, // gray
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

const inOutKasAnnaibah = [
  {
    date: "2 September 2025",
    in: 330000,
    out: 0,
    desc: "Saldo",
    saldo: 330000,
  },
  {
    date: "2 September 2025",
    in: 240000,
    out: 0,
    desc: "Muhamad Hanif Muhsin",
    saldo: 573000,
  },
];

const inOutKenclengAnnaibah = [
  {
    date: "7 September 2025",
    in: 50000,
    out: 0,
    desc: "Saldo",
    saldo: 50000,
  },
  {
    date: "7 September 2025",
    in: 0,
    out: 50000,
    desc: "Marbot",
    saldo: 0,
  },
  {
    date: "15 September 2025",
    in: 260000,
    out: 0,
    desc: "Dari kencleng",
    saldo: 260000,
  },
];

const inOutWakafAnnaibah = [
  {
    date: "8 Agustus 2025",
    in: 200000,
    out: 0,
    desc: "Saldo",
    saldo: 200000,
  },
  {
    date: "28 Agustus 2025",
    in: 295000,
    out: 0,
    desc: "Saldo sisa bendahara (teh euis)",
    saldo: 495000,
  },
  {
    date: "3 September 2025",
    in: 100000,
    out: 0,
    desc: "Bapak Asep Salaman P",
    saldo: 595000,
  },
  {
    date: "7 September 2025",
    in: 250000,
    out: 0,
    desc: "Hj. Imas Hasanah",
    saldo: 845000,
  },
  {
    date: "7 September 2025",
    in: 50000,
    out: 0,
    desc: "Hj. Noneng S dari H. Sutari",
    saldo: 895000,
  },
  {
    date: "7 September 2025",
    in: 50000,
    out: 0,
    desc: "Kas Kencleng Mesjid",
    saldo: 945000,
  },
  {
    date: "7 September 2025",
    in: 50000,
    out: 0,
    desc: "Muhamad Hanif Muhsin",
    saldo: 995000,
  },
  {
    date: "7 September 2025",
    in: 0,
    out: 36000,
    desc: "BPJS Bapak Agus Sopandi",
    saldo: 959000,
  },
  {
    date: "7 September 2025",
    in: 0,
    out: 164000,
    desc: "Bapak Agus Sopandi (sebagai imam mesjid)",
    saldo: 795000,
  },
  {
    date: "9 September 2025",
    in: 350000,
    out: 0,
    desc: "Wakaf produktif caringin",
    saldo: 1145000,
  },
  {
    date: "9 September 2025",
    in: 0,
    out: 20000,
    desc: "Teh Euis (membantu bendahara wakaf)",
    saldo: 1145000,
  },
  {
    date: "9 September 2025",
    in: 0,
    out: 20000,
    desc: "Manaqib Ibu Rella At-Taqwa",
    saldo: 1125000,
  },
  {
    date: "9 September 2025",
    in: 0,
    out: 25000,
    desc: "Bi Nyai (membantu acara manaqib)",
    saldo: 1100000,
  },
  {
    date: "9 September 2025",
    in: 0,
    out: 100000,
    desc: "Konsumsi manaqib ibu rella dan iuran pusat",
    saldo: 975000,
  },
  {
    date: "12 September 2025",
    in: 0,
    out: 150000,
    desc: "Sodaqoh manaqib ust.arif",
    saldo: 825000,
  },
  {
    date: "14 September 2025",
    in: 0,
    out: 150000,
    desc: "Air Sirraya 3 Dus Gelas Manaqib Ibu Rella + At-Taqwa",
    saldo: 720000,
  },
  {
    date: "14 September 2025",
    in: 0,
    out: 250000,
    desc: "Air Sirraya 3 Dus Botol Manaqib An-Naibah",
    saldo: 495000,
  },
  {
    date: "17 September 2025",
    in: 0,
    out: 225000,
    desc: "Personil Manaqib At-Taqwa",
    saldo: 245000,
  },
  {
    date: "17 September 2025",
    in: 0,
    out: 20000,
    desc: "Khotaman Manaqib At-Taqwa",
    saldo: 225000,
  },
  {
    date: "17 September 2025",
    in: 0,
    out: 30000,
    desc: "Bi Nyai Manaqib At-Taqwa",
    saldo: 195000,
  },
  {
    date: "17 September 2025",
    in: 0,
    out: 20000,
    desc: "Ade Dayeuhkolot Manaqib At-Taqwa",
    saldo: 175000,
  },
  {
    date: "17 September 2025",
    in: 0,
    out: 60000,
    desc: "Biaya tidak terduga Manaqib At-Taqwa",
    saldo: 115000,
  },
];
function App() {
  const [stateNavigation, setStateNavigation] = React.useState("home");
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-50">
        {/* konten utama */}
        <div className="mx-auto w-full max-w-md flex-1 bg-gradient-to-b from-purple-200 via-purple-50 to-white shadow-md pb-20">
          {stateNavigation === "home" && (
            <>
              <section className="mx-2 pt-2">
                <IncomeCard
                  title="Laporan DKM AN-NAIBAH"
                  date={new Date().toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                  total="Rp 1.090.000,00 "
                  totalExpense="Rp 1.230.000,00"
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
            </>
          )}
          {stateNavigation === "kas_annaibah" && (
            <>
              <section className="mx-2 pt-2">
                <IncomeCard
                  title="Laporan Kas An-Naibah"
                  date={new Date().toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                  total="Rp 573.000,00 "
                  totalExpense="Rp 0,00"
                  categories={categories.filter(
                    (cat) => cat.id === "kas_annaibah"
                  )}
                />
              </section>
              <section className="m-2">
                <InOut
                  title="Pemasukan Pengeluaran"
                  period={new Date().toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                  items={inOutKasAnnaibah}
                />
              </section>
            </>
          )}

          {stateNavigation === "kencleng_annaibah" && (
            <>
              <section className="mx-2 pt-2">
                <IncomeCard
                  title="Laporan Kas Kencleng"
                  date={new Date().toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                  total="Rp 260.000,00 "
                  totalExpense="Rp 50.000,00"
                  categories={categories.filter(
                    (cat) => cat.id === "kencleng_annaibah"
                  )}
                />
              </section>
              <section className="m-2">
                <InOut
                  title="Pemasukan Pengeluaran"
                  period={new Date().toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                  items={inOutKenclengAnnaibah}
                />
              </section>
            </>
          )}

          {stateNavigation === "wakaf_annaibah" && (
            <>
              <section className="mx-2 pt-2">
                <IncomeCard
                  title="Laporan Kas Lainnya"
                  date={new Date().toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                  total="Rp 850.000,00 "
                  totalExpense="Rp 1.230.000,00"
                  categories={categories.filter(
                    (cat) => cat.id === "wakaf_annaibah"
                  )}
                />
              </section>
              <section className="m-2">
                <InOut
                  title="Pemasukan Pengeluaran"
                  period={new Date().toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                  items={inOutWakafAnnaibah}
                />
              </section>
            </>
          )}

          <section className="flex justify-center p-4">
            <WhatsAppButton
              phone="6281916511138"
              message="Halo, saya ingin memberikan masukan."
              title="Berikan Masukan"
            />
          </section>
        </div>

        {/* bottom navigation selalu di bawah */}
        <BottomNavigation
          state={stateNavigation}
          setState={setStateNavigation}
        />
      </div>
    </>
  );
}

export default App;
