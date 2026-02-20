"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TeamCard from "@/components/TeamCard";
import { TEAM_MEMBERS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(232,119,34,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.4) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-saffron text-sm font-semibold uppercase tracking-wide mb-2">Our Team</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Meet the Experts Behind KAMP</h1>
          <p className="text-gray-300 text-lg max-w-2xl">Our team of qualified Chartered Accountants and dedicated professionals brings the expertise, diligence, and commitment your business deserves.</p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">We are always looking for talented Chartered Accountants and finance professionals to join our growing team. If you are passionate about delivering quality CA services, we would love to hear from you.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(232,119,34,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.5) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
        <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold text-white mb-4">Work with Our Expert Team</h2>
          <p className="text-gray-300 text-lg mb-8">Let our experienced professionals handle your financial and compliance needs with precision and care.</p>
          <Link href="/consultation" className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors">
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
