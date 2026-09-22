import React from 'react';
import { COMPANY_INFO } from '../data/gigbigData';
import { PageTab } from '../types';
import { Sparkles, Calendar, ArrowRight, Music, Layers, MapPin, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenQuickQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab, onOpenQuickQuote }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden" id="hero-section">
      {/* Background Atmosphere Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-[#ff5500]/15 via-[#ff3b00]/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#ff8800]/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* River Sounds 2026 Announcement Pill */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div
            onClick={() => setActiveTab('events')}
            className="group cursor-pointer inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161822]/90 border border-[#ff5500]/30 hover:border-[#ff5500] text-xs sm:text-sm text-neutral-200 shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02]"
            id="hero-announcement-pill"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5500]"></span>
            </span>
            <span className="font-semibold text-white">River Sounds 2026</span>
            <span className="text-neutral-400 hidden xs:inline">•</span>
            <span className="text-neutral-300 hidden sm:inline">May 15-16, Bellingen NSW</span>
            <span className="text-[#ff7722] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Lineup <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Main Grid: Headline & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#232738]/80 text-[#ff7722] text-xs font-bold uppercase tracking-wider mb-4 border border-[#31364a]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative Agency & Event Management</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl text-white tracking-tight leading-[1.08] mb-6">
              Creativity <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7700] to-[#ffa600]">
                come to life.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8">
              {COMPANY_INFO.description}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-10">
              <button
                onClick={onOpenQuickQuote}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff6600] hover:from-[#ff6611] hover:to-[#ff771a] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#ff5500]/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                id="hero-plan-event-btn"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('curation')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#151722] hover:bg-[#1e2130] text-neutral-200 hover:text-white font-semibold text-sm sm:text-base border border-[#2a2e40] hover:border-[#3d425c] transition flex items-center justify-center gap-2"
                id="hero-browse-artists-btn"
              >
                <Music className="w-4 h-4 text-[#ff5500]" />
                <span>Artist Curation</span>
              </button>

              <button
                onClick={() => setActiveTab('management')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-neutral-300 hover:text-white font-medium text-sm sm:text-base transition flex items-center justify-center gap-2"
                id="hero-event-services-btn"
              >
                <Layers className="w-4 h-4 text-neutral-400" />
                <span>Turnkey Services</span>
              </button>
            </div>

            {/* Trust Badges / Credibility Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-[#1f2230]">
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>Regional NSW Event Specialists</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>First Nations & Gender-Balanced Curation</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                <Award className="w-4 h-4 text-[#ff5500]" />
                <span>Supported by NSW Office for the Arts</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2b2f42] bg-[#12141c] shadow-2xl shadow-black/60 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://static.wixstatic.com/media/2da7b9_3c98bace39004b2fb3bc7dbc5ee33203~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/0B5A1493.jpg"
                    alt="River Sounds live music festival stage crowd"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1118] via-transparent to-black/30" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white tracking-wide">Live Music Experiences</span>
                  </div>

                  {/* Flagship Tag */}
                  <div className="absolute top-4 right-4 bg-[#ff5500] px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-md">
                    River Sounds
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-5 sm:p-6 bg-[#13151f]">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white">River Sounds 2026</h3>
                      <p className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
                        Bellingen Showground, NSW
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-xs font-bold text-[#ff7722] bg-[#ff5500]/10 px-2.5 py-1 rounded-md border border-[#ff5500]/20">
                        May 15-16
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    Multi-day contemporary music festival celebrating diversity, art installations, local food, and community culture.
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#232736] flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Produced & owned by Gig Big</span>
                    <button
                      onClick={() => setActiveTab('events')}
                      className="text-[#ff5500] font-semibold hover:text-[#ff7722] flex items-center gap-1"
                    >
                      View Portfolio <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#1a1d2b]/95 backdrop-blur-md p-4 rounded-xl border border-[#31364d] shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff5500] to-[#ff7700] flex items-center justify-center font-bold text-white text-base">
                  10+
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Years Curating</p>
                  <p className="text-[11px] text-neutral-400">Since 2014 in NSW</p>
                </div>
              </div>

              {/* Floating Artist Counter Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#1a1d2b]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#31364d] shadow-xl flex items-center gap-2">
                <Music className="w-4 h-4 text-[#ff5500]" />
                <span className="text-xs font-bold text-white">150+ Artists Booked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-[#12141c]/90 border border-[#222533] hover:border-[#ff5500]/40 transition group"
            >
              <div className="font-heading font-black text-2xl sm:text-4xl text-white group-hover:text-[#ff5500] transition-colors">
                {stat.value}
              </div>
              <div className="font-bold text-sm text-neutral-200 mt-1">{stat.label}</div>
              <div className="text-xs text-neutral-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
