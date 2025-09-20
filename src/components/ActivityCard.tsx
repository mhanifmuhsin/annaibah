// src/components/ActivityCard.tsx
import React from "react";

interface SpendItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  amount: number;
  date: string;
}

interface ActivityCardProps {
  title: string;
  period: string;
  items: SpendItem[];
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  period,
  items,
}) => {
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
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-red-500">
                {" "}
                {new Date(item.date).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-400">
                {" "}
                {item.amount.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;
