"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Scale } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

const values = [
  { icon: Target, title: "Accuracy", description: "Every number matters. We deliver meticulous, error-free work across all our engagements." },
  { icon: Scale, title: "Integrity", description: "We uphold the highest ethical standards, ensuring transparency and honesty in all our dealings." },
  { icon: Heart, title: "Client Commitment", description: "Your success is our priority. We build lasting partnerships through personalized, attentive service." },
  { icon: Eye, title: "Compliance First", description: "We keep you ahead of regulations, ensuring timely filings and full statutory compliance at all times." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(232,119,34,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.4) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-saffron text-sm font-semibold uppercase tracking-wide mb-2">About Us</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Trusted Chartered Accountancy, Built on Expertise</h1>
          <p className="text-gray-300 text-lg max-w-2xl">KAMP & Associates is a professionally managed CA firm dedicated to helping businesses and individuals navigate the complexities of taxation, compliance, and financial management.</p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">Our Story</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">From Passion to Practice</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>KAMP & Associates was founded with a clear mission — to make professional Chartered Accountancy services accessible, reliable, and client-friendly. What started as a small practice has grown into a comprehensive CA firm serving hundreds of clients across India.</p>
                <p>We understand that financial compliance can be overwhelming for businesses of all sizes. That is why we built our practice around simplifying the complex — whether it is GST registration, income tax filing, company incorporation, or strategic tax advisory.</p>
                <p>Our team of qualified Chartered Accountants and dedicated professionals brings together deep domain knowledge with a technology-forward approach, ensuring that our clients receive timely, accurate, and cost-effective solutions.</p>
              </div>
            </motion.div>
            <motion.div className="bg-gray-50 rounded-2xl p-8 lg:p-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}>
              <h3 className="text-xl font-bold text-gray-800 mb-6">KAMP at a Glance</h3>
              <motion.div className="space-y-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                {[
                  { label: "Services Offered", value: "33+" },
                  { label: "Happy Clients", value: "5+" },
                  { label: "Years of Experience", value: "1+" },
                  { label: "Compliance Rate", value: "100%" },
                  { label: "Pan-India Service", value: "Remote & On-site" },
                ].map((stat) => (
                  <motion.div key={stat.label} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0" variants={fadeInUp}>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    <span className="font-bold text-navy">
                      {stat.value.match(/\d/) ? <AnimatedCounter value={stat.value} /> : stat.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className="bg-white rounded-xl p-8 border border-gray-200 group cursor-default relative overflow-hidden" variants={fadeInUp} whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(27,58,92,0.1)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div className="w-12 h-12 rounded-lg bg-saffron/10 flex items-center justify-center mb-4" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Target className="w-6 h-6 text-saffron" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">To deliver accurate, timely, and compliant Chartered Accountancy services that empower businesses and individuals to make confident financial decisions. We aim to be the most trusted CA partner for our clients — one who simplifies complexity and adds real value.</p>
              </div>
            </motion.div>
            <motion.div className="bg-white rounded-xl p-8 border border-gray-200 group cursor-default relative overflow-hidden" variants={fadeInUp} whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(27,58,92,0.1)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Eye className="w-6 h-6 text-navy" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">To be recognized as a leading Chartered Accountancy firm in India — known for our integrity, expertise, and commitment to helping businesses thrive through sound financial management and proactive compliance guidance.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Core Values</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
            {values.map((value) => (
              <motion.div key={value.title} className="text-center p-6 rounded-xl cursor-default group" variants={fadeInUp} whileHover={{ y: -6, backgroundColor: "rgba(248,250,252,1)" }}>
                <motion.div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4" whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 200 }}>
                  <value.icon className="w-6 h-6 text-navy" />
                </motion.div>
                <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(232,119,34,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.5) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
        <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold text-white mb-4">Let Us Handle Your Finances</h2>
          <p className="text-gray-300 text-lg mb-8">Partner with KAMP & Associates for reliable, expert Chartered Accountancy services.</p>
          <Link href="/consultation" className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors">
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
