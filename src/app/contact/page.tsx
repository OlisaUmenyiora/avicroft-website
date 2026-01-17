'use client';

import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--brand)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
            Have questions about our products? Want to learn more? We are here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                Send us a message
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[var(--brand-light)] text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--brand)] flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Message sent!
                  </h3>
                  <p className="text-[var(--label-secondary)]">
                    Thank you for reaching out. We will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-black placeholder:text-[var(--label-tertiary)] focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-black placeholder:text-[var(--label-tertiary)] focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Company (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-black placeholder:text-[var(--label-tertiary)] focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="product"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Product of Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-black focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20"
                      >
                        <option value="">Select a product</option>
                        <option value="salon">Avicroft Salon</option>
                        <option value="education">Avicroft Education</option>
                        <option value="ecommerce">Avicroft E-commerce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-black placeholder:text-[var(--label-tertiary)] focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-8 py-4 text-base font-bold text-black hover:bg-[var(--brand-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold text-black mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <a
                      href="mailto:hello@avicroft.com"
                      className="text-[var(--label-secondary)] hover:text-[var(--brand)] transition-colors"
                    >
                      hello@avicroft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <a
                      href="tel:+2341234567890"
                      className="text-[var(--label-secondary)] hover:text-[var(--brand)] transition-colors"
                    >
                      +234 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Location</h3>
                    <p className="text-[var(--label-secondary)]">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="mt-12 p-6 rounded-2xl bg-[var(--muted)]">
                <h3 className="font-semibold text-black mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-sm text-[var(--label-secondary)] mb-4">
                  Have questions? Check out our FAQ section for quick answers.
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-black hover:text-[var(--brand)] transition-colors"
                >
                  View FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
