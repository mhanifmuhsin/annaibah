import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export type LaporanItem = {
  date: string;
  desc: string;
  in: number;
  out: number;
  saldo: number;
};

function formatIdr(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, (month || 1) - 1, day || 1);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function fileSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function downloadLaporanPdf({
  title,
  period,
  saldo,
  pendapatan,
  pengeluaran,
  items,
}: {
  title: string;
  period: string;
  saldo: number;
  pendapatan: number;
  pengeluaran: number;
  items: LaporanItem[];
}) {
  const doc = new jsPDF();

  const generatedAt = new Date().toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  doc.setFontSize(16);
  doc.text(title, 14, 18);
  doc.setFontSize(11);
  doc.setTextColor(80);
  doc.text(period, 14, 26);
  doc.setFontSize(9);
  doc.text(`Dibuat: ${generatedAt}`, 14, 32);
  doc.setTextColor(0);
  doc.setFontSize(11);

  doc.text(`Saldo Kas: ${formatIdr(saldo)}`, 14, 44);
  doc.text(`Total pendapatan: ${formatIdr(pendapatan)}`, 14, 52);
  doc.text(`Total pengeluaran: ${formatIdr(pengeluaran)}`, 14, 60);

  autoTable(doc, {
    startY: 68,
    head: [["Tanggal", "Keterangan", "Masuk", "Keluar", "Saldo"]],
    body: items.length
      ? items.map((item) => [
          formatDate(item.date),
          item.desc,
          formatIdr(item.in),
          formatIdr(item.out),
          formatIdr(item.saldo),
        ])
      : [["-", "Tidak ada transaksi pada periode ini", "-", "-", "-"]],
    styles: { fontSize: 8, cellPadding: 2, overflow: "linebreak" },
    headStyles: { fillColor: [153, 27, 27] },
    columnStyles: {
      0: { cellWidth: 32 },
      1: { cellWidth: 62 },
      2: { cellWidth: 28, halign: "right" },
      3: { cellWidth: 28, halign: "right" },
      4: { cellWidth: 28, halign: "right" },
    },
  });

  doc.save(`${fileSlug(title)}-${fileSlug(period)}.pdf`);
}
