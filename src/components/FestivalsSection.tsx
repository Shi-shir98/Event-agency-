import React, { useState } from 'react';
import { FESTIVAL_PORTFOLIO } from '../data/gigbigData';
import { FestivalEvent } from '../types';
import { MapPin, Calendar, ExternalLink, Sparkles, Image as ImageIcon, ChevronRight, CheckCircle2 } from 'lucide-react';

interface FestivalsSectionProps {
  onOpenQuickQuote: () => void;
}

export const FestivalsSection: React.FC<FestivalsSectionProps> = ({ onOpenQuickQuote }) => {
  const [selectedFestival, setSelectedFestival] = useState<FestivalEvent>(FESTIVAL_PORTFOLIO[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#0d0e14] relative border-t border-[#1c1f2b]" id="festivals-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#232738]/80 text-[#ff7722] text-xs font-bold uppercase tracking-wider mb-4 border border-[#31364a]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Owned & Produced Festivals</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Gig Big Events & Festivals
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Since 2014, Gig Big has been creating and delivering standout live music experiences across the NSW North Coast.
            From our multi-day flagship festival River Sounds to boutique gatherings pairing music with food, craft beer, and community spirit.
          </p>
        </div>

        {/* Festival Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {FESTIVAL_PORTFOLIO.map((festival) => {
            const isSelected = selectedFestival.id === festival.id;
            return (
              <button
                key={festival.id}
                onClick={() => setSelectedFestival(festival)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#181a27] border-[#ff5500] shadow-lg shadow-[#ff5500]/15 ring-1 ring-[#ff5500]'
                    : 'bg-[#12141c] border-[#222533] hover:border-[#343a4e] hover:bg-[#151722]'
                }`}
              >
                {festival.isFlagship && (
                  <span className="inline-block text-[10px] uppercase font-bold text-[#ff5500] bg-[#ff5500]/15 px-2 py-0.5 rounded mb-1">
                    Flagship Festival
                  </span>
                )}
                <h3 className="font-heading font-bold text-sm sm:text-base text-white">{festival.title}</h3>
                <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#ff5500]" />
                  <span className="truncate">{festival.location}</span>
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Festival Spotlight Feature Card */}
        <div className="bg-[#13151f] rounded-3xl border border-[#232738] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Cover Banner & Gallery Preview */}
            <div className="lg:col-span-6 relative flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-t from-[#0e1017] via-[#12141d] to-[#171a25]">
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-[#2a2e40] group cursor-pointer"
                  onClick={() => setLightboxImage(selectedFestival.coverImage)}
                >
                  <img
                    src={selectedFestival.coverImage}
                    alt={selectedFestival.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <ImageIcon className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Click to view full photo</span>
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {selectedFestival.gallery.map((imgUrl, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage(imgUrl)}
                      className="aspect-square rounded-xl overflow-hidden border border-[#2b3044] hover:border-[#ff5500] cursor-pointer transition-all duration-200 hover:scale-105"
                    >
                      <img src={imgUrl} alt={`${selectedFestival.title} moment ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Status / Ack */}
              <div className="mt-6 pt-4 border-t border-[#232736] flex flex-wrap items-center justify-between gap-2 text-xs">
                {selectedFestival.countryAck && (
                  <span className="text-neutral-400 font-medium italic">
                    On {selectedFestival.countryAck}
                  </span>
                )}
                <span className="text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full font-semibold">
                  Status: {selectedFestival.status}
                </span>
              </div>
            </div>

            {/* Right Information & Highlights */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#ff5500] uppercase tracking-wider">
                    {selectedFestival.subtitle}
                  </span>
                </div>

                <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-2">
                  {selectedFestival.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300 mb-6">
                  <span className="flex items-center gap-1.5 font-semibold text-white bg-[#1c1f2e] px-3 py-1.5 rounded-lg border border-[#2b3044]">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
                    {selectedFestival.dateRange}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                    <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
                    {selectedFestival.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  {selectedFestival.fullDescription}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Key Features & Community Impact
                  </h4>
                  <div className="space-y-2">
                    {selectedFestival.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#232736] flex flex-col sm:flex-row items-center gap-3">
                {selectedFestival.externalUrl && (
                  <a
                    href={selectedFestival.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ff5500] hover:bg-[#ff6611] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#ff5500]/25 transition flex items-center justify-center gap-2"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={onOpenQuickQuote}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1b1e2a] hover:bg-[#25293d] text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm border border-[#2d3246] transition flex items-center justify-center gap-2"
                >
                  <span>Co-Produce or Host an Event</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage}
              alt="Festival full resolution view"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-white/10"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center shadow-lg hover:bg-neutral-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
