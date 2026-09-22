import { Artist, EventService, FestivalEvent } from '../types';

export const COMPANY_INFO = {
  name: 'Gig Big',
  legalName: 'Gig Big Pty Ltd',
  foundedYear: 2014,
  tagline: 'Creativity come to life',
  description:
    'Gig Big is an established events company that has been curating live music experiences since 2014. We produce regional arts events, showcasing diverse talent and enriching regional communities through music, culture, and creativity.',
  phone: '+61 490 330 196',
  email: 'ben.lewis@gigbig.com.au',
  address: 'Hyde St, Bellingen NSW 2454',
  region: 'Regional NSW & NSW North Coast',
  countryAcknowledgment:
    'Gig Big acknowledges the Traditional Custodians of Country throughout Australia, in particular the Gumbaynggirr people on whose lands we live and create festivals. We pay our deep respects to Elders past, present, and emerging.',
  founder: {
    name: 'Ben Lewis',
    title: 'Founder & Managing Director',
    image:
      'https://static.wixstatic.com/media/2da7b9_c5e338b428504110bc897706d12d5b6a~mv2.jpg/v1/crop/x_444,y_0,w_883,h_1143/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/Ben%20Lewis.jpg',
    bio: [
      'Gig Big boss hog Ben Lewis is an unapologetic music lover — and a serious marketing and events wiz.',
      'Since launching in 2014, Gig Big has evolved from producing boutique events and campaigns for select clients into a leading regional events company, now owning and operating two flagship multi-day festivals in NSW.',
      'The Gig Big crew are industry pros with deep experience across event operations, commercial partnerships, marketing and product development, artist curation, people and contractor management, liquor licensing and hospitality operations, production, and logistics.',
      'When he’s not running festivals, Ben can usually be found hanging with his family, catching waves, or enjoying a cold beer with good mates.',
      '“Get in touch, peeps — we love bringing good music and good people together.”'
    ]
  },
  stats: [
    { value: '2014', label: 'Established', sub: 'Over a decade of excellence' },
    { value: '2', label: 'Flagship Festivals', sub: 'Multi-day NSW regional icons' },
    { value: '150+', label: 'Artists Programmed', sub: 'From national legends to rising talent' },
    { value: '100%', label: 'Turnkey Delivery', sub: 'End-to-end event management' }
  ]
};

