import React, { useState } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventManagementSection } from './components/EventManagementSection';
import { CurationSection } from './components/CurationSection';
import { FestivalsSection } from './components/FestivalsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import {
  Layers,
  Music,
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Shield,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from './data/gigbigData';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedServices, setQuotePreselectedServices] = useState<string[]>([]);
  const [quotePreselectedArtist, setQuotePreselectedArtist] = useState<string | undefined>(undefined);

  const handleOpenQuote = (services?: string[], artistName?: string) => {
    if (services) setQuotePreselectedServices(services);
    else setQuotePreselectedServices([]);

    setQuotePreselectedArtist(artistName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectArtistToBook = (artistName: string) => {
    handleOpenQuote(['artist-curation'], artistName);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f2f4f8] flex flex-col font-sans selection:bg-[#ff5500] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuickQuote={() => handleOpenQuote()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              setActiveTab={setActiveTab}
              onOpenQuickQuote={() => handleOpenQuote()}
            />

            {/* Core 3 Pillars Section */}
            <section className="py-14 sm:py-20 bg-[#0e1017] border-y border-[#1a1d29]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff7722]">
                    What We Do
                  </span>
                  <h2 className="font-heading font-black text-2xl sm:text-4xl text-white mt-1">
                    Three Pillars of Gig Big
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Pillar 1 */}
                  <div
                    onClick={() => {
                      setActiveTab('management');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-8 rounded-3xl bg-[#13151f] border border-[#222536] hover:border-[#ff5500]/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/10 text-[#ff5500] flex items-center justify-center mb-6 group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                        <Layers className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-black text-xl text-white mb-2">
                        Turnkey Event Management
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        Comprehensive management for small to large-scale arts events across Regional NSW: licensing, budgeting, site operations, production, and WHS.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#ff5500] group-hover:translate-x-1 transition-transform">
                      <span>Explore Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div
                    onClick={() => {
                      setActiveTab('curation');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-8 rounded-3xl bg-[#13151f] border border-[#222536] hover:border-[#ff5500]/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/10 text-[#ff5500] flex items-center justify-center mb-6 group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                        <Music className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-black text-xl text-white mb-2">
                        Programming & Curation
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        Booking top-tier touring icons down to breakthrough regional talent. Strong commitment to First Nations representation and gender balance.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#ff5500] group-hover:translate-x-1 transition-transform">
                      <span>Browse Roster</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div
                    onClick={() => {
                      setActiveTab('events');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-8 rounded-3xl bg-[#13151f] border border-[#222536] hover:border-[#ff5500]/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/10 text-[#ff5500] flex items-center justify-center mb-6 group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-black text-xl text-white mb-2">
                        Gig Big Owned Festivals
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        Flagship properties including River Sounds in Bellingen (NSW) plus boutique festivals like The Big Bonanza, Fed BluesFest, and Brew Day Out.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#ff5500] group-hover:translate-x-1 transition-transform">
                      <span>View Festivals</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Event Management Preview with Estimator */}
            <EventManagementSection onOpenQuickQuote={handleOpenQuote} />

            {/* Live Artist Roster Showcase */}
            <CurationSection onSelectArtistToBook={handleSelectArtistToBook} />

            {/* Festivals & River Sounds Spotlight */}
            <FestivalsSection onOpenQuickQuote={() => handleOpenQuote()} />

            {/* About Ben Lewis & Crew */}
            <AboutSection onOpenQuickQuote={() => handleOpenQuote()} />

            {/* Contact & Inquiry Section */}
            <ContactSection
              initialArtistOrService={quotePreselectedArtist}
              initialServices={quotePreselectedServices}
            />
          </>
        )}

        {activeTab === 'management' && (
          <div className="pt-24">
            <EventManagementSection onOpenQuickQuote={handleOpenQuote} />
            <ContactSection initialServices={['project-management', 'production-technical']} />
          </div>
        )}

        {activeTab === 'curation' && (
          <div className="pt-24">
            <CurationSection onSelectArtistToBook={handleSelectArtistToBook} />
            <ContactSection initialServices={['artist-curation']} />
          </div>
        )}

        {activeTab === 'events' && (
          <div className="pt-24">
            <FestivalsSection onOpenQuickQuote={() => handleOpenQuote()} />
            <ContactSection />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-24">
            <AboutSection onOpenQuickQuote={() => handleOpenQuote()} />
            <ContactSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-24">
            <ContactSection
              initialArtistOrService={quotePreselectedArtist}
              initialServices={quotePreselectedServices}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenQuickQuote={() => handleOpenQuote()}
      />

      {/* Mobile Fixed Action Bar */}
      <MobileActionBar
        setActiveTab={setActiveTab}
        onOpenQuickQuote={() => handleOpenQuote()}
      />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedServices={quotePreselectedServices}
        preselectedArtist={quotePreselectedArtist}
      />
    </div>
  );
}
