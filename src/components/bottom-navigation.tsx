"use client";
import {
  HandCoinsIcon,
  HomeIcon,
  PackageIcon,
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
  { label: "Wakaf", value: "wakaf" },
  { label: "USAMA", value: "usama" },
  { label: "Ibu Rella", value: "ibu_rella" },
  { label: "Lainnya", value: "wakaf_annaibah" },
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
          <div className="mx-auto flex w-full max-w-md justify-around border-t py-2">
            {LANDING_NAV.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                className={getClass(value)}
                onClick={() =>
                  value === "wakaf_annaibah"
                    ? handleLainnyaClick()
                    : setState(value)
                }
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
        <div className="fixed bottom-20 right-4 z-50 flex flex-col space-y-4">
          {ACTION_BUTTONS.map(({ label, value }) => (
            <button
              className="bg-red-600 text-xs text-white rounded-full p-2 shadow-lg hover:bg-orange-500 transition-colors"
              onClick={() => {
                // Add your action here
                setState(value);
              }}
            >
              {/* <PlusIcon size={24} /> */}
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
