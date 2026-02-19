import Link from "next/link";
import Image from "next/image";
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
import { COMPANY, SERVICE_CATEGORIES, WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Layers,
  Clock,
  Users,
  Shield,
  Laptop,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,119,34,0.15),_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-green rounded-full" />
              <span className="text-sm text-gray-300">
                Trusted CA Firm Across India
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Partner for{" "}
              <span className="text-saffron">Financial Clarity</span> &{" "}
              <span className="text-green-light">Compliance</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              KAMP & Associates delivers expert Chartered Accountancy services —
              from GST registration and tax filing to audit, compliance, and
              strategic business advisory. Accurate. Timely. Reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
          {/* Hero Logo */}
          <div className="hidden lg:flex shrink-0">
            <Image
              src="/kamp-logo.png"
              alt="KAMP & Associates — Chartered Accountants"
              width={846}
              height={846}
              className="w-56 h-56 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              priority
              unoptimized
            />
          </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "33+", label: "Services Offered" },
              { value: "5+", label: "Clients Served" },
              { value: "100%", label: "Compliance Rate" },
              { value: "1+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((cat) => (
              <ServiceCard
                key={cat.title}
                title={cat.title}
                description={cat.description}
                icon={cat.icon}
                serviceCount={cat.services.length}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-saffron hover:text-saffron-light font-semibold transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
