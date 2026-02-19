import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KAMP & Associates — a trusted Chartered Accountancy firm committed to delivering accuracy, compliance, and financial clarity to businesses across India.",
};

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description:
      "Every number matters. We deliver meticulous, error-free work across all our engagements.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards, ensuring transparency and honesty in all our dealings.",
  },
  {
    icon: Heart,
    title: "Client Commitment",
    description:
      "Your success is our priority. We build lasting partnerships through personalized, attentive service.",
  },
  {
    icon: Eye,
    title: "Compliance First",
    description:
      "We keep you ahead of regulations, ensuring timely filings and full statutory compliance at all times.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-saffron text-sm font-semibold uppercase tracking-wide mb-2">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted Chartered Accountancy, Built on Expertise
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            KAMP & Associates is a professionally managed CA firm dedicated to
            helping businesses and individuals navigate the complexities of
            taxation, compliance, and financial management.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                From Passion to Practice
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  KAMP & Associates was founded with a clear mission — to make
                  professional Chartered Accountancy services accessible,
                  reliable, and client-friendly. What started as a small
                  practice has grown into a comprehensive CA firm serving
                  hundreds of clients across India.
                </p>
                <p>
                  We understand that financial compliance can be overwhelming
                  for businesses of all sizes. That is why we built our practice
                  around simplifying the complex — whether it is GST
                  registration, income tax filing, company incorporation, or
                  strategic tax advisory.
                </p>
                <p>
                  Our team of qualified Chartered Accountants and dedicated
                  professionals brings together deep domain knowledge with a
                  technology-forward approach, ensuring that our clients receive
                  timely, accurate, and cost-effective solutions.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                KAMP at a Glance
              </h3>
              <div className="space-y-5">
                {[
                  { label: "Services Offered", value: "33+" },
                  { label: "Happy Clients", value: "5+" },
                  { label: "Years of Experience", value: "1+" },
                  { label: "Compliance Rate", value: "100%" },
                  { label: "Pan-India Service", value: "Remote & On-site" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    <span className="font-bold text-navy">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-saffron/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver accurate, timely, and compliant Chartered Accountancy
                services that empower businesses and individuals to make
                confident financial decisions. We aim to be the most trusted CA
                partner for our clients — one who simplifies complexity and adds
                real value.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a leading Chartered Accountancy firm in
                India — known for our integrity, expertise, and commitment to
                helping businesses thrive through sound financial management and
                proactive compliance guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-saffron uppercase tracking-wide mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let Us Handle Your Finances
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Partner with KAMP & Associates for reliable, expert Chartered
            Accountancy services.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
