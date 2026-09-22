import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/gigbigData';
import { Menu, X, Phone, Mail, Sparkles, ChevronRight, Calendar } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenQuickQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenQuickQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'management', label: 'Event Management' },
    { id: 'curation', label: 'Programming & Curation' },
    { id: 'events', label: 'Gig Big Events' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-[#232733]/80 shadow-lg shadow-black/40 py-3'
            : 'bg-gradient-to-b from-[#0b0c10]/95 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
              id="brand-logo-button"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff5500] via-[#ff7700] to-[#ff2200] p-0.5 shadow-lg shadow-[#ff5500]/20 flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#0d0e12] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-black text-white text-lg tracking-wider">GB</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight flex items-center gap-1.5">
                  GIG BIG
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold hidden sm:inline-block">
                  Music & Events Agency
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#151720]/80 p-1.5 rounded-full border border-[#232733] shadow-inner">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/30 font-semibold'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-xs text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-[#1a1c25] border border-transparent hover:border-[#2a2d3b] transition"
                id="header-phone-link"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenQuickQuote}
                className="flex items-center gap-2 bg-gradient-to-r from-[#ff5500] to-[#ff6a00] hover:from-[#ff6611] hover:to-[#ff7b1a] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-[#ff5500]/25 transition transform active:scale-95"
                id="header-get-quote-button"
              >
                <Sparkles className="w-4 h-4" />
                <span>Plan Event</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenQuickQuote}
                className="sm:hidden text-xs font-semibold bg-[#ff5500] text-white px-3 py-1.5 rounded-full"
                id="mobile-quick-plan-btn"
              >
                Plan
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#151720] border border-[#232733] text-neutral-200 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#0f1118] border-l border-[#232733] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#232733]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ff5500] flex items-center justify-center font-bold text-white text-sm">
                    GB
                  </div>
                  <span className="font-heading font-extrabold text-lg text-white">GIG BIG</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#1a1c26] text-neutral-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium transition ${
                        isActive
                          ? 'bg-[#ff5500] text-white font-semibold shadow-md shadow-[#ff5500]/25'
                          : 'text-neutral-300 hover:bg-[#1a1d28] hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                    </button>
                  );
                })}
              </div>

              {/* River Sounds 2026 Promo Card */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#1a1714] to-[#251e15] border border-[#ff5500]/30">
                <div className="flex items-center gap-2 text-[#ff7700] text-xs font-semibold mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Next Flagship Event</span>
                </div>
                <h4 className="font-heading font-bold text-white text-sm">River Sounds 2026</h4>
                <p className="text-xs text-neutral-300 mt-1">May 15-16 • Bellingen Showground, NSW</p>
                <button
                  onClick={() => handleNavClick('events')}
                  className="mt-3 text-xs font-semibold text-[#ff5500] hover:text-[#ff7722] flex items-center gap-1"
                >
                  View Details & Gallery →
                </button>
              </div>
            </div>

            {/* Drawer Bottom Contact Details */}
            <div className="pt-6 border-t border-[#232733] space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#151722] hover:bg-[#1c1f2e] text-neutral-200 transition text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#ff5500]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#151722] hover:bg-[#1c1f2e] text-neutral-200 transition text-sm font-medium"
              >
                <Mail className="w-4 h-4 text-[#ff5500]" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickQuote();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff6600] text-white font-semibold text-sm shadow-lg shadow-[#ff5500]/25 text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Event Proposal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
