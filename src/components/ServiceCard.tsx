"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { fadeInUp } from "@/lib/animations";

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
    <motion.div
      className="bg-white rounded-xl border border-gray-200 p-6 group relative overflow-hidden cursor-default"
      variants={fadeInUp}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(27, 58, 92, 0.12)",
        borderColor: "rgba(232, 119, 34, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <motion.div
          className="w-12 h-12 rounded-lg bg-navy/5 group-hover:bg-saffron/10 flex items-center justify-center mb-4 transition-colors"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-6 h-6 text-navy group-hover:text-saffron transition-colors" />
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {description}
        </p>
        <p className="text-xs font-medium text-saffron">
          {serviceCount} services available
        </p>
      </div>
    </motion.div>
  );
}
