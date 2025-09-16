// src/components/IncomeCard.tsx
import React from "react";

interface Category {
  name: string;
  value: string;
  color: string;
}

interface IncomeCardProps {
  title: string;
  date: string;
  total: string;
  categories: Category[];
}

const IncomeCard: React.FC<IncomeCardProps> = ({
  title,
  date,
  total,
  categories,
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-600">{title}</h2>
        <span className="text-xs text-gray-500">{date}</span>
      </div>

      {/* Total Income */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-md text-gray-500">Total Pendapatan</p>
          <h1 className="text-3xl font-semibold text-gray-900">{total}</h1>
        </div>

        {/* Mini Chart Placeholder */}
        {/* <div className="grid grid-cols-4 gap-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-2 rounded bg-gradient-to-t from-pink-400 to-purple-400`}
              style={{ height: `${((i % 4) + 2) * 6}px` }}
            />
          ))}
        </div> */}
      </div>

      {/* Categories */}
      <div className="mt-6 grid grid-cols-3 gap-2">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="border-l-4 pl-2"
            style={{ borderColor: cat.color }}
          >
            <p className="text-xs text-gray-500">{cat.name}</p>
            <p className={`text-sm font-semibold`}>{cat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeCard;
