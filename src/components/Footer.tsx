import React from 'react';
import { COMPANY_INFO } from '../data/gigbigData';
import { PageTab } from '../types';
import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenQuickQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenQuickQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080b] border-t border-[#181a24] text-neutral-400 text-xs pb-24 md:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Acknowledgment of Country */}
        <div className="mb-12 p-6 rounded-2xl bg-[#0e1017] border border-[#1f2332] text-center max-w-4xl mx-auto">
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            {COMPANY_INFO.countryAcknowledgment}
          </p>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1c1f2e]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff5500] to-[#ff7700] flex items-center justify-center font-bold text-white text-base">
                GB
              </div>
              <span className="font-heading font-black text-xl text-white tracking-wider">
                GIG BIG
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Established in 2014. Producing iconic regional arts festivals, comprehensive turnkey event operations, and world-class live music programming across Australia.
            </p>

            <div className="pt-2 text-xs text-neutral-500">
              ABN & Company: <span className="text-neutral-400">Gig Big Pty Ltd</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    scrollToTop();
                  }}
                  className="hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('management');
                    scrollToTop();
                  }}
                  className="hover:text-white transition"
                >
                  Event Management & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('curation');
                    scrollToTop();
                  }}
                  className="hover:text-white transition"
                >
                  Programming & Curation
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('events');
                    scrollToTop();
                  }}
                  className="hover:text-white transition"
                >
                  River Sounds & Festivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    scrollToTop();
                  }}
                  className="hover:text-white transition"
                >
                  The Crew & About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    scrollToTop();
                  }}
                  className="hover:text-white transition"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Events & Flagships */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Festivals
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.riversounds.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1 text-[#ff7722] font-semibold"
                >
                  River Sounds 2026 ↗
                </a>
              </li>
              <li>
                <span className="text-neutral-400">The Big Bonanza</span>
              </li>
              <li>
                <span className="text-neutral-400">Fed BluesFest</span>
              </li>
              <li>
                <span className="text-neutral-400">CiderFest</span>
              </li>
              <li>
                <span className="text-neutral-400">Brew Day Out</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-white hover:text-[#ff7722]">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff5500]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-[#ff7722]">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenQuickQuote}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1b1e2a] hover:bg-[#ff5500] text-neutral-200 hover:text-white font-semibold text-xs border border-[#282d3f] transition"
              >
                Start Event Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-neutral-500 text-[11px] text-center sm:text-left">
            © 2014-2026 Gig Big Pty Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-neutral-500">Live Music & Events Agency NSW</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition"
              id="back-to-top-btn"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
