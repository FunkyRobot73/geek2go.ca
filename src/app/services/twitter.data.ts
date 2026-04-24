export interface Transmission {
  id: number;
  timestamp: string;
  category: string;
  message: string;
  status: 'CLEAR' | 'ENCRYPTED' | 'DECRYPTING';
}

export const PROJECT_UPDATES: Transmission[] = [
  {
    id: 7,
    timestamp: "24-APR-2026 11:45",
    category: "NEW_FEATURE",
    message: "The Deal Finder (Bounty Board) is now live! Go find some tech gear at a good price.",
    status: 'CLEAR'
  },
  {
    id: 6,
    timestamp: "24-APR-2026 11:15",
    category: "AI_STUFF",
    message: "Added the AI Checker tool to the home page. See if your computer is ready for local AI.",
    status: 'CLEAR'
  },
  {
    id: 1,
    timestamp: "09-APR-2026 14:15",
    category: "UPDATE",
    message: "Finished moving everything to the new 70/30 layout. Everything looks much cleaner now.",
    status: 'CLEAR'
  },
  {
    id: 2,
    timestamp: "08-APR-2026 23:45",
    category: "FIX",
    message: "Fixed a couple of memory leaks in the blog feed. Site should be faster now.",
    status: 'CLEAR'
  },
  {
    id: 3,
    timestamp: "07-APR-2026 18:22",
    category: "BLOG",
    message: "Just posted a new article: 'The Art of the IT Side-Hustle'. Check it out in the blog section.",
    status: 'CLEAR'
  },
  {
    id: 4,
    timestamp: "06-APR-2026 11:05",
    category: "HARDWARE",
    message: "Just finished a custom PC build for a local client. Turned out great!",
    status: 'CLEAR'
  },
  {
    id: 5,
    timestamp: "05-APR-2026 15:30",
    category: "PHOTOS",
    message: "Uploaded some new photos to the gallery. Take a look at some of my recent projects.",
    status: 'CLEAR'
  }
];
