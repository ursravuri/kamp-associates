"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 25 }: MarqueeProps) {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden bg-navy/[0.03] py-4 border-y border-gray-100">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-saffron/50" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
