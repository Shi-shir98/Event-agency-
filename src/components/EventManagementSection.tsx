import React, { useState } from 'react';
import { EVENT_SERVICES } from '../data/gigbigData';
import { EventService } from '../types';
import {
  CalendarCheck2,
  Music2,
  Wine,
  Sliders,
  ShieldCheck,
  TrendingUp,
  Award,
  Truck,
  Check,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Calculator
} from 'lucide-react';

interface EventManagementSectionProps {
  onOpenQuickQuote: (preselectedServices?: string[]) => void;
}

export const EventManagementSection: React.FC<EventManagementSectionProps> = ({ onOpenQuickQuote }) => {
  const [selectedService, setSelectedService] = useState<EventService | null>(EVENT_SERVICES[0]);
  const [expandedId, setExpandedId] = useState<string | null>(EVENT_SERVICES[0].id);

  // Interactive Estimator State
  const [eventType, setEventType] = useState('Music Festival');
  const [crowdSize, setCrowdSize] = useState('1,000 - 3,000');
  const [selectedPillars, setSelectedPillars] = useState<string[]>([
    'project-management',
    'artist-curation',
    'production-technical',
    'liquor-hospitality'
  ]);

  const togglePillar = (id: string) => {
    if (selectedPillars.includes(id)) {
      setSelectedPillars(selectedPillars.filter((p) => p !== id));
    } else {
      setSelectedPillars([...selectedPillars, id]);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarCheck2':
        return <CalendarCheck2 className="w-5 h-5 text-[#ff5500]" />;
      case 'Music2':
        return <Music2 className="w-5 h-5 text-[#ff5500]" />;
      case 'Wine':
        return <Wine className="w-5 h-5 text-[#ff5500]" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-[#ff5500]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#ff5500]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#ff5500]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#ff5500]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#ff5500]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#ff5500]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0d0e14] relative border-t border-[#1c1f2b]" id="management-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#232738]/80 text-[#ff7722] text-xs font-bold uppercase tracking-wider mb-4 border border-[#31364a]">
            <span>End-to-End Delivery</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Turnkey Event Management Across Regional NSW
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Gig Big delivers turnkey event management services for small to large-scale arts events across Regional NSW.
            In addition to our owned festivals, we project manage events for third parties, offering end-to-end delivery or tailored support across specific operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {EVENT_SERVICES.map((service) => {
            const isSelected = selectedService?.id === service.id;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-[#161824] border-[#ff5500] shadow-xl shadow-[#ff5500]/10 ring-1 ring-[#ff5500]'
                    : 'bg-[#12141c] border-[#222533] hover:border-[#383d54] hover:bg-[#151722]'
                }`}
                onClick={() => {
                  setSelectedService(service);
                  setExpandedId(isExpanded ? null : service.id);
                }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1c1f2d] border border-[#2b3044] flex items-center justify-center mb-4">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{service.shortDesc}</p>
                </div>

                <div>
                  {isExpanded && (
                    <div className="pt-3 border-t border-[#232736] mb-4 space-y-2 animate-in fade-in duration-200">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff7722]">
                        Key Deliverables
                      </div>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-neutral-300">
                            <Check className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs font-semibold text-[#ff5500] pt-2">
                    <span>{isExpanded ? 'Less details' : 'View deliverables'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Event Scope Estimator */}
        <div className="rounded-3xl bg-gradient-to-br from-[#141622] via-[#10121b] to-[#17141f] border border-[#2d3248] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff7722] mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive Event Scope Planner</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Plan Your Event Operations Scope
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm mt-1">
              Select your parameters below to assemble a tailored operational package. Our team will review your specifications and provide a detailed feasibility model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  1. Event Format
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Music Festival', 'Boutique Food & Wine', 'Venue Program', 'Civic / Arts Event'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`p-3 rounded-xl text-xs font-semibold text-center transition ${
                        eventType === type
                          ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/30 font-bold'
                          : 'bg-[#1a1d2b] text-neutral-300 hover:bg-[#222638] border border-[#2b3044]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Crowd Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  2. Anticipated Attendance
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Under 1,000', '1,000 - 3,000', '3,000 - 8,000', '8,000+ Attendees'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setCrowdSize(size)}
                      className={`p-3 rounded-xl text-xs font-semibold text-center transition ${
                        crowdSize === size
                          ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/30 font-bold'
                          : 'bg-[#1a1d2b] text-neutral-300 hover:bg-[#222638] border border-[#2b3044]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Pillars to Include */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  3. Required Operational Modules (Click to toggle)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EVENT_SERVICES.map((s) => {
                    const isChecked = selectedPillars.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => togglePillar(s.id)}
                        className={`p-3 rounded-xl text-left text-xs font-medium flex items-center justify-between border transition ${
                          isChecked
                            ? 'bg-[#ff5500]/15 border-[#ff5500] text-white'
                            : 'bg-[#151724] border-[#25293b] text-neutral-400 hover:border-[#383e58]'
                        }`}
                      >
                        <span className="truncate pr-2">{s.title}</span>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-[#ff5500] text-white' : 'border border-[#383e58]'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-[#171a27] rounded-2xl border border-[#2d3248] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#2b3044] pb-4 mb-4">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold">Scope Summary</span>
                  <span className="text-xs font-bold text-[#ff5500] bg-[#ff5500]/10 px-2.5 py-1 rounded-full">
                    {selectedPillars.length} Modules Included
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">Event Profile</span>
                    <p className="text-sm font-bold text-white">{eventType} ({crowdSize})</p>
                  </div>

                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">Included Deliverables</span>
                    <div className="mt-2 space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      {selectedPillars.map((pillarId) => {
                        const s = EVENT_SERVICES.find((x) => x.id === pillarId);
                        return s ? (
                          <div key={s.id} className="flex items-center gap-2 text-xs text-neutral-200 bg-[#12141e] p-2 rounded-lg border border-[#232738]">
                            <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                            <span className="truncate">{s.title}</span>
                          </div>
                        ) : null;
                      })}
                      {selectedPillars.length === 0 && (
                        <p className="text-xs text-neutral-400 italic">No modules selected yet. Select above to plan scope.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2b3044]">
                <button
                  type="button"
                  onClick={() => onOpenQuickQuote(selectedPillars)}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff6600] hover:from-[#ff6611] hover:to-[#ff771a] text-white font-bold text-sm shadow-xl shadow-[#ff5500]/25 transition flex items-center justify-center gap-2"
                  id="estimator-submit-btn"
                >
                  <span>Request Custom Feasibility & Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-neutral-400 mt-2">
                  Direct liaison with Gig Big director Ben Lewis. No obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
