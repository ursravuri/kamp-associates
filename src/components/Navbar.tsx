"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/kamp-logo.svg"
              alt="KAMP & Associates Logo"
              width={400}
              height={400}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-navy/15 bg-white"
              priority
              unoptimized
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-navy leading-tight">
                {COMPANY.name}
              </p>
              <p className="text-xs text-gray-500">{COMPANY.tagline}</p>
            </div>
            <div className="sm:hidden">
              <p className="text-sm font-bold text-navy">KAMP & Associates</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-saffron bg-saffron/5"
                    : "text-gray-700 hover:text-navy hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-navy"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone[0]}
            </a>
            <Link
              href="/consultation"
              className="bg-saffron hover:bg-saffron/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? "text-saffron bg-saffron/5"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2">
              <a
                href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-600"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone[0]}
              </a>
              <Link
                href="/consultation"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 text-center bg-saffron text-white px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
