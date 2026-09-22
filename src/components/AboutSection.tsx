import React from 'react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/gigbigData';
import { Phone, Mail, Award, Users, Compass, Shield, Quote, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuickQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuickQuote }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0c10] relative border-t border-[#1a1d29]" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#232738]/80 text-[#ff7722] text-xs font-bold uppercase tracking-wider mb-4 border border-[#31364a]">
            <Users className="w-3.5 h-3.5" />
            <span>The Crew</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Passionate Industry Pros Championing Regional Music
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            We love bringing good music and good people together. From humble beginnings in 2014 to producing regional icons like River Sounds, here is the team steering the ship.
          </p>
        </div>

        {/* Founder Feature Profile */}
        <div className="bg-[#12141c] rounded-3xl border border-[#232738] p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-[#2d3248] shadow-xl group">
                <div className="aspect-[4/5]">
                  <img
                    src={COMPANY_INFO.founder.image}
                    alt={COMPANY_INFO.founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading font-black text-2xl text-white">
                    {COMPANY_INFO.founder.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#ff7722]">
                    {COMPANY_INFO.founder.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Bio Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-[#ff5500]/10 text-[#ff7700] text-xs font-bold uppercase tracking-wider border border-[#ff5500]/20">
                Founder Story
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Ben Lewis — Unapologetic Music Lover & Events Wiz
              </h3>

              <div className="space-y-3.5 text-neutral-300 text-sm leading-relaxed">
                {COMPANY_INFO.founder.bio.map((paragraph, idx) => (
                  <p key={idx} className={idx === COMPANY_INFO.founder.bio.length - 1 ? 'font-semibold text-white italic pt-2' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Direct Founder Contact Actions */}
              <div className="pt-6 border-t border-[#232736] flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-5 py-2.5 rounded-xl bg-[#1b1e2b] hover:bg-[#ff5500] text-neutral-200 hover:text-white text-xs font-semibold border border-[#2c3246] hover:border-[#ff5500] transition flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Ben: {COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="px-5 py-2.5 rounded-xl bg-[#1b1e2b] hover:bg-[#ff5500] text-neutral-200 hover:text-white text-xs font-semibold border border-[#2c3246] hover:border-[#ff5500] transition flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#141622] border border-[#242839]">
            <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white mb-2">Regional Cultural Heartbeat</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We specialize in the distinctive logistics and soul of Regional NSW. We bridge urban touring artists with regional communities that appreciate real live experiences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141622] border border-[#242839]">
            <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white mb-2">First Nations & Balance</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Every stage we touch actively respects and celebrates First Nations storytelling and equal gender representation, creating vibrant lineups that reflect modern Australia.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141622] border border-[#242839]">
            <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white mb-2">Bulletproof Operations</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              With 10+ years running festivals, our WHS, liquor licensing, contractor management, and site systems ensure your event runs smoothly and without surprises.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white text-center mb-8">
            What Our Partners & Collaborators Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#13151f] border border-[#222536] flex flex-col justify-between"
              >
                <Quote className="w-6 h-6 text-[#ff5500]/40 mb-3" />
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <div className="pt-4 border-t border-[#232738]">
                  <h5 className="font-bold text-white text-xs">{t.author}</h5>
                  <p className="text-[11px] text-[#ff7722]">{t.role}</p>
                  <p className="text-[10px] text-neutral-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center bg-gradient-to-r from-[#171420] via-[#1a1c2a] to-[#171420] p-8 sm:p-12 rounded-3xl border border-[#2b3046]">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3">
            Ready to collaborate with the Gig Big crew?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Whether you need turnkey management for an upcoming arts festival or programming consultation for your venue, we’re ready to bring your vision to life.
          </p>
          <button
            onClick={onOpenQuickQuote}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff6600] text-white font-bold text-sm shadow-xl shadow-[#ff5500]/25 transition hover:scale-105 inline-flex items-center gap-2"
          >
            <span>Let's Create Together</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
