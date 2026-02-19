"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ContactFormProps {
  variant?: "contact" | "consultation";
}

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green/5 border border-green/20 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-green" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-500">
          {variant === "consultation"
            ? "We've received your consultation request. Our team will reach out within 24 hours."
            : "Your message has been sent. We'll get back to you shortly."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none text-sm transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none text-sm transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none text-sm transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        {variant === "consultation" ? (
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
              Service Required
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none text-sm transition-colors bg-white"
            >
              <option value="">Select a service</option>
              <option value="gst">GST Registration / Filing</option>
              <option value="company">Company / LLP Registration</option>
              <option value="itr">Income Tax Filing</option>
              <option value="accounting">Accounting & Bookkeeping</option>
              <option value="compliance">Compliance Services</option>
              <option value="audit">Audit Services</option>
              <option value="payroll">Payroll Services</option>
              <option value="advisory">Tax Advisory</option>
              <option value="other">Other</option>
            </select>
          </div>
        ) : (
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none text-sm transition-colors"
              placeholder="What is this about?"
            />
          </div>
        )}
      </div>
      {variant === "consultation" && (
        <div>
          <label htmlFor="entity" className="block text-sm font-medium text-gray-700 mb-1.5">
            Entity Type
          </label>
          <select
            id="entity"
            name="entity"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none text-sm transition-colors bg-white"
          >
            <option value="">Select entity type</option>
            <option value="individual">Individual</option>
            <option value="proprietorship">Proprietorship</option>
            <option value="partnership">Partnership Firm</option>
            <option value="llp">LLP</option>
            <option value="pvt-ltd">Private Limited Company</option>
            <option value="public-ltd">Public Limited Company</option>
            <option value="trust">Trust / Society / NGO</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          {variant === "consultation" ? "Tell us about your requirements" : "Message"} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none text-sm transition-colors resize-none"
          placeholder={
            variant === "consultation"
              ? "Describe your business needs and any specific questions..."
              : "How can we help you?"
          }
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-saffron hover:bg-saffron/90 text-white px-8 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        {variant === "consultation" ? "Request Consultation" : "Send Message"}
      </button>
    </form>
  );
}
