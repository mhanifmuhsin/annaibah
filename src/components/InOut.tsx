// src/components/InOut.tsx
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

interface SpendItem {
  date: string;
  in: number;
  out: number;
  desc: string;
  saldo: number;
}

interface InOutProps {
  title: string;
  period: string;
  items: SpendItem[];
}

const InOut: React.FC<InOutProps> = ({ title, period, items }) => {
  return (
    <div className="w-full  rounded-2xl bg-white p-6 shadow-md ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-600">{title}</h2>
        <span className="text-xs text-gray-500">{period}</span>
      </div>

      {/* List */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx}>
            <p className="text-xs font-semibold text-blue-800">{item.date}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  {item.in > 0 && item.out > 0 && (
                    <ArrowDown className="h-4 w-4 text-orange-600" />
                  )}
                  {item.in > 0 && (
                    <ArrowDown className="h-4 w-4 text-green-600" />
                  )}
                  {item.out > 0 && <ArrowUp className="h-4 w-4 text-red-600" />}
                </div>
                <div className="text-xs">
                  {item.in.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs  text-red-500">
                  {item.out.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                {/* <p className="text-xs text-gray-400">{item.date}</p> */}
              </div>
              <div className="text-right">
                <p className="text-xs  text-green-500">
                  {item.saldo.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                {/* <p className="text-xs text-gray-400">{item.date}</p> */}
              </div>
            </div>
            <p className="text-xs italic text-gray-800">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InOut;
