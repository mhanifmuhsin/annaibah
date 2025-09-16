// src/components/WhatsAppButton.tsx
import React from "react";
import waLogo from "../assets/wa.svg";

interface WhatsAppButtonProps {
  phone: string; // nomor WA (pakai format internasional, contoh: 6281234567890)
  message: string; // pesan default
  title?: string; // teks tombol
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone,
  message,
  title = "Berikan Masukan",
}) => {
  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="flex item-center text-sm rounded-lg bg-green-600 px-4 py-2 text-white font-medium shadow hover:bg-green-700 transition"
    >
      <img
        src={waLogo}
        alt="WhatsApp Icon"
        className="inline-block w-5 h-5 mr-1"
      />
      {title}
    </button>
  );
};

export default WhatsAppButton;
