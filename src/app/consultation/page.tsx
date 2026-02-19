import type { Metadata } from "next";
import { CheckCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Schedule a free consultation with KAMP & Associates Chartered Accountants. Get expert advice on GST, income tax, company registration, compliance, and more.",
};

const benefits = [
  "Understand the right registrations for your business",
  "Get clarity on your tax obligations and filing schedule",
  "Receive expert advice on compliance requirements",
  "Discuss your accounting and bookkeeping needs",
  "Explore options for tax planning and optimization",
  "No obligation — completely free initial consultation",
];

export default function ConsultationPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-saffron text-sm font-semibold uppercase tracking-wide mb-2">
            Free Consultation
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let Us Understand Your Needs
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Book a free consultation with our Chartered Accountants. We will
            discuss your requirements and recommend the best solutions for your
            business.
          </p>
        </div>
      </section>

      {/* Consultation Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                What You Will Get
              </h2>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Prefer to Talk?
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Call us directly for an immediate discussion with our team.
                </p>
                <div className="space-y-2">
                  <a
                    href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm font-medium text-navy hover:text-saffron transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {COMPANY.phone[0]}
                  </a>
                  <a
                    href={`tel:${COMPANY.phone[1].replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm font-medium text-navy hover:text-saffron transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {COMPANY.phone[1]}
                  </a>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Request Your Free Consultation
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Fill out the form below and our team will reach out within 24
                hours to schedule your consultation.
              </p>
              <ContactForm variant="consultation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
