// src/components/StatCard.tsx
import React from "react";

interface StatCardProps {
  value: string | number;
  label: string;
  change?: string;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  change,
  description,
}) => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-600">{label}</p>
      {change && (
        <p className="text-xs text-green-600 font-medium mt-1">{change}</p>
      )}
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
};

export default StatCard;
