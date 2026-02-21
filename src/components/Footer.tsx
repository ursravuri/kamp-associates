import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICE_CATEGORIES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/kamp-logo.svg"
                alt="KAMP & Associates Logo"
                width={400}
                height={400}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/15 bg-white"
                unoptimized
              />
              <div>
                <p className="text-white font-bold">{COMPANY.name}</p>
                <p className="text-xs text-gray-400">{COMPANY.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your trusted partner for all Chartered Accountancy needs.
              Delivering accuracy, compliance, and financial clarity to
              businesses and individuals across India.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-saffron" />
                {COMPANY.phone[0]}
              </a>
              <a
                href={`tel:${COMPANY.phone[1].replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-saffron" />
                {COMPANY.phone[1]}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-saffron" />
                {COMPANY.email}
              </a>
              <p className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-saffron shrink-0" />
                {COMPANY.address}
              </p>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-saffron" />
                Follow us on Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/consultation"
                  className="text-sm text-saffron hover:text-saffron-light transition-colors"
                >
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.title}>
                  <Link
                    href="/services"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-saffron hover:text-saffron-light transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-400 mb-4">
              Have questions about our services? Schedule a free consultation
              with our team today.
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-saffron hover:bg-saffron-light text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} {COMPANY.fullName}. All rights
              reserved.
            </p>
            <p>Trusted Chartered Accountancy Services Across India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
