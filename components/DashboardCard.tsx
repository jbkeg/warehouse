"use client";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function DashboardCard({
  title,
  value,
  icon,
  color,
  trend,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <i
                className={`${
                  trend.isPositive
                    ? "ri-arrow-up-line text-green-500"
                    : "ri-arrow-down-line text-red-500"
                } w-4 h-4 flex items-center justify-center mr-1`}
              ></i>
              <span
                className={`text-sm font-medium ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {Math.abs(trend.value)}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div
          className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}
        >
          <i
            className={`${icon} text-white w-6 h-6 flex items-center justify-center`}
          ></i>
        </div>
      </div>
    </div>
  );
}