export const EVENT_SERVICES: EventService[] = [
  {
    id: 'project-management',
    title: 'Project & Site Management',
    shortDesc: 'Comprehensive timeline planning, budget oversight, and flawless on-site event execution.',
    fullDesc: 'End-to-end project planning, cross-functional site management, permit navigation, council liaison, and schedule sequencing from greenfield staging to pack-down.',
    icon: 'CalendarCheck2',
    deliverables: [
      'Detailed event operations manuals & run sheets',
      'Local council approval & DA documentation',
      'Traffic management & parking coordination',
      'On-site event control center management'
    ]
  },
  {
    id: 'artist-curation',
    title: 'Artist Programming & Curation',
    shortDesc: 'Tailored lineups spanning all genres, demographic-focused booking, and contract administration.',
    fullDesc: 'Curating festival lineups designed to meet your desired demographic. We book top-tier national touring headliners down to regional emerging gems with dedicated commitments to First Nations and gender-balanced representation.',
    icon: 'Music2',
    deliverables: [
      'Lineup strategy, booking negotiations & contracting',
      'Full artist advance & technical rider coordination',
      'Artist liaison, transport & hospitality rider delivery',
      'Stage management & backstage hospitality coordination'
    ]
  },
  {
    id: 'liquor-hospitality',
    title: 'Liquor Licensing & Hospitality Operations',
    shortDesc: 'End-to-end bar logistics, liquor licensing compliance, point of sale, and food vendor curation.',
    fullDesc: 'Full liquor licensing compliance under NSW regulations, curated artisan food truck villages, bar infrastructure setup, point-of-sale deployment, and sustainable waste streams.',
    icon: 'Wine',
    deliverables: [
      'NSW Liquor licensing application & licensee services',
      'Turnkey high-volume festival bars & POS systems',
      'Local culinary & craft beverage vendor curation',
      'Responsible Service of Alcohol (RSA) marshals & auditing'
    ]
  },
  {
    id: 'production-technical',
    title: 'Production, Audio & Stage Rigging',
    shortDesc: 'World-class sound reinforcement, festival lighting rigs, LED staging, and power distribution.',
    fullDesc: 'From intimate acoustic stages to multi-stage outdoor amphitheaters, we supply premium PA systems, touring audio engineers, dynamic light shows, and certified temporary power distribution.',
    icon: 'Sliders',
    deliverables: [
      'Concert-grade line array audio & monitor packages',
      'Festival lighting, laser arrays & atmospheric effects',
      'Stage builds, marquee structures & crowd barrier fences',
      'Generator power distribution & backup redundancy'
    ]
  },
  {
    id: 'whs-risk',
    title: 'Work, Health & Safety (WHS)',
    shortDesc: 'Strict safety auditing, emergency management planning, security, and crowd safety.',
    fullDesc: 'Comprehensive risk assessments, crowd dynamics modeling, emergency evacuation procedures, licensed crowd controllers, and first aid response centers.',
    icon: 'ShieldCheck',
    deliverables: [
      'Detailed Event Risk Assessment & Management Plans (RAMP)',
      'Security & crowd control procurement & briefing',
      'Emergency response coordination with Police, Fire & Ambulance',
      'Medical triage & first aid deployment'
    ]
  },
  {
    id: 'marketing-partnerships',
    title: 'Marketing, Ticketing & Growth',
    shortDesc: 'Targeted digital campaigns, branding, ticketing partner setup, and commercial sponsorship.',
    fullDesc: 'Drive ticket sellouts with high-converting social campaigns, press outreach, festival branding, VIP experiences, and win-win corporate and government partnership development.',
    icon: 'TrendingUp',
    deliverables: [
      'Multichannel digital marketing & social ad strategy',
      'Ticketing setup, dynamic tier pricing & scanning gates',
      'Sponsorship pitch deck creation & brand activations',
      'PR, press releases & regional media coverage'
    ]
  },
  {
    id: 'funding-grants',
    title: 'Funding Acquisition & Grant Support',
    shortDesc: 'Securing state and federal arts funding, regional tourism grants, and community sponsorships.',
    fullDesc: 'Expertise in securing vital arts and regional event grants, such as NSW Government Office for the Arts, Regional Tourism Activation Funds, and regional council economic development grants.',
    icon: 'Award',
    deliverables: [
      'Grant research, eligibility evaluation & strategy',
      'Grant application drafting & financial modeling',
      'Grant milestone reporting & post-event acquittal',
      'Economic impact assessment for stakeholders'
    ]
  },
  {
    id: 'supply-logistics',
    title: 'Supply Chain & Site Logistics',
    shortDesc: 'Sourcing heavy plant, sanitation, fencing, waste management, and site amenities.',
    fullDesc: 'Turnkey site infrastructure logistics including portable restrooms, showers, waste recycling diverters, telehandlers, lighting towers, and two-way radio comms.',
    icon: 'Truck',
    deliverables: [
      'Site fencing, access gates & accreditation wristbands',
      'Eco-friendly waste management & container deposit recycling',
      'Plant machinery (telehandlers, buggies, tower lights)',
      'Radio communication networks & onsite Wi-Fi mesh'
    ]
  }
];

