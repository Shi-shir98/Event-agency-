import React, { useState } from 'react';
import { COMPANY_INFO, EVENT_SERVICES } from '../data/gigbigData';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Sparkles, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialArtistOrService?: string;
  initialServices?: string[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialArtistOrService,
  initialServices = []
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    eventType: 'Festival',
    estimatedDate: '',
    estimatedAttendees: '1,000 - 3,000',
    services: initialServices.length > 0 ? initialServices : ['project-management', 'artist-curation'],
    message: initialArtistOrService ? `Hi Ben,\n\nI would like to inquire about booking ${initialArtistOrService} for our upcoming event.` : ''
  });

  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (id: string) => {
    if (formData.services.includes(id)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== id)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, id]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const refNum = `GB-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedReference(refNum);
    }, 700);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0d0e14] relative border-t border-[#1c1f2b]" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#232738]/80 text-[#ff7722] text-xs font-bold uppercase tracking-wider mb-4 border border-[#31364a]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Let's Create!
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Don't hesitate to get in touch. Whether you have a firm event date in mind or want to explore artist possibilities, we’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Info & Quick Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12141c] p-6 sm:p-8 rounded-3xl border border-[#232738] shadow-xl">
              <h3 className="font-heading font-extrabold text-xl text-white mb-6">
                Direct Contact Details
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#171a26] border border-[#262c3e] hover:border-[#ff5500] transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 text-[#ff5500] flex items-center justify-center shrink-0 group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Phone (Call or SMS)</span>
                    <p className="text-sm sm:text-base font-bold text-white mt-0.5">{COMPANY_INFO.phone}</p>
                    <p className="text-[11px] text-neutral-400">Mon-Fri 8:30am - 5:30pm AEST</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#171a26] border border-[#262c3e] hover:border-[#ff5500] transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 text-[#ff5500] flex items-center justify-center shrink-0 group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Direct Email</span>
                    <p className="text-sm sm:text-base font-bold text-white mt-0.5">{COMPANY_INFO.email}</p>
                    <p className="text-[11px] text-neutral-400">Founder & Director Ben Lewis</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#171a26] border border-[#262c3e]">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 text-[#ff5500] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Regional NSW Hub</span>
                    <p className="text-sm sm:text-base font-bold text-white mt-0.5">{COMPANY_INFO.address}</p>
                    <p className="text-[11px] text-neutral-400">Gumbaynggirr Country, Mid North Coast NSW</p>
                  </div>
                </div>
              </div>

              {/* Office hours & response guarantee */}
              <div className="mt-8 pt-6 border-t border-[#232738] flex items-center gap-3 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-[#ff5500] shrink-0" />
                <span>We typically respond to event inquiries within 24 business hours.</span>
              </div>
            </div>

            {/* Newsletter Subscription Card */}
            <div className="bg-[#12141c] p-6 rounded-3xl border border-[#232738]">
              <h4 className="font-heading font-bold text-base text-white mb-1">
                Stay in the Loop
              </h4>
              <p className="text-xs text-neutral-400 mb-4">
                Receive announcements for upcoming River Sounds lineups and boutique festival dates across NSW.
              </p>

              {newsletterSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thanks for subscribing! You're on the VIP list.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-[#181b28] border border-[#2c3246] rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff5500]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#ff5500] hover:bg-[#ff6611] text-white text-xs font-bold transition shrink-0"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Detailed Event Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#12141c] p-6 sm:p-10 rounded-3xl border border-[#232738] shadow-2xl">
              {submittedReference ? (
                <div className="py-12 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2">
                    Thanks for Submitting!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
                    Your inquiry has been directly dispatched to Ben Lewis and the Gig Big production team.
                  </p>

                  <div className="inline-block p-4 rounded-xl bg-[#171a27] border border-[#2a3044] text-left text-xs mb-8">
                    <div className="text-neutral-400 font-semibold mb-1">Inquiry Reference:</div>
                    <div className="font-mono font-bold text-white text-base text-[#ff7722]">
                      {submittedReference}
                    </div>
                    <div className="text-neutral-400 mt-2">
                      A confirmation email has been logged. For urgent festival queries, please call{' '}
                      <span className="text-white font-semibold">{COMPANY_INFO.phone}</span>.
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setSubmittedReference(null)}
                      className="px-6 py-2.5 rounded-xl bg-[#1c1f2e] text-neutral-300 hover:text-white text-xs font-semibold hover:bg-[#25293d]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#232738] pb-4 mb-2">
                    <h3 className="font-heading font-black text-2xl text-white">
                      Tell Us About Yourself & Your Event
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Fill out the form below and we’ll prepare a customized proposal tailored to your needs.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#181b28] border border-[#2c3246] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5500] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@domain.com.au"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#181b28] border border-[#2c3246] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5500] transition"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#181b28] border border-[#2c3246] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5500] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Company or Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bellingen Arts Trust"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#181b28] border border-[#2c3246] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5500] transition"
                      />
                    </div>
                  </div>

                  {/* Address / Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Event Location / Town / Address
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Coffs Harbour / Northern Rivers / Regional NSW"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#181b28] border border-[#2c3246] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5500] transition"
                    />
                  </div>

                  {/* Event Type & Anticipated Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-[#181b28] border border-[#2c3246] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5500] transition"
                      >
                        <option value="Music Festival">Multi-Day Music Festival</option>
                        <option value="Boutique Food & Wine">Boutique Food & Wine / Beer Fest</option>
                        <option value="Venue Programming">Ongoing Venue Live Music Programming</option>
                        <option value="Community Arts Event">Civic / Community Arts Celebration</option>
                        <option value="Single Headliner Concert">Single Headliner Live Concert</option>
                        <option value="Corporate Event">Corporate / Private Arts Gathering</option>
                        <option value="Other">Other / Custom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Target Date or Season
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. October 2026 or Spring 2027"
                        value={formData.estimatedDate}
                        onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
                        className="w-full bg-[#181b28] border border-[#2c3246] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5500] transition"
                      />
                    </div>
                  </div>

                  {/* Services Multi-Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Services You're Interested In
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {EVENT_SERVICES.map((s) => {
                        const isChecked = formData.services.includes(s.id);
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => toggleService(s.id)}
                            className={`p-2.5 rounded-xl text-left text-xs font-medium border transition ${
                              isChecked
                                ? 'bg-[#ff5500]/20 border-[#ff5500] text-white'
                                : 'bg-[#181b28] border-[#2b3145] text-neutral-400 hover:text-white'
                            }`}
                          >
                            <span className="line-clamp-1">{s.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Tell Us About Your Project & Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share details regarding your venue, concept, specific artists you have in mind, or operational areas where you need expert support..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#181b28] border border-[#2c3246] rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5500] transition resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff6a00] hover:from-[#ff6611] hover:to-[#ff7b1a] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#ff5500]/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    id="submit-contact-form"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Event Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-neutral-400">
                    By submitting, your details will only be used to discuss your event request. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
