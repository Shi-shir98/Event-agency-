import React, { useState, useEffect } from 'react';
import { EVENT_SERVICES, COMPANY_INFO } from '../data/gigbigData';
import { X, Send, CheckCircle2, Sparkles, Phone } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServices?: string[];
  preselectedArtist?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedServices = [],
  preselectedArtist
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Festival');
  const [attendees, setAttendees] = useState('1,000 - 3,000');
  const [services, setServices] = useState<string[]>(
    preselectedServices.length > 0 ? preselectedServices : ['project-management', 'artist-curation']
  );
  const [notes, setNotes] = useState(
    preselectedArtist ? `Inquiry regarding booking artist: ${preselectedArtist}` : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedServices.length > 0) {
      setServices(preselectedServices);
    }
  }, [preselectedServices]);

  useEffect(() => {
    if (preselectedArtist) {
      setNotes(`Inquiry regarding booking artist: ${preselectedArtist}`);
    }
  }, [preselectedArtist]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (services.includes(id)) {
      setServices(services.filter((s) => s !== id));
    } else {
      setServices([...services, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setReference(`GB-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setReference(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#12141c] border border-[#2b3044] rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1e2230] text-neutral-400 hover:text-white flex items-center justify-center transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {reference ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white mb-2">
              Proposal Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mb-6">
              Thanks {fullName}! Ben Lewis will review your event requirements and respond within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-[#171a26] border border-[#262c3e] text-left text-xs mb-6 space-y-1">
              <div className="text-neutral-400">Reference:</div>
              <div className="font-mono font-bold text-white text-base text-[#ff5500]">{reference}</div>
              <div className="text-neutral-400 pt-1">
                For immediate assistance, call <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-white underline">{COMPANY_INFO.phone}</a>.
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#ff5500] text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff7722]">
              <Sparkles className="w-4 h-4" />
              <span>Event Feasibility & Quote</span>
            </div>
            <h3 className="font-heading font-black text-2xl text-white">
              Plan Your Event with Gig Big
            </h3>
            <p className="text-xs text-neutral-400">
              Provide brief details below and we’ll outline a turnkey operational plan and cost model.
            </p>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sam Taylor"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#181a26] border border-[#2b3044] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff5500]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="0400 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#181a26] border border-[#2b3044] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff5500]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-300 mb-1">Email Address *</label>
              <input
                type="email"
                required
                placeholder="sam@company.com.au"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#181a26] border border-[#2b3044] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff5500]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">Event Type</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-[#181a26] border border-[#2b3044] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff5500]"
                >
                  <option value="Music Festival">Music Festival</option>
                  <option value="Boutique Food & Wine">Boutique Food & Wine</option>
                  <option value="Venue Programming">Venue Programming</option>
                  <option value="Community Arts">Community Arts Event</option>
                  <option value="Artist Booking Only">Artist Booking Only</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">Est. Attendance</label>
                <select
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  className="w-full bg-[#181a26] border border-[#2b3044] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff5500]"
                >
                  <option value="Under 1,000">Under 1,000</option>
                  <option value="1,000 - 3,000">1,000 - 3,000</option>
                  <option value="3,000 - 8,000">3,000 - 8,000</option>
                  <option value="8,000+">8,000+ Attendees</option>
                </select>
              </div>
            </div>

            {/* Services required */}
            <div>
              <label className="block text-xs font-bold text-neutral-300 mb-1.5">
                Services Needed (Click to toggle)
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {EVENT_SERVICES.map((s) => {
                  const isSelected = services.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleService(s.id)}
                      className={`p-2 rounded-lg text-left text-[11px] font-medium border transition ${
                        isSelected
                          ? 'bg-[#ff5500]/20 border-[#ff5500] text-white'
                          : 'bg-[#181a26] border-[#262c3e] text-neutral-400 hover:text-white'
                      }`}
                    >
                      <span className="truncate block">{s.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-neutral-300 mb-1">
                Project Notes / Specific Artists
              </label>
              <textarea
                rows={3}
                placeholder="Target dates, venue location, or specific requirements..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#181a26] border border-[#2b3044] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff5500]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff6600] hover:from-[#ff6611] hover:to-[#ff771a] text-white font-bold text-sm shadow-xl shadow-[#ff5500]/25 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Preparing proposal...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Proposal Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