export const ARTISTS_ROSTER: Artist[] = [
  {
    id: 'wolfmother',
    name: 'Wolfmother',
    genre: 'Rock & Indie',
    role: 'Grammy-Winning Hard Rock Band',
    image: 'https://static.wixstatic.com/media/2da7b9_b84624f135df42f3b4ff40d29cbbb4ef~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/Wolfmother.jpg',
    featured: true,
    notableTracksOrCredits: 'Woman, Joker & The Thief',
    bio: 'Multi-platinum international rock icons led by Andrew Stockdale, delivering high-voltage festival headlining anthems across the globe.'
  },
  {
    id: 'baker-boy',
    name: 'Baker Boy',
    genre: 'Hip Hop & Urban',
    role: 'Young Australian of the Year / ARIA Winner',
    image: 'https://static.wixstatic.com/media/2da7b9_28651a667e0742aeae506420bf7e904d~mv2.jpeg/v1/fit/w_960,h_642,q_90,enc_avif,quality_auto/2da7b9_28651a667e0742aeae506420bf7e904d~mv2.jpeg',
    featured: true,
    notableTracksOrCredits: 'Cool as Hell, Meditjin, Cloud 9',
    bio: 'The Fresh Prince of Arnhem Land — a proud Yolŋu artist, rapper, dancer and electrifying performer bridging cultures with unmatched energy.'
  },
  {
    id: 'you-am-i',
    name: 'You Am I',
    genre: 'Rock & Indie',
    role: 'Legendary Australian Alternative Rock',
    image: 'https://static.wixstatic.com/media/2da7b9_5571c3f01a6c45368094d8f33520a8f5~mv2.jpg/v1/fit/w_480,h_720,q_90,enc_avif,quality_auto/You%20Am%20I.jpg',
    featured: true,
    notableTracksOrCredits: 'Heavy Heart, Berlin Chair',
    bio: 'One of Australia’s most celebrated rock institutions with ten ARIA awards, fronted by the magnetic Tim Rogers.'
  },
  {
    id: 'phil-jamieson',
    name: 'Phil Jamieson',
    genre: 'Rock & Indie',
    role: 'Grinspoon Frontman & Solo Artist',
    image: 'https://static.wixstatic.com/media/2da7b9_081ff0f04a264d69bf6194a468c238f3~mv2.jpg/v1/fit/w_960,h_638,q_90,enc_avif,quality_auto/081ff0f04a264d69bf6194a468c238f3.jpg',
    featured: true,
    notableTracksOrCredits: 'Chemical Heart, Somebody Else',
    bio: 'The charismatic rock icon known for his searing vocal range, solo releases, and decades of headlining festival circuits.'
  },
  {
    id: 'judith-lucy',
    name: 'Judith Lucy',
    genre: 'Comedy',
    role: 'Master Comedian & Author',
    image: 'https://static.wixstatic.com/media/2da7b9_c93596cf09a845a5a321b7df97f27096~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/Judith%20Lucy.jpg',
    featured: true,
    notableTracksOrCredits: 'Judith Lucy’s Spiritual Journey, Disgraced!',
    bio: 'One of Australia’s most revered and delightfully razor-sharp stand-up comedians, selling out theaters nationwide.'
  },
  {
    id: 'dave-hughes',
    name: 'Dave Hughes',
    genre: 'Comedy',
    role: 'Beloved National Comedian & Broadcaster',
    image: 'https://static.wixstatic.com/media/2da7b9_6f68157933894f97a8751f752b89307b~mv2.jpg/v1/fit/w_593,h_395,q_90,enc_avif,quality_auto/Dave%20Hughes.jpg',
    featured: true,
    notableTracksOrCredits: 'Hughesy, We Have a Problem, The Masked Singer',
    bio: 'Australia’s favorite laconic comedic storyteller, delivering relatable belly laughs to audiences of thousands.'
  },
  {
    id: 'regurgitator',
    name: 'Regurgitator',
    genre: 'Rock & Indie',
    role: 'Genre-Defying Alternative Rock Masters',
    image: 'https://static.wixstatic.com/media/2da7b9_757c585ca07c4d578a1d2b0bfd070833~mv2.jpg/v1/fit/w_766,h_960,q_90,enc_avif,quality_auto/757c585ca07c4d578a1d2b0bfd070833.jpg',
    notableTracksOrCredits: '! (The Song Formerly Known As), Polyester Girl',
    bio: 'The boundary-pushing Brisbane legends known for their electro-punk irreverence and unstoppable live shows.'
  },
  {
    id: 'boo-seeka',
    name: 'Boo Seeka',
    genre: 'Electronic & Pop',
    role: 'Electro-Soul & Indie Groove Duo',
    image: 'https://static.wixstatic.com/media/2da7b9_28f5e3207ced44598206c31edb38863d~mv2.jpg/v1/fit/w_922,h_959,q_90,enc_avif,quality_auto/28f5e3207ced44598206c31edb38863d.jpg',
    notableTracksOrCredits: 'Deception Bay, Does This Last, Tripwire',
    bio: 'Layered synths, infectious beats, and velvety soulful hooks that transform festival stages into massive dance parties.'
  },
  {
    id: 'the-bamboos',
    name: 'The Bamboos',
    genre: 'Roots & Blues',
    role: 'Premier Modern Funk & Soul Orchestra',
    image: 'https://static.wixstatic.com/media/2da7b9_c63c89c8cab14fe899440808e70d5828~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/The%20Bamboos.jpg',
    notableTracksOrCredits: 'On The Floor, Tighten Up',
    bio: 'Recognized worldwide as one of the tightest and most energetic live funk and soul acts in contemporary music.'
  },
  {
    id: 'the-buoys',
    name: 'The Buoys',
    genre: 'Rock & Indie',
    role: 'All-Female Indie Punk Powerhouse',
    image: 'https://static.wixstatic.com/media/2da7b9_ec37f72afa7f4891be6e03cc9d5a5b75~mv2.jpg/v1/fit/w_960,h_642,q_90,enc_avif,quality_auto/The%20Buoys.jpg',
    notableTracksOrCredits: 'Lie To Me Again, Linda, Bad Habit',
    bio: 'Fiery, honest, and fiercely energetic garage rock that is currently storming festival main stages across Australia.'
  },
  {
    id: 'the-beautiful-girls',
    name: 'The Beautiful Girls',
    genre: 'Roots & Blues',
    role: 'Coastal Roots, Dub & Acoustic Pioneers',
    image: 'https://static.wixstatic.com/media/2da7b9_06f6d82eb5b44877a5f01a358367f2de~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/The%20Beautiful%20Girls.jpg',
    notableTracksOrCredits: 'Periscopes, Learn Yourself, Morning Sun',
    bio: 'Mat McHugh’s soul-stirring blend of reggae, coastal folk, dub, and hip-hop beats that resonate deeply with regional audiences.'
  },
  {
    id: 'geraldine-hickey',
    name: 'Geraldine Hickey',
    genre: 'Comedy',
    role: 'Melbourne Comedy Festival Award Winner',
    image: 'https://static.wixstatic.com/media/2da7b9_5a6f5219216e4b5a9dad9e577f93ba95~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/Geraldine%20Hickey.jpg',
    notableTracksOrCredits: 'What A Surprise, Things Are Going Well',
    bio: 'Smart, understated, and hilarious comedy that won the prestigious Most Outstanding Show award at MICF.'
  },
  {
    id: 'drapht',
    name: 'Drapht',
    genre: 'Hip Hop & Urban',
    role: 'Multi-ARIA Award Winning Australian Rapper',
    image: 'https://static.wixstatic.com/media/2da7b9_6d4d8a2134b64fd6aae618a0cde747d2~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/6d4d8a2134b64fd6aae618a0cde747d2.jpg',
    notableTracksOrCredits: 'Rapunzel, Jimmy Recard, Bali Party',
    bio: 'Western Australian hip-hop legend whose clever lyricism and bouncy party vibes have earned him a permanent place in Aussie music history.'
  },
  {
    id: 'butterfingers',
    name: 'Butterfingers',
    genre: 'Hip Hop & Urban',
    role: 'Cult Hip-Hop & Rap Rock Trio',
    image: 'https://static.wixstatic.com/media/2da7b9_3a1481f896a840929088e69478ed701e~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/3a1481f896a840929088e69478ed701e.jpg',
    notableTracksOrCredits: 'Everytime, I Love Work, Figjam',
    bio: 'Energetic, tongue-in-cheek hip hop masters bringing riotous stage charisma and high-speed wordplay.'
  },
  {
    id: 'barkaa',
    name: 'Barkaa',
    genre: 'Hip Hop & Urban',
    role: 'Malyangapa, Barkindji Hip-Hop Queen',
    image: 'https://static.wixstatic.com/media/2da7b9_14e8402ab9f24d42bfb8752e38b91b6c~mv2_d_4032_3024_s_4_2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/Barkaa.jpg',
    notableTracksOrCredits: 'For My Tiddas, King Brown, Blak Matriarchy',
    bio: 'A fierce, uncompromising voice named by GQ as the new matriarch of Australian rap, bringing power and cultural truth to festival stages.'
  }
];

