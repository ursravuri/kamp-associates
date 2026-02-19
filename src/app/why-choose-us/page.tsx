import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Layers,
  Clock,
  Users,
  Shield,
  Laptop,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why businesses across India trust KAMP & Associates for Chartered Accountancy services — expert CAs, timely compliance, transparent pricing, and a client-first approach.",
};

const iconMap: Record<string, LucideIcon> = {
  Award,
  Layers,
  Clock,
  Users,
  Shield,
  Laptop,
};

const differentiators = [
  "Qualified Chartered Accountants with ICAI membership",
  "Pan-India service delivery — remote and on-site",
  "Dedicated relationship manager for every client",
  "Proactive compliance alerts and deadline tracking",
  "Secure digital document management",
  "Competitive and transparent fee structure",
  "Quick turnaround on registrations and filings",
  "Ongoing support and advisory beyond filing season",
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-saffron text-sm font-semibold uppercase tracking-wide mb-2">
            Why Choose Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The KAMP & Associates Difference
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            We go beyond traditional CA services — combining expertise,
            technology, and a genuine commitment to your financial success.
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-saffron/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-saffron/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-saffron" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">
                What Sets Us Apart
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Than Just Number Crunching
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At KAMP & Associates, we believe that great CA services go
                beyond filing returns and maintaining books. We act as your
                financial partners — helping you plan, grow, and stay compliant
                at every step.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {differentiators.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Promise to You</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Zero Missed Deadlines",
                    desc: "We track every compliance date so you never face penalties.",
                  },
                  {
                    title: "100% Data Security",
                    desc: "Your financial data is handled with the strictest confidentiality.",
                  },
                  {
                    title: "Always Accessible",
                    desc: "Reach us via phone, email, or in person — we are always available when you need us.",
                  },
                  {
                    title: "Continuous Updates",
                    desc: "Stay informed about regulatory changes that affect your business.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/10 rounded-lg p-4"
                  >
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience the KAMP Difference
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join hundreds of satisfied clients who trust us with their financial
            and compliance needs.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
