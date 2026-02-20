"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Award,
  Layers,
  Clock,
  Users,
  Shield,
  Laptop,
  type LucideIcon,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedBackground from "@/components/AnimatedBackground";
import Marquee from "@/components/Marquee";
import { COMPANY, SERVICE_CATEGORIES, WHY_CHOOSE_US } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Layers,
  Clock,
  Users,
  Shield,
  Laptop,
};

const marqueeServices = [
  "GST Registration",
  "Income Tax Filing",
  "Company Registration",
  "LLP Registration",
  "TDS Filing",
  "Accounting Services",
  "Payroll Services",
  "Internal Audit",
  "Tax Advisory",
  "Compliance Services",
  "Trademark Registration",
  "Digital Signature",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="max-w-3xl">
              <motion.div
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-gray-300">
                  Trusted CA Firm Across India
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                Your Partner for{" "}
                <span className="text-saffron">Financial Clarity</span> &{" "}
                <span className="text-green-light">Compliance</span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                KAMP & Associates delivers expert Chartered Accountancy services
                — from GST registration and tax filing to audit, compliance, and
                strategic business advisory. Accurate. Timely. Reliable.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 glass hover:bg-white/15 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </motion.div>
            </div>
            {/* Hero Logo */}
            <motion.div
              className="hidden lg:flex shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/kamp-logo.png"
                  alt="KAMP & Associates — Chartered Accountants"
                  width={846}
                  height={846}
                  className="w-56 h-56 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  priority
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {[
              { value: "33+", label: "Services Offered" },
              { value: "5+", label: "Clients Served" },
              { value: "100%", label: "Compliance Rate" },
              { value: "1+", label: "Years Experience" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <p className="text-3xl font-bold text-navy">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Marquee */}
      <Marquee items={marqueeServices} speed={30} />

      {/* Services Overview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive CA Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From business registration to ongoing compliance, we cover every
              aspect of your financial and regulatory needs.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <ServiceCard
                key={cat.title}
                title={cat.title}
                description={cat.description}
                icon={cat.icon}
                serviceCount={cat.services.length}
              />
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-saffron hover:text-saffron-light font-semibold transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">
              Why KAMP & Associates
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We combine deep CA expertise with a client-first approach to
              deliver results that matter.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <motion.div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl transition-colors group cursor-default"
                  variants={fadeInUp}
                  whileHover={{
                    y: -4,
                    backgroundColor: "rgba(248, 250, 252, 1)",
                  }}
                >
                  <motion.div
                    className="w-11 h-11 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5 text-saffron" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(232, 119, 34, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232, 119, 34, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need help with registrations, tax filings, or strategic
            financial planning — our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 glass hover:bg-white/15 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