export const FESTIVAL_PORTFOLIO: FestivalEvent[] = [
  {
    id: 'river-sounds',
    title: 'River Sounds',
    subtitle: 'Flagship Multi-Day Contemporary Music Festival',
    location: 'Bellingen Showground, NSW',
    countryAck: 'Gumbaynggirr Country',
    dateRange: 'May 15-16, 2026',
    isFlagship: true,
    status: 'Upcoming',
    externalUrl: 'https://www.riversounds.com.au',
    description:
      'River Sounds is a multi-day contemporary music festival held annually in Bellingen, NSW — a vibrant creative community nestled on Gumbaynggirr Country.',
    fullDescription:
      'Since its debut in 2022, River Sounds has quickly established itself as one of regional NSW’s most exciting live music events, combining world-class production with a uniquely local spirit. The festival celebrates diversity in music and culture, featuring a carefully curated lineup of established and emerging Australian artists across multiple genres. Alongside main stage performances, River Sounds also includes immersive art installations, local food and beverage offerings, community workshops, and family-friendly entertainment.',
    coverImage:
      'https://static.wixstatic.com/media/2da7b9_3c98bace39004b2fb3bc7dbc5ee33203~mv2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/0B5A1493.jpg',
    gallery: [
      'https://static.wixstatic.com/media/2da7b9_3c98bace39004b2fb3bc7dbc5ee33203~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/0B5A1493.jpg',
      'https://static.wixstatic.com/media/2da7b9_3a110c79b2c4490982dcc910f60b5559~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/IMG_2704.jpg',
      'https://static.wixstatic.com/media/2da7b9_b90bdca1df054a1ea95c7eb43ebad9d6~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/DSC09081.jpg',
      'https://static.wixstatic.com/media/2da7b9_a5d5181c9bd541f5894dd42428e1ce38~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/a5d5181c9bd541f5894dd42428e1ce38.jpg'
    ],
    highlights: [
      'Supported by NSW Government Office for the Arts ($128k Grant)',
      'Multiple stages featuring rock, electronic, soul, and First Nations voices',
      'Immersive light installations under heritage fig trees',
      'Gourmet North Coast food vendors & regional craft breweries'
    ]
  },
  {
    id: 'the-big-bonanza',
    title: 'The Big Bonanza',
    subtitle: 'Music, Comedy & Food Fusion Festival',
    location: 'Coffs Coast & Regional NSW',
    dateRange: 'Annual Spring Edition',
    status: 'Annual',
    description:
      'A boutique weekender blending top Australian stand-up comedy, headlining live music, craft beers, and regional culinary stars.',
    fullDescription:
      'The Big Bonanza delivers pure feel-good energy. Bringing together arena-level comedians with beloved Australian bands and acoustic stages, The Big Bonanza offers an intimate festival experience that treats festival-goers to high-end hospitality without the hassle.',
    coverImage:
      'https://static.wixstatic.com/media/2da7b9_dd603a5ac1e44d29aab390d3c2e8e6e6~mv2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/TBB_4.jpg',
    gallery: [
      'https://static.wixstatic.com/media/2da7b9_dd603a5ac1e44d29aab390d3c2e8e6e6~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/TBB_4.jpg',
      'https://static.wixstatic.com/media/2da7b9_87f90571be774c23928b059e89eadea5~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/87f90571be774c23928b059e89eadea5.jpg',
      'https://static.wixstatic.com/media/2da7b9_65e7e8dcdd814617977bbc7dd49b995d~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/65e7e8dcdd814617977bbc7dd49b995d.jpg'
    ],
    highlights: [
      'Headlined by comedy greats Judith Lucy & Dave Hughes',
      'Dual live stages with seamless zero-clash scheduling',
      'Showcasing local craft breweries & artisanal distilleries',
      'Family-friendly lawn games & bespoke lounge bars'
    ]
  },
  {
    id: 'fed-bluesfest',
    title: 'Fed BluesFest',
    subtitle: 'Heartland Blues, Roots & Soul Celebration',
    location: 'Federal & Northern Rivers, NSW',
    dateRange: 'Autumn Annual',
    status: 'Annual',
    description:
      'An authentic grassroots celebration honoring raw blues guitar, smoky soul vocals, and heartfelt community gathering.',
    fullDescription:
      'Fed BluesFest is the gathering of soul purists and roots lovers. Held among the lush valleys of the Northern Rivers, this boutique one-day festival draws pilgrims from across the state for unmatched guitar virtuosity, low-and-slow barbecue, and warm rural hospitality.',
    coverImage:
      'https://static.wixstatic.com/media/2da7b9_e101c6ab36db402388e4da835debcd01~mv2_d_2048_1365_s_2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/FedBluesFest.jpg',
    gallery: [
      'https://static.wixstatic.com/media/2da7b9_e101c6ab36db402388e4da835debcd01~mv2_d_2048_1365_s_2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/FedBluesFest.jpg',
      'https://static.wixstatic.com/media/2da7b9_14af9cd610254a77b2877f17c3b4b20e~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/14af9cd610254a77b2877f17c3b4b20e.jpg',
      'https://static.wixstatic.com/media/2da7b9_8539ea4b5934439c9a1e62b63bb6e5ce~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/8539ea4b5934439c9a1e62b63bb6e5ce.jpg'
    ],
    highlights: [
      'Legendary Australian acoustic & electric blues maestros',
      'Community hall ambiance paired with concert-grade acoustics',
      'Low & slow smoked brisket and organic ciders',
      'Supporting regional music charities and youth guitar programs'
    ]
  },
  {
    id: 'ciderfest-brew-day-out',
    title: 'CiderFest & Brew Day Out',
    subtitle: 'Craft Beverage & Live Sound Extravaganzas',
    location: 'NSW North Coast Venues',
    dateRange: 'Seasonal Showcase Events',
    status: 'Annual',
    description:
      'A paired series of daytime music & craft beverage gatherings pairing energetic indie rockers with independent breweries and cideries.',
    fullDescription:
      'Brew Day Out and CiderFest celebrate the golden synergy of sun, sound, and froth. Featuring tasting pavilions from over 20 independent NSW brew houses alongside high-energy sets from bands like Skegss, Boo Seeka, and local breakthrough artists.',
    coverImage:
      'https://static.wixstatic.com/media/2da7b9_8c88e25f1be54307982a20aca98c4f18~mv2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/BrewDayOut.jpg',
    gallery: [
      'https://static.wixstatic.com/media/2da7b9_8c88e25f1be54307982a20aca98c4f18~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/BrewDayOut.jpg',
      'https://static.wixstatic.com/media/2da7b9_b41590e9ba24441385141d5cf8f49bee~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/b41590e9ba24441385141d5cf8f49bee.jpg',
      'https://static.wixstatic.com/media/2da7b9_46cae3e38a1147ada6bef558a2e192a1~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/46cae3e38a1147ada6bef558a2e192a1.jpg'
    ],
    highlights: [
      'Over 40 limited release craft beers, ciders and seltzers',
      'High-tempo indie rock & feel-good DJ sets',
      'Tasting tokens and meet-the-brewer masterclasses',
      'Zero single-use plastics and reusable branded cups'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote:
      'Gig Big transformed our venue programming. Their artist connections, flawless logistics, and understanding of regional crowds took our ticket sales from modest to complete sellouts.',
    author: 'Mark Henderson',
    role: 'Regional Cultural Centre Director',
    location: 'Mid North Coast, NSW'
  },
  {
    quote:
      'Working with Ben and the Gig Big team on River Sounds was a masterclass in festival delivery. From council DA approvals and WHS to artist hospitality, they handled every detail with calm professionalism.',
    author: 'Sarah O’Connor',
    role: 'Festival Production Partner',
    location: 'Bellingen, NSW'
  },
  {
    quote:
      'Gig Big has a true passion for live music and regional Australia. Their commitment to First Nations talent and gender balance isn’t just lip service — it shines through on every stage they program.',
    author: 'Marcus Walker',
    role: 'Touring Artist Manager',
    location: 'Sydney & Byron Bay'
  }
];
