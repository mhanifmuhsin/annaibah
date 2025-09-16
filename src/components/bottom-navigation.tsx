"use client";
import {
  HandCoinsIcon,
  HomeIcon,
  PackageIcon,
  TowerControlIcon,
} from "lucide-react";

const LANDING_NAV = [
  { href: "/annaibah", label: "Beranda", icon: HomeIcon },
  { href: "/manaqib-annaibah", label: "An-Naibah", icon: TowerControlIcon },
  { href: "/kencleng-annaibah", label: "Kencleng", icon: HandCoinsIcon },
  {
    href: "/wakaf-annaibah",
    label: "Lainnya",
    icon: PackageIcon,
  },
];

export default function BottomNavigation() {
  const pathname = "/";

  const getClass = (href: string) =>
    `flex flex-col items-center rounded-md px-2 py-1 text-xs transition-all ${
      pathname === href ? "bg-primary text-white" : "text-gray-500"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-center">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md shadow-md rounded-t-xl">
        <div className="mx-auto flex w-full max-w-md justify-around border-t py-2">
          {LANDING_NAV.map(({ href, label, icon: Icon }) => (
            <button key={href} className={getClass(href)}>
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
