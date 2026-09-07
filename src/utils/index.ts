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

export function getLatestDateString(
  datasets: Array<Array<{ date: string }>>,
): string | null {
  let latest: { raw: string; time: number } | null = null;

  for (const data of datasets) {
    for (const item of data) {
      const time = new Date(item.date).getTime();
      if (Number.isNaN(time)) continue;
      if (!latest || time > latest.time) {
        latest = { raw: item.date, time };
      }
    }
  }

  return latest?.raw ?? null;
}

export function formatLastUpdated(dateStr: string | null): string {
  if (!dateStr) return "-";

  const hasTime = /T\d{2}:\d{2}| \d{2}:\d{2}/.test(dateStr);
  const date = hasTime
    ? new Date(dateStr)
    : (() => {
        const [year, month, day] = dateStr.split("-").map(Number);
        return new Date(year, (month || 1) - 1, day || 1);
      })();

  if (Number.isNaN(date.getTime())) return "-";

  return date.toLocaleString(
    "id-ID",
    hasTime
      ? {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }
      : {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        },
  );
}
