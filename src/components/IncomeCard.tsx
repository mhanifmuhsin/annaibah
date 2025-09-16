import React from "react";
import banner from "../assets/ban.webp"; // Adjust the path if needed

interface Category {
  name: string;
  value: string;
  color: string;
}

interface IncomeCardProps {
  title: string;
  date: string;
  total: string;
  totalExpense?: string;
  categories: Category[];
}

const IncomeCard: React.FC<IncomeCardProps> = ({
  title,
  date,
  total,
  totalExpense,
  categories,
}) => {
  return (
    <div className="rounded-2xl bg-white bg-opacity-30 backdrop-blur-md p-6 shadow-lg w-full max-w-md border border-white border-opacity-40">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-40 object-cover object-[75%_25%] rounded-xl mb-4"
      />

      {/* Header */}
      <div className="flex flex-col [@media(min-width:400px)]:flex-row items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-600">{title}</h2>
        <span className="text-xs text-gray-500">{date}</span>
      </div>

      {/* Total Income & Expense */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm [@media(min-width:400px)]:text-md text-gray-500">
            Total Pendapatan
          </p>
          <h1 className="text-sm [@media(min-width:400px)]:text-xl font-semibold text-green-800">
            {total}
          </h1>
        </div>
        {totalExpense && (
          <div className="text-right">
            <p className="text-sm [@media(min-width:400px)]:text-md text-gray-500">
              Total Pengeluaran
            </p>
            <h1 className="text-sm [@media(min-width:400px)]:text-xl font-semibold text-red-600">
              {totalExpense}
            </h1>
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="mt-3 grid grid-cols-1 [@media(min-width:400px)]:grid-cols-3 gap-2">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="border-l-4 pl-2 flex justify-between [@media(min-width:400px)]:flex-col"
            style={{ borderColor: cat.color }}
          >
            <p className="text-xs text-gray-500">{cat.name}</p>
            <p className={`text-xs font-semibold`}>{cat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeCard;
