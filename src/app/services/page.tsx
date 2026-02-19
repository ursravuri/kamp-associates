import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  ClipboardCheck,
  Briefcase,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive Chartered Accountancy services — GST registration, income tax filing, company registration, compliance, audit, payroll, and more.",
};

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ClipboardCheck,
  Briefcase,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-saffron text-sm font-semibold uppercase tracking-wide mb-2">
            Our Services
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Complete CA Services Under One Roof
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            From business registrations and return filing to audit, advisory,
            and compliance — we deliver end-to-end Chartered Accountancy
            solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {SERVICE_CATEGORIES.map((category, index) => {
        const Icon = iconMap[category.icon] || Briefcase;
        const isEven = index % 2 === 0;

        return (
          <section
            key={category.title}
            className={`py-16 sm:py-20 ${isEven ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-10">
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-500 max-w-2xl">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-saffron/20 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1.5 group-hover:text-navy transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Service Not Listed Here?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            We offer customized solutions for unique business requirements.
            Reach out and let us know how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
