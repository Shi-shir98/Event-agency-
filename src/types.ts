export type PageTab = 'home' | 'management' | 'curation' | 'events' | 'about' | 'contact';

export interface EventService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
}

export interface Artist {
  id: string;
  name: string;
  genre: 'Rock & Indie' | 'Hip Hop & Urban' | 'Comedy' | 'Roots & Blues' | 'Electronic & Pop';
  role: string;
  image: string;
  featured?: boolean;
  notableTracksOrCredits?: string;
  bio: string;
}

export interface FestivalEvent {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  countryAck?: string;
  dateRange: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  gallery: string[];
  externalUrl?: string;
  isFlagship?: boolean;
  status: 'Upcoming' | 'Annual' | 'Past Highlight';
  highlights: string[];
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  address?: string;
  eventType: 'Festival' | 'Venue Programming' | 'Corporate Arts Event' | 'Boutique Event' | 'Artist Booking' | 'Other';
  estimatedDate?: string;
  estimatedAttendees?: string;
  selectedServices: string[];
  message: string;
}
