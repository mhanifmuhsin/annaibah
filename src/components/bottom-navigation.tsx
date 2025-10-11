"use client";
import {
  HandCoinsIcon,
  HomeIcon,
  PackageIcon,
  PackageOpenIcon,
  TowerControlIcon,
} from "lucide-react";
import React from "react";

const LANDING_NAV = [
  { value: "home", label: "Beranda", icon: HomeIcon },
  { value: "kas_annaibah", label: "An-Naibah", icon: TowerControlIcon },
  { value: "kencleng_annaibah", label: "Kencleng", icon: HandCoinsIcon },
  {
    value: "wakaf_annaibah",
    label: "Lainnya",
    icon: PackageIcon,
  },
];

const ACTION_BUTTONS = [
  { label: "At-Taqwa", value: "at_taqwa" },
  { label: "Ibu Rella", value: "ibu_rella" },
  { label: "USAMA", value: "usama" },
  { label: "Wakaf", value: "wakaf" },
  // { label: "Lainnya", value: "wakaf_annaibah" },
];

export default function BottomNavigation({
  state,
  setState,
}: {
  state: string;
  setState: (state: string) => void;
}) {
  const [showFab, setShowFab] = React.useState(false);

  const getClass = (value: string) =>
    `flex flex-col items-center rounded-md px-2 py-1 text-xs transition-all ${
      state === value ? "bg-red-600 text-white" : "text-gray-500"
    }`;

  const handleLainnyaClick = () => {
    // setState("wakaf_annaibah");
    console.log("masuk sini");
    setShowFab(!showFab);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-center">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-md shadow-md ">
          <div className="mx-auto flex w-full max-w-md justify-around border-t py-2 relative">
            {LANDING_NAV.slice(0, 2).map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                className={getClass(value)}
                onClick={() => setState(value)}
              >
                <Icon />
                <span>{label}</span>
              </button>
            ))}

            {/* Floating button between An-Naibah and Kencleng */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
              <button
                className="bg-red-600 text-white rounded-full p-3 shadow-lg hover:bg-orange-500 transition-colors"
                onClick={() => {
                  handleLainnyaClick();
                }}
              >
                <PackageOpenIcon size={20} />
              </button>
            </div>

            {LANDING_NAV.slice(2).map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                className={getClass(value)}
                onClick={() => setState(value)}
              >
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating Action Button */}
      {showFab && (
        <div className="fixed bottom-[95px] left-4 z-50 flex gap-2">
          {ACTION_BUTTONS.map(({ label, value }) => (
            <button
              className="bg-blue-600 text-[10px] text-white rounded-full p-2 shadow-lg hover:bg-orange-500 transition-colors"
              onClick={() => {
                // Add your action here
                setState(value);
              }}
            >
              {/* <PlusIcon size={24} /> */}
              {label}
            </button>
          ))}
          <button
            className="bg-green-600 text-[10px] text-white rounded-full p-2 shadow-lg hover:bg-orange-500 transition-colors"
            onClick={() => {
              // Add your action here

              const url = `https://wa.me/6281916511138?text=${encodeURIComponent(
                "Halo, saya ingin memberikan masukan."
              )}`;
              window.open(url, "_blank");
            }}
          >
            {/* <PlusIcon size={24} /> */}
            Masukan
          </button>
          <button
            className="bg-red-600 text-[10px] text-white rounded-full p-2 shadow-lg hover:bg-orange-500 transition-colors"
            onClick={() => {
              // Add your action here
              setShowFab(false);
            }}
          >
            {/* <PlusIcon size={24} /> */}
            Tutup
          </button>
        </div>
      )}
    </>
  );
}
