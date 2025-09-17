"use client";
import {
  HandCoinsIcon,
  HomeIcon,
  PackageIcon,
  TowerControlIcon,
} from "lucide-react";

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

export default function BottomNavigation({
  state,
  setState,
}: {
  state: string;
  setState: (state: string) => void;
}) {
  const getClass = (value: string) =>
    `flex flex-col items-center rounded-md px-2 py-1 text-xs transition-all ${
      state === value ? "bg-red-600 text-white" : "text-gray-500"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-center">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md shadow-md rounded-t-xl">
        <div className="mx-auto flex w-full max-w-md justify-around border-t py-2">
          {LANDING_NAV.map(({ value, label, icon: Icon }) => (
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
  );
}
