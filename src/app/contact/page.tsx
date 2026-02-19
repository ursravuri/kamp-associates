import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KAMP & Associates Chartered Accountants. Reach us by phone, email, or through our contact form for any CA service inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-saffron text-sm font-semibold uppercase tracking-wide mb-2">
            Contact Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            We Are Here to Help
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Have a question about our services? Need help with a filing or
            registration? Reach out to us — our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`}
                      className="block text-sm text-gray-500 hover:text-navy transition-colors"
                    >
                      {COMPANY.phone[0]}
                    </a>
                    <a
                      href={`tel:${COMPANY.phone[1].replace(/\s/g, "")}`}
                      className="block text-sm text-gray-500 hover:text-navy transition-colors"
                    >
                      {COMPANY.phone[1]}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-sm text-gray-500 hover:text-navy transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      Office
                    </p>
                    <p className="text-sm text-gray-500">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      Business Hours
                    </p>
                    <p className="text-sm text-gray-500">
                      Monday – Saturday: 10:00 AM – 7:00 PM
                    </p>
                    <p className="text-sm text-gray-500">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      Instagram
                    </p>
                    <a
                      href={COMPANY.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-navy transition-colors"
                    >
                      @kamp__ca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <ContactForm variant="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
