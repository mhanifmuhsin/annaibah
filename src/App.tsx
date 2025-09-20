// import "./App.css";

import { ConstructionIcon, GlassWaterIcon } from "lucide-react";
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

const activityItems = [
  {
    icon: <ConstructionIcon className="h-4 w-4 text-gray-600" />,
    title: "Perbaikan WC Mampet ",
    subtitle: "Mang Ica",
    amount: "20 September 2025",
    date: "-",
  },
  {
    icon: <ConstructionIcon className="h-4 w-4 text-gray-600" />,
    title: "Pembersihan Makam Keluarga",
    subtitle: "Mang Ica",
    amount: "20 September 2025",
    date: "-",
  },
];

function App() {
  const [stateNavigation, setStateNavigation] = React.useState("home");
  const dataKasAnnaibah = hitungSaldo(kasAnnaibahData);
  const dataKasKencleng = hitungSaldo(kasKenclengData);
  const dataKasLainnya = hitungSaldo(kasLainnyaData);
  const [selectedMonth, setSelectedMonth] = React.useState(
    new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = React.useState(
    new Date().getFullYear()
  );
  const [searchDesc, setSearchDesc] = React.useState("");

  // Helper: search by description
  function searchByDesc<T extends { desc?: string }>(
    data: T[],
    query: string
  ): T[] {
    if (!query) return data;
    return data.filter(
      (item) =>
        item.desc && item.desc.toLowerCase().includes(query.toLowerCase())
    );
  }
  const categories = [
    {
      id: "kas_annaibah",
      name: "Kas An-Naibah",
      value: (() => {
        const filtered = dataKasAnnaibah.filter(
          (item) =>
            new Date(item.date).getMonth() === selectedMonth &&
            new Date(item.date).getFullYear() === selectedYear
        );
        return filtered.length
          ? filtered[filtered.length - 1].saldo.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })
          : "Rp 0,00";
      })(),
      color: "#ec4899",
    }, // pink
    {
      id: "kencleng_annaibah",
      name: "Kas Kencleng",
      value: (() => {
        const filtered = dataKasKencleng.filter(
          (item) =>
            new Date(item.date).getMonth() === selectedMonth &&
            new Date(item.date).getFullYear() === selectedYear
        );
        return filtered.length
          ? filtered[filtered.length - 1].saldo.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })
          : "Rp 0,00";
      })(),
      color: "#3b82f6",
    }, // blue
    {
      id: "wakaf_annaibah",
      name: "Lainnya",
      value: (() => {
        const filtered = dataKasLainnya.filter(
          (item) =>
            new Date(item.date).getMonth() === selectedMonth &&
            new Date(item.date).getFullYear() === selectedYear
        );
        return filtered.length
          ? filtered[filtered.length - 1].saldo.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })
          : "Rp 0,00";
      })(),
      color: "#6b7280",
    }, // gray
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-50">
        {/* konten utama */}
        <div className="mx-auto w-full max-w-md flex-1 bg-gradient-to-b from-red-400 via-red-50 to-white shadow-md pb-20">
          {/* Filter by month and year */}
          <div
            className="fixed top-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-md text-xs  mx-auto px-4 py-1 bg-white shadow-md border-b border-pink-200 space-y-1"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <div className="flex items-center justify-center gap-2">
              <label
                htmlFor="month"
                className="text-xs text-gray-600 font-medium"
              >
                Bulan
              </label>
              <select
                id="month"
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 text-gray-700 backdrop-blur-md bg-opacity-70"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
              >
                {Array.from({
                  length:
                    selectedYear === new Date().getFullYear()
                      ? new Date().getMonth() + 1
                      : 12,
                }).map((_, i) => (
                  <option key={i} value={i}>
                    {new Date(0, i).toLocaleString("id-ID", { month: "long" })}
                  </option>
                ))}
              </select>
              <label
                htmlFor="year"
                className="text-xs text-gray-600 font-medium"
              >
                Tahun
              </label>
              <select
                id="year"
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 text-gray-700 backdrop-blur-md bg-opacity-70"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
              >
                {Array.from({ length: 5 }).map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex justify-center w-full">
              <input
                type="search"
                placeholder="Cari nama saya..."
                className="w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 text-gray-700 backdrop-blur-md bg-opacity-70"
                value={searchDesc}
                onChange={(e) => setSearchDesc(e.target.value)}
                style={{ minWidth: 120 }}
              />
            </div>
            {/* Search by description */}
          </div>
          <div className="pt-16">
            {stateNavigation === "home" && (
              <>
                <section className="mx-2 pt-2">
                  <IncomeCard
                    title="Roudloh Merah Putih AN-NAIBAH"
                    date={new Date(selectedYear, selectedMonth).toLocaleString(
                      "id-ID",
                      {
                        month: "long",
                        year: "numeric",
                      }
                    )}
                    total={(
                      dataKasAnnaibah
                        .filter(
                          (item) =>
                            new Date(item.date).getMonth() === selectedMonth &&
                            new Date(item.date).getFullYear() === selectedYear
                        )
                        .reduce((acc, item) => acc + item.in, 0) +
                      dataKasKencleng
                        .filter(
                          (item) =>
                            new Date(item.date).getMonth() === selectedMonth &&
                            new Date(item.date).getFullYear() === selectedYear
                        )
                        .reduce((acc, item) => acc + item.in, 0) +
                      dataKasLainnya
                        .filter(
                          (item) =>
                            new Date(item.date).getMonth() === selectedMonth &&
                            new Date(item.date).getFullYear() === selectedYear
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
                            new Date(item.date).getMonth() === selectedMonth &&
                            new Date(item.date).getFullYear() === selectedYear
                        )
                        .reduce((acc, item) => acc + item.out, 0) +
                      dataKasKencleng
                        .filter(
                          (item) =>
                            new Date(item.date).getMonth() === selectedMonth &&
                            new Date(item.date).getFullYear() === selectedYear
                        )
                        .reduce((acc, item) => acc + item.out, 0) +
                      dataKasLainnya
                        .filter(
                          (item) =>
                            new Date(item.date).getMonth() === selectedMonth &&
                            new Date(item.date).getFullYear() === selectedYear
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
                    title="Kegiatan"
                    period="2025"
                    items={activityItems}
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
                    date={new Date(selectedYear, selectedMonth).toLocaleString(
                      "id-ID",
                      {
                        month: "long",
                        year: "numeric",
                      }
                    )}
                    total={dataKasAnnaibah
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
                      )
                      .reduce((acc, item) => acc + item.in, 0)
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    totalExpense={dataKasAnnaibah
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
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
                    items={searchByDesc(
                      dataKasAnnaibah.filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
                      ),
                      searchDesc
                    )}
                  />
                </section>
              </>
            )}

            {stateNavigation === "kencleng_annaibah" && (
              <>
                <section className="mx-2 pt-2">
                  <IncomeCard
                    title="Laporan Kas Kencleng"
                    date={new Date(selectedYear, selectedMonth).toLocaleString(
                      "id-ID",
                      {
                        month: "long",
                        year: "numeric",
                      }
                    )}
                    total={dataKasKencleng
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
                      )
                      .reduce((acc, item) => acc + item.in, 0)
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    totalExpense={dataKasKencleng
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
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
                    items={searchByDesc(
                      dataKasKencleng.filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
                      ),
                      searchDesc
                    )}
                  />
                </section>
              </>
            )}

            {stateNavigation === "wakaf_annaibah" && (
              <>
                <section className="mx-2 pt-2">
                  <IncomeCard
                    title="Laporan Kas Lainnya"
                    date={new Date(selectedYear, selectedMonth).toLocaleString(
                      "id-ID",
                      {
                        month: "long",
                        year: "numeric",
                      }
                    )}
                    total={dataKasLainnya
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
                      )
                      .reduce((acc, item) => acc + item.in, 0)
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    totalExpense={dataKasLainnya
                      .filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
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
                    items={searchByDesc(
                      dataKasLainnya.filter(
                        (item) =>
                          new Date(item.date).getMonth() === selectedMonth &&
                          new Date(item.date).getFullYear() === selectedYear
                      ),
                      searchDesc
                    )}
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
