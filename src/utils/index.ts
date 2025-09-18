export function hitungSaldo(
  transaksi: Array<{
    date: string;
    desc: string;
    in?: number;
    out?: number;
    saldo?: number;
  }>,
  startDate?: string,
  endDate?: string
): Array<{
  date: string;
  desc: string;
  in: number;
  out: number;
  saldo: number;
}> {
  let saldo = 0;

  // convert ke Date untuk filtering
  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;

  return transaksi
    .filter((item) => {
      const tgl = new Date(item.date);
      if (start && tgl < start) return false;
      if (end && tgl > end) return false;
      return true;
    })
    .map((item) => {
      const masuk = item.in || 0;
      const keluar = item.out || 0;

      saldo += masuk - keluar;

      return {
        date: item.date,
        desc: item.desc,
        in: masuk,
        out: keluar,
        saldo,
      };
    });
}
