import { FileText, ClipboardCheck, Briefcase, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ClipboardCheck,
  Briefcase,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  serviceCount: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  serviceCount,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Briefcase;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-saffron/30 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-navy/5 group-hover:bg-saffron/10 flex items-center justify-center mb-4 transition-colors">
        <Icon className="w-6 h-6 text-navy group-hover:text-saffron transition-colors" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">
        {description}
      </p>
      <p className="text-xs font-medium text-saffron">
        {serviceCount} services available
      </p>
    </div>
  );
}
