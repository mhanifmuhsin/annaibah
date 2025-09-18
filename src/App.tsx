// import "./App.css";

import { GlassWaterIcon } from "lucide-react";
import BottomNavigation from "./components/bottom-navigation";
import IncomeCard from "./components/IncomeCard";
import ProgramCard from "./components/ProgramCard";
import WhatsAppButton from "./components/WhatsAppButton";
import React from "react";
import InOut from "./components/InOut";
import kasAnnaibahData from "./data/kas_annaibah.json";
import kasKenclengData from "./data/kas_kencleng.json";
import kasLainnyaData from "./data/kas_lainnya.json";
import { hitungSaldo } from "./utils";

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
  const [stateNavigation, setStateNavigation] = React.useState("home");
  const dataKasAnnaibah = hitungSaldo(kasAnnaibahData);
  const dataKasKencleng = hitungSaldo(kasKenclengData);
  const dataKasLainnya = hitungSaldo(kasLainnyaData);
  const categories = [
    {
      id: "kas_annaibah",
      name: "Kas An-Naibah",
      value: dataKasAnnaibah.length
        ? dataKasAnnaibah[dataKasAnnaibah.length - 1].saldo.toLocaleString(
            "id-ID",
            {
              style: "currency",
              currency: "IDR",
            }
          )
        : "Rp 0,00",
      color: "#ec4899",
    }, // pink
    {
      id: "kencleng_annaibah",
      name: "Kas Kencleng",
      value: dataKasKencleng.length
        ? dataKasKencleng[dataKasKencleng.length - 1].saldo.toLocaleString(
            "id-ID",
            {
              style: "currency",
              currency: "IDR",
            }
          )
        : "Rp 0,00",
      color: "#3b82f6",
    }, // blue
    {
      id: "wakaf_annaibah",
      name: "Lainnya",
      value: dataKasLainnya.length
        ? dataKasLainnya[dataKasLainnya.length - 1].saldo.toLocaleString(
            "id-ID",
            {
              style: "currency",
              currency: "IDR",
            }
          )
        : "Rp 0,00",
      color: "#6b7280",
    }, // gray
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-50">
        {/* konten utama */}
        <div className="mx-auto w-full max-w-md flex-1 bg-gradient-to-b from-red-400 via-red-50 to-white shadow-md pb-20">
          {stateNavigation === "home" && (
            <>
              <section className="mx-2 pt-2">
                <IncomeCard
                  title="Roudloh Merah Putih AN-NAIBAH"
                  date={new Date().toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                  total={(
                    dataKasAnnaibah
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() ===
                            new Date().getMonth() &&
                          new Date(item.date).getFullYear() ===
                            new Date().getFullYear()
                      )
                      .reduce((acc, item) => acc + item.in, 0) +
                    dataKasKencleng
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() ===
                            new Date().getMonth() &&
                          new Date(item.date).getFullYear() ===
                            new Date().getFullYear()
                      )
                      .reduce((acc, item) => acc + item.in, 0) +
                    dataKasLainnya
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() ===
                            new Date().getMonth() &&
                          new Date(item.date).getFullYear() ===
                            new Date().getFullYear()
                      )
                      .reduce((acc, item) => acc + item.in, 0)
                  ).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                  totalExpense={(
                    dataKasAnnaibah
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() ===
                            new Date().getMonth() &&
                          new Date(item.date).getFullYear() ===
                            new Date().getFullYear()
                      )
                      .reduce((acc, item) => acc + item.out, 0) +
                    dataKasKencleng
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() ===
                            new Date().getMonth() &&
                          new Date(item.date).getFullYear() ===
                            new Date().getFullYear()
                      )
                      .reduce((acc, item) => acc + item.out, 0) +
                    dataKasLainnya
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() ===
                            new Date().getMonth() &&
                          new Date(item.date).getFullYear() ===
                            new Date().getFullYear()
                      )
                      .reduce((acc, item) => acc + item.out, 0)
                  ).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
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
                  total={dataKasAnnaibah
                    .filter(
                      (item) =>
                        new Date(item.date).getMonth() ===
                          new Date().getMonth() &&
                        new Date(item.date).getFullYear() ===
                          new Date().getFullYear()
                    )
                    .reduce((acc, item) => acc + item.in, 0)
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  totalExpense={dataKasAnnaibah
                    .filter(
                      (item) =>
                        new Date(item.date).getMonth() ===
                          new Date().getMonth() &&
                        new Date(item.date).getFullYear() ===
                          new Date().getFullYear()
                    )
                    .reduce((acc, item) => acc + item.out, 0)
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  categories={categories.filter(
                    (cat) => cat.id === "kas_annaibah"
                  )}
                />
              </section>
              <section className="m-2">
                <InOut
                  title="Pemasukan Pengeluaran"
                  period={new Date().toLocaleString("id-ID", {
                    year: "numeric",
                  })}
                  items={dataKasAnnaibah}
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
                  total={dataKasKencleng
                    .filter(
                      (item) =>
                        new Date(item.date).getMonth() ===
                          new Date().getMonth() &&
                        new Date(item.date).getFullYear() ===
                          new Date().getFullYear()
                    )
                    .reduce((acc, item) => acc + item.in, 0)
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  totalExpense={dataKasKencleng
                    .filter(
                      (item) =>
                        new Date(item.date).getMonth() ===
                          new Date().getMonth() &&
                        new Date(item.date).getFullYear() ===
                          new Date().getFullYear()
                    )
                    .reduce((acc, item) => acc + item.out, 0)
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  categories={categories.filter(
                    (cat) => cat.id === "kencleng_annaibah"
                  )}
                />
              </section>
              <section className="m-2">
                <InOut
                  title="Pemasukan Pengeluaran"
                  period={new Date().toLocaleString("id-ID", {
                    year: "numeric",
                  })}
                  items={dataKasKencleng}
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
                  total={dataKasLainnya
                    .filter(
                      (item) =>
                        new Date(item.date).getMonth() ===
                          new Date().getMonth() &&
                        new Date(item.date).getFullYear() ===
                          new Date().getFullYear()
                    )
                    .reduce((acc, item) => acc + item.in, 0)
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  totalExpense={dataKasLainnya
                    .filter(
                      (item) =>
                        new Date(item.date).getMonth() ===
                          new Date().getMonth() &&
                        new Date(item.date).getFullYear() ===
                          new Date().getFullYear()
                    )
                    .reduce((acc, item) => acc + item.out, 0)
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  categories={categories.filter(
                    (cat) => cat.id === "wakaf_annaibah"
                  )}
                />
              </section>
              <section className="m-2">
                <InOut
                  title="Pemasukan Pengeluaran"
                  period={new Date().toLocaleString("id-ID", {
                    year: "numeric",
                  })}
                  items={dataKasLainnya}
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
