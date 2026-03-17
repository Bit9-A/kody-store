import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  badge: ReactNode;
  children?: ReactNode;
}

export default function MetricCard({
  title,
  value,
  badge,
  children,
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        </div>
        {badge}
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
