import React, { useState } from 'react';
import { ARTISTS_ROSTER } from '../data/gigbigData';
import { Artist } from '../types';
import { Search, Music, Heart, Sparkles, Send, CheckCircle2, SlidersHorizontal } from 'lucide-react';

interface CurationSectionProps {
  onSelectArtistToBook: (artistName: string) => void;
}

export const CurationSection: React.FC<CurationSectionProps> = ({ onSelectArtistToBook }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArtistModal, setActiveArtistModal] = useState<Artist | null>(null);

  const genres = ['All', 'Rock & Indie', 'Hip Hop & Urban', 'Comedy', 'Roots & Blues', 'Electronic & Pop'];

  const filteredArtists = ARTISTS_ROSTER.filter((artist) => {
    const matchesGenre = selectedGenre === 'All' || artist.genre === selectedGenre;
    const matchesSearch =
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (artist.notableTracksOrCredits && artist.notableTracksOrCredits.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesGenre && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-24 bg-[#0b0c10] relative border-t border-[#1a1d29]" id="curation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#232738]/80 text-[#ff7722] text-xs font-bold uppercase tracking-wider mb-4 border border-[#31364a]">
            <Music className="w-3.5 h-3.5" />
            <span>Programming & Curation Since 2014</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Curating Unforgettable Live Music Experiences
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            From top-tier touring headliners to the most exciting emerging talent across Australia.
            We tailor lineups that resonate with your specific audience demographic, with dedicated commitments to First Nations representation and gender-balanced programming.
          </p>

          {/* Ethics / Inclusivity Commitment Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 bg-[#141620] px-4 py-2.5 rounded-full border border-[#262a3b] text-xs text-neutral-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> First Nations Representation
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-[#ff5500] font-semibold">
              <Heart className="w-4 h-4 fill-[#ff5500]/20" /> 50/50 Gender Balance Commitment
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#12141c] p-3 sm:p-4 rounded-2xl border border-[#232636]">
          {/* Genre Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedGenre === genre
                    ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/30'
                    : 'text-neutral-400 hover:text-white hover:bg-[#1a1d29]'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search artists, bands, comedy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181a24] text-white text-xs rounded-xl pl-9 pr-4 py-2.5 border border-[#2c3144] focus:outline-none focus:border-[#ff5500] transition placeholder-neutral-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Artists Roster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="group bg-[#13151f] rounded-2xl overflow-hidden border border-[#212433] hover:border-[#ff5500]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#ff5500]/10"
            >
              <div>
                {/* Artist Photo */}
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-[#1a1c27] cursor-pointer"
                  onClick={() => setActiveArtistModal(artist)}
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13151f] via-transparent to-transparent opacity-80" />

                  {/* Genre Tag */}
                  <div className="absolute top-3 left-3 bg-[#0d0e14]/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-neutral-200 border border-white/10">
                    {artist.genre}
                  </div>

                  {artist.featured && (
                    <div className="absolute top-3 right-3 bg-[#ff5500] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide text-white">
                      Featured
                    </div>
                  )}
                </div>

                {/* Artist Info */}
                <div className="p-5">
                  <h3
                    className="font-heading font-black text-xl text-white group-hover:text-[#ff5500] transition-colors cursor-pointer"
                    onClick={() => setActiveArtistModal(artist)}
                  >
                    {artist.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#ff7722] mt-0.5">{artist.role}</p>

                  {artist.notableTracksOrCredits && (
                    <div className="mt-2 text-[11px] text-neutral-400">
                      <span className="font-semibold text-neutral-300">Credits: </span>
                      {artist.notableTracksOrCredits}
                    </div>
                  )}

                  <p className="text-xs text-neutral-300 mt-2.5 line-clamp-2 leading-relaxed">
                    {artist.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectArtistToBook(artist.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1b1e2b] hover:bg-[#ff5500] text-neutral-200 hover:text-white font-semibold text-xs transition-colors border border-[#2b3044] hover:border-[#ff5500] flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Inquire Availability</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-16 bg-[#13151f] rounded-2xl border border-[#212433]">
            <Music className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <h4 className="font-heading font-bold text-white text-lg">No artists match your criteria</h4>
            <p className="text-xs text-neutral-400 mt-1">Try resetting the genre filter or searching for another name.</p>
            <button
              onClick={() => {
                setSelectedGenre('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#ff5500] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Database Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#151722] border border-[#292e42] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-white text-lg sm:text-xl">
              Looking for someone specific?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Gig Big has relationships across major Australian booking agencies and management companies. If you have an artist in mind, we can secure competitive terms and coordinate touring routing.
            </p>
          </div>
          <button
            onClick={() => onSelectArtistToBook('Custom Artist Inquiry')}
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff6a00] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#ff5500]/25 transition hover:scale-105"
          >
            Custom Artist Booking Request
          </button>
        </div>
      </div>

      {/* Artist Details Popup Modal */}
      {activeArtistModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#141620] border border-[#2d3248] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="relative aspect-video">
              <img
                src={activeArtistModal.image}
                alt={activeArtistModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveArtistModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-3 bg-[#0d0e14]/90 px-3 py-1 rounded-md text-xs font-semibold text-white">
                {activeArtistModal.genre}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading font-black text-2xl text-white">{activeArtistModal.name}</h3>
              <p className="text-sm font-semibold text-[#ff7722] mt-0.5">{activeArtistModal.role}</p>

              {activeArtistModal.notableTracksOrCredits && (
                <div className="mt-3 p-3 rounded-xl bg-[#1b1e2a] border border-[#2b3044] text-xs text-neutral-300">
                  <span className="font-bold text-white">Credits & Anthems: </span>
                  {activeArtistModal.notableTracksOrCredits}
                </div>
              )}

              <p className="text-xs sm:text-sm text-neutral-300 mt-4 leading-relaxed">
                {activeArtistModal.bio}
              </p>

              <div className="mt-6 pt-4 border-t border-[#232738] flex gap-3">
                <button
                  onClick={() => {
                    const name = activeArtistModal.name;
                    setActiveArtistModal(null);
                    onSelectArtistToBook(name);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#ff5500] hover:bg-[#ff6611] text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Inquire to Book {activeArtistModal.name}</span>
                </button>
                <button
                  onClick={() => setActiveArtistModal(null)}
                  className="py-3 px-4 rounded-xl bg-[#1c1f2e] text-neutral-300 text-xs sm:text-sm font-semibold hover:bg-[#25293d]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
