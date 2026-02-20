"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export default function TeamCard({ name, title, bio, initials }: TeamCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 p-6 text-center relative overflow-hidden group cursor-default"
      variants={fadeInUp}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 32px rgba(27, 58, 92, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <motion.div
          className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <span className="text-xl font-bold text-navy">{initials}</span>
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-saffron font-medium mb-3">{title}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}
