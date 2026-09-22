import React from 'react';
import { COMPANY_INFO } from '../data/gigbigData';
import { PageTab } from '../types';
import { Phone, Mail, Sparkles, Music } from 'lucide-react';

interface MobileActionBarProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenQuickQuote: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  setActiveTab,
  onOpenQuickQuote
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f1118]/95 backdrop-blur-lg border-t border-[#232736] p-2.5 pb-safe shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#171a25] active:bg-[#202434] text-neutral-200 border border-[#262a3b] transition"
          aria-label="Call Gig Big"
          id="mobile-action-call"
        >
          <Phone className="w-4 h-4 text-[#ff5500] mb-1" />
          <span className="text-[10px] font-semibold">Call Us</span>
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#171a25] active:bg-[#202434] text-neutral-200 border border-[#262a3b] transition"
          aria-label="Email Gig Big"
          id="mobile-action-email"
        >
          <Mail className="w-4 h-4 text-[#ff5500] mb-1" />
          <span className="text-[10px] font-semibold">Email</span>
        </a>

        {/* Artists Tab */}
        <button
          onClick={() => {
            setActiveTab('curation');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#171a25] active:bg-[#202434] text-neutral-200 border border-[#262a3b] transition"
          id="mobile-action-artists"
        >
          <Music className="w-4 h-4 text-[#ff7722] mb-1" />
          <span className="text-[10px] font-semibold">Artists</span>
        </button>

        {/* Plan Event CTA */}
        <button
          onClick={onOpenQuickQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff6600] active:from-[#ff6611] active:to-[#ff771a] text-white shadow-lg shadow-[#ff5500]/25 transition"
          id="mobile-action-quote"
        >
          <Sparkles className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold">Plan Event</span>
        </button>
      </div>
    </div>
  );
};
