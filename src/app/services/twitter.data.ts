export interface Transmission {
  id: number;
  name: string;
  replaces: string;
  icon: string;
  savings: string;
  timestamp: string;
  category: string;
  message: string;
  status: string;
  link: string;
}

export const PROJECT_UPDATES: Transmission[] = [
  {
    id: 1,
    name: "LibreOffice",
    replaces: "Microsoft 365",
    icon: "fa-solid fa-file-word",
    savings: "$100/yr",
    category: "#1 LIBREOFFICE",
    timestamp: "VS. MICROSOFT 365",
    message: "Full office suite for docs, spreadsheets & slides—100% compatible with Word and Excel.",
    status: "~$100/YR",
    link: "https://www.libreoffice.org"
  },
  {
    id: 2,
    name: "GIMP & Inkscape",
    replaces: "Adobe Creative Cloud",
    icon: "fa-solid fa-palette",
    savings: "$260/yr",
    category: "#2 GIMP & INKSCAPE",
    timestamp: "VS. ADOBE CREATIVE CLOUD",
    message: "Pro photo retouching, graphic design, and vector illustration with zero monthly fees.",
    status: "~$260/YR",
    link: "https://www.gimp.org"
  },
  {
    id: 3,
    name: "Kdenlive",
    replaces: "Adobe Premiere Pro",
    icon: "fa-solid fa-film",
    savings: "$260/yr",
    category: "#3 KDENLIVE",
    timestamp: "VS. PREMIERE PRO",
    message: "Multi-track 4K video editing with no watermarks, no paywalls, and low hardware demands.",
    status: "~$260/YR",
    link: "https://kdenlive.org"
  },
  {
    id: 4,
    name: "Nextcloud",
    replaces: "Dropbox & Google One",
    icon: "fa-solid fa-cloud",
    savings: "$120/yr",
    category: "#4 NEXTCLOUD",
    timestamp: "VS. DROPBOX & GOOGLE ONE",
    message: "Turn an old PC into your own private cloud for photos, files, and calendars.",
    status: "~$120/YR",
    link: "https://nextcloud.com"
  },
  {
    id: 5,
    name: "Bitwarden",
    replaces: "1Password & LastPass",
    icon: "fa-solid fa-shield-halved",
    savings: "$50/yr",
    category: "#5 BITWARDEN",
    timestamp: "VS. 1PASSWORD & LASTPASS",
    message: "Open-source encrypted password manager synced across all your phones, browsers & PCs.",
    status: "~$50/YR",
    link: "https://bitwarden.com"
  }
];
