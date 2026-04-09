export interface Transmission {
  id: number;
  timestamp: string;
  category: string;
  message: string;
  status: 'CLEAR' | 'ENCRYPTED' | 'DECRYPTING';
}

export const TACTICAL_TRANSMISSIONS: Transmission[] = [
  {
    id: 1,
    timestamp: "09-APR-2026 14:15",
    category: "SYS_UPDATE",
    message: "Master Console migration successfully initiated. All sub-modules (About, Services, Contact) now synchronized to 70/30 grid layout.",
    status: 'CLEAR'
  },
  {
    id: 2,
    timestamp: "08-APR-2026 23:45",
    category: "OPS_LOG",
    message: "Late-night server forge successful. Memory leaks in the Intelligence Feed have been neutralized.",
    status: 'CLEAR'
  },
  {
    id: 3,
    timestamp: "07-APR-2026 18:22",
    category: "INTEL_REPORT",
    message: "New blog article uploaded to the Nerd Feed: 'The Art of the IT Side-Hustle'. Available in the main archive.",
    status: 'CLEAR'
  },
  {
    id: 4,
    timestamp: "06-APR-2026 11:05",
    category: "HARDWARE_FORGE",
    message: "Custom PC build for Sector 7 client completed. Benchmarks exceeding expectations. OS re-installation protocol active.",
    status: 'CLEAR'
  },
  {
    id: 5,
    timestamp: "05-APR-2026 15:30",
    category: "COMM_TEST",
    message: "New social gallery photos uploaded to the archive. Community event captures are now live in the Social Gallery section.",
    status: 'CLEAR'
  }
];
