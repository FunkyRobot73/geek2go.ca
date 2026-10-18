export interface Transmission {
  id: number;
  timestamp: string;
  category: string;
  message: string;
  status: string;
  link?: string;
}

export const PROJECT_UPDATES: Transmission[] = [
  {
    id: 1,
    category: "#1 LIBREOFFICE",
    timestamp: "VS. MICROSOFT 365",
    message: "Full office suite for word processing, spreadsheets, and presentations. Compatible with Word & Excel files with zero annual subscription.",
    status: "~$100/YR",
    link: "https://www.libreoffice.org"
  },
  {
    id: 2,
    category: "#2 GIMP & INKSCAPE",
    timestamp: "VS. ADOBE CREATIVE CLOUD",
    message: "Pro-grade photo retouching, image composition, and vector graphics design without Adobe's hefty monthly fees.",
    status: "~$260/YR",
    link: "https://www.gimp.org"
  },
  {
    id: 3,
    category: "#3 KDENLIVE",
    timestamp: "VS. PREMIERE PRO",
    message: "Powerful multi-track video editor for Linux, Windows, and Mac. No watermarks, no paywalls, and runs great on older hardware.",
    status: "~$260/YR",
    link: "https://kdenlive.org"
  },
  {
    id: 4,
    category: "#4 NEXTCLOUD",
    timestamp: "VS. DROPBOX & GOOGLE ONE",
    message: "Turn an old PC into your own private cloud for file syncing, photos, calendars, and docs—with zero monthly storage fees.",
    status: "~$120/YR",
    link: "https://nextcloud.com"
  },
  {
    id: 5,
    category: "#5 BITWARDEN",
    timestamp: "VS. 1PASSWORD & LASTPASS",
    message: "Open-source password manager that keeps your logins encrypted and synced across all your phones, browsers, and PCs.",
    status: "~$50/YR",
    link: "https://bitwarden.com"
  }
];
