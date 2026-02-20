"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  ClipboardCheck,
  Briefcase,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ClipboardCheck,
  Briefcase,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(232,119,34,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.4) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-saffron text-sm font-semibold uppercase tracking-wide mb-2">Our Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Complete CA Services Under One Roof</h1>
          <p className="text-gray-300 text-lg max-w-2xl">From business registrations and return filing to audit, advisory, and compliance — we deliver end-to-end Chartered Accountancy solutions tailored to your needs.</p>
        </motion.div>
      </section>

      {/* Service Categories */}
      {SERVICE_CATEGORIES.map((category, index) => {
        const Icon = iconMap[category.icon] || Briefcase;
        const isEven = index % 2 === 0;

        return (
          <section key={category.title} className={`py-16 sm:py-20 ${isEven ? "bg-white" : "bg-gray-50"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div className="flex items-start gap-4 mb-10" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <motion.div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center shrink-0" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Icon className="w-7 h-7 text-navy" />
                </motion.div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{category.title}</h2>
                  <p className="text-gray-500 max-w-2xl">{category.description}</p>
                </div>
              </motion.div>

              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
                {category.services.map((service) => (
                  <motion.div key={service.title} className="bg-white rounded-lg border border-gray-200 p-5 group relative overflow-hidden cursor-default" variants={fadeInUp} whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(27,58,92,0.08)", borderColor: "rgba(232,119,34,0.25)" }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-start gap-3 relative z-10">
                      <CheckCircle className="w-5 h-5 text-green shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1.5 group-hover:text-navy transition-colors">{service.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(232,119,34,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.5) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
        <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold text-white mb-4">Need a Service Not Listed Here?</h2>
          <p className="text-gray-300 text-lg mb-8">We offer customized solutions for unique business requirements. Reach out and let us know how we can help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors">
              Request a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 glass hover:bg-white/15 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors">Contact Us</Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
