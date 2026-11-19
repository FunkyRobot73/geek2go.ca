import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItService } from 'src/app/services/itservices.service';
import { SeoService } from 'src/app/services/seo.service';


@Component({
  selector: 'app-services',
  imports: [RouterModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  packages: ItService[] = [];
  selectedPackage: ItService | null = null;
  showBookingForm = false;

  addOns: { description: string; price: number }[] = [];
  services = [
    "Open Source",
    "3D Printing",
    "Hardware",
    "Software",
    "WebDev",
    "Recycling",
    "Resale",
    "Training",
    "AI Help",
    "Rentals",
    "Other"
  ];
  activeTab: string = 'Open Source';

  get filteredPackages(): ItService[] {
    return this.packages.filter(pkg => pkg.service === this.activeTab);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.selectedPackage = null; // Clear selection when switching tabs? Optional but good UX.
  }


  ngOnInit() {
    this.packages = [
      {
        id: 1, title: 'Website Development',
        description: 'Professional website development services to create a stunning online presence for your business.',
        details1: 'Custom website design tailored to your brand.',
        details2: 'Responsive design for optimal viewing on all devices.',
        details3: 'SEO-friendly structure to improve search engine rankings.',
        imageSample: 'assets/services/webdev01.webp',
        icon: 'fas fa-laptop-code',
        service: 'WebDev',
        price: 399
      },
      {
        id: 2, title: 'Wordpress Development',
        description: 'Expert WordPress development services to build and manage your website with ease.',
        details1: 'Custom WordPress themes and plugins.',
        details2: 'Easy-to-use content management system.',
        details3: 'Regular updates and maintenance for security and performance.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fab fa-wordpress',
        service: 'WebDev',
        price: 399
      },
      {
        id: 3, title: 'SEO Services',
        description: 'Comprehensive SEO services to boost your website\'s visibility and drive organic traffic.',
        details1: 'Keyword research and optimization.',
        details2: 'On-page and off-page SEO strategies.',
        details3: 'Regular performance reports and analytics.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-search',
        service: 'WebDev',
        price: 399
      },
      {
        id: 4, title: 'Google Ranking Improvement',
        description: 'Specialized services to enhance your website\'s ranking on Google and other search engines.',
        details1: 'Advanced SEO techniques and strategies.',
        details2: 'Content optimization and link building.',
        details3: 'Continuous monitoring and adjustments for optimal results.',
        imageSample: 'assets/services/webdev04.webp',
        icon: 'fas fa-chart-line',
        service: 'WebDev',
        price: 399
      },
      {
        id: 5, title: 'Virus Protection & Removal',
        description: 'Reliable virus protection and removal services to keep your systems safe and secure.',
        details1: 'Comprehensive virus and malware scans.',
        details2: 'Effective removal of threats and infections.',
        details3: 'Ongoing protection and security updates.',
        imageSample: 'assets/services/webdev06.webp',
        icon: 'fas fa-shield-alt',
        service: 'Software',
        price: 399
      },
      {
        id: 6, title: 'Data Security',
        description: 'Robust data security solutions to protect your sensitive information from unauthorized access.',
        details1: 'Encryption and secure data storage.',
        details2: 'Access control and authentication measures.',
        details3: 'Regular security audits and assessments.',
        imageSample: 'assets/services/webdev08.webp',
        icon: 'fas fa-lock',
        service: 'Software',
        price: 399
      },
      {
        id: 7, title: 'Data Backup & Recovery',
        description: 'Reliable data backup and recovery services to ensure your information is always safe and accessible.',
        details1: 'Automated backup solutions for peace of mind.',
        details2: 'Quick and efficient data recovery processes.',
        details3: 'Regular backup testing and verification.',
        imageSample: 'assets/services/webdev09.webp',
        icon: 'fas fa-database',
        service: 'Software',
        price: 399
      },
      {
        id: 8, title: 'General Tech Support',
        description: 'Comprehensive tech support services to assist with all your technology needs.',
        details1: 'Troubleshooting and problem resolution.',
        details2: 'Software and hardware support.',
        details3: 'Remote and on-site assistance options.',
        imageSample: 'assets/services/webdev10.webp',
        icon: 'fas fa-headset',
        service: 'Training',
        price: 399
      },
      {
        id: 9, title: 'Graphic Design',
        description: 'Creative graphic design services to enhance your brand\'s visual identity.',
        details1: 'Custom logo and branding design.',
        details2: 'Marketing materials and promotional graphics.',
        details3: 'Digital and print design solutions.',
        imageSample: 'assets/services/webdev11.webp',
        icon: 'fas fa-paint-brush',
        service: 'WebDev',
        price: 399
      },
      {
        id: 10, title: 'Social Media Management',
        description: 'Effective social media management services to grow your online presence and engage with your audience.',
        details1: 'Content creation and scheduling.',
        details2: 'Audience engagement and community management.',
        details3: 'Performance tracking and analytics.',
        imageSample: 'assets/services/webdev12.webp',
        icon: 'fas fa-thumbs-up',
        service: 'WebDev',
        price: 399
      },
      {
        id: 11, title: 'IT Consulting',
        description: 'Expert IT consulting services to help you develop and implement effective technology strategies.',
        details1: 'Technology assessments and recommendations.',
        details2: 'Strategic planning and implementation support.',
        details3: 'Ongoing guidance and advisory services.',
        imageSample: 'assets/services/webdev13.webp',
        icon: 'fas fa-lightbulb',
        service: 'Training',
        price: 399
      },

      {
        id: 13, title: 'Custom Software Development',
        description: 'Tailored software development services to meet your unique business needs.',
        details1: 'Custom application design and development.',
        details2: 'Integration with existing systems and platforms.',
        details3: 'Ongoing support and maintenance.',
        imageSample: 'assets/services/webdev01.webp',
        icon: 'fas fa-code',
        service: 'Software',
        price: 399
      },
      {
        id: 14, title: 'Network Setup & Maintenance',
        description: 'Reliable network setup and maintenance services to ensure your systems are always connected and secure.',
        details1: 'Network design and installation.',
        details2: 'Ongoing monitoring and maintenance.',
        details3: 'Troubleshooting and support services.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-network-wired',
        service: 'Hardware',
        price: 399
      },
      {
        id: 15, title: 'Cloud Services',
        description: 'Comprehensive cloud services to help you leverage the power of the cloud for your business.',
        details1: 'Cloud migration and deployment.',
        details2: 'Cloud storage and backup solutions.',
        details3: 'Ongoing cloud management and support.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-cloud',
        service: 'Software',
        price: 399
      },
      {
        id: 16, title: 'Tech Training & Support',
        description: 'Empowering your team with tech training and support services to enhance their skills and productivity.',
        details1: 'Customized training programs and workshops.',
        details2: 'Ongoing support and resources.',
        details3: 'Hands-on learning and practical applications.',
        imageSample: 'assets/services/webdev04.webp',
        icon: 'fas fa-chalkboard-teacher',
        service: 'Training',
        price: 399
      },
      {
        id: 17, title: 'More...!',
        description: 'And much more to meet your tech needs. Contact us to learn about our full range of services.',
        details1: 'Tailored solutions for your unique requirements.',
        details2: 'Flexible service options to fit your budget.',
        details3: 'Dedicated support and customer service.',
        imageSample: 'assets/services/webdev06.webp',
        icon: 'fas fa-ellipsis-h',
        service: 'Software',
        price: 399
      },
      {
        id: 18, title: 'Format & Reinstall OS',
        description: 'A great thing to do when your computer is not working properly is to format and reinstall the operating system.  What does that mean?  It means that we will remove all the files and programs from your computer and install a new operating system.  Your PC will be like new!  ',
        details1: 'Your PC will be like new!',
        details2: 'You can sell it now or give it to a friend.',
        details3: 'Why throw it away when you can just format it?',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-hard-drive',
        service: 'Hardware',
        price: 49
      },
      {
        id: 19, title: 'Data Recovery',
        description: 'Data recovery is the process of retrieving lost or deleted data from a storage device.  Not all data can be recovered, but we will try our best to recover your data.',
        details1: 'Recover lost or deleted data.',
        details2: 'Not all data can be recovered.',
        details3: 'Sometimes it takes several days to recover your data.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-hard-drive',
        service: 'Hardware',
        price: 99
      },
      {
        id: 20, title: 'Laptop Recycling',
        description: 'Have and old laptop?  We can help you recycle it.  Specifically we can format it, reinstall an OS, and give it a new for someone else to use.',
        details1: 'Reduce Waste.',
        details2: 'Donate to a kid or charity.',
        details3: 'Use it as a spare or gaming PC.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-hard-drive',
        service: 'Recycling',
        price: 49
      },
      {
        id: 21, title: 'Resell your Old hardware',
        description: 'You would be surprised how much money you can get for your old hardware.  From old computers to printers and scanners.',
        details1: 'Reduce Waste.',
        details2: 'Some older hardware can indeed just be old and worthless but often it can be resold for a good price.',
        details3: 'Parts are often reusable.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-hard-drive',
        service: 'Resale',
        price: 49
      },
      {
        id: 22, title: 'Personal Tech Support',
        description: 'Here is something that we can do for you.  3 Hour Personal Training or Tech Support for $99.  Imagine an all-purpose Tech Handyman that can help you with anything tech related.',
        details1: 'Setting Up just about anything!!!',
        details2: 'Get that damn software to work!!!',
        details3: 'From Basic to Advanced.',
        imageSample: 'assets/services/webdev10.webp',
        icon: 'fas fa-headset',
        service: 'Training',
        price: 99
      },
      {
        id: 23, title: 'Want to Learn some basic AI?',
        description: 'Here is something that we can do for you.  3 Hour Personal Training on how to get started with AI.  You won\'t be some AI Guru at the end but you will know how to use it and how it can help you.',
        details1: 'Stop using it like it\'s google.',
        details2: 'Where to get started.',
        details3: 'How it can help you right now.',
        imageSample: 'assets/services/webdev10.webp',
        icon: 'fas fa-robot',
        service: 'AI Help',
        price: 99
      },
      {
        id: 24, title: 'Custom PC Building',
        description: 'We build custom PCs tailored to your specific needs, whether for gaming, workstation use, or general home use.',
        details1: 'Component selection advice.',
        details2: 'Professional assembly and cable management.',
        details3: 'Stress testing and optimization.',
        imageSample: 'assets/services/webdev13.webp',
        icon: 'fas fa-tools',
        service: 'Hardware',
        price: 149
      },
      {
        id: 25, title: 'Printer Repair',
        description: 'Expert repair services for all types of printers, from inkjet to laser.',
        details1: 'Paper jam removal.',
        details2: 'Printhead cleaning and replacement.',
        details3: 'Connectivity troubleshooting.',
        imageSample: 'assets/services/webdev13.webp',
        icon: 'fas fa-print',
        service: 'Hardware',
        price: 89
      },
      {
        id: 26, title: 'Hardware Upgrades',
        description: 'Boost your computer\'s performance with hardware upgrades.',
        details1: 'RAM memory installation.',
        details2: 'SSD hard drive upgrades.',
        details3: 'Graphics card installation.',
        imageSample: 'assets/services/webdev13.webp',
        icon: 'fas fa-microchip',
        service: 'Hardware',
        price: 59
      },
      {
        id: 27, title: 'Smartphone Recycling',
        description: 'Responsible recycling for old smartphones and mobile devices.',
        details1: 'Data wiping included.',
        details2: 'Environmentally safe disposal.',
        details3: 'Accepting all major brands.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-mobile-alt',
        service: 'Recycling',
        price: 0
      },
      {
        id: 28, title: 'Battery Disposal',
        description: 'Safe disposal of rechargeable and non-rechargeable batteries.',
        details1: 'Prevents environmental contamination.',
        details2: 'Compliant with local regulations.',
        details3: 'Bulk drop-off available.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-battery-full',
        service: 'Recycling',
        price: 5
      },
      {
        id: 29, title: 'Office Equipment Removal',
        description: 'We clear out old office electronics including fax machines and copiers.',
        details1: 'Pickup service available.',
        details2: 'Certificate of recycling provided.',
        details3: 'Heavy lifting included.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-truck-loading',
        service: 'Recycling',
        price: 99
      },
      {
        id: 30, title: 'Data Destruction Services',
        description: 'Secure destruction of hard drives and storage media before recycling.',
        details1: 'Physical drive shredding.',
        details2: 'DoD standard data wipe.',
        details3: 'Verification report.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-eraser',
        service: 'Recycling',
        price: 29
      },
      {
        id: 31, title: 'Eco-Friendly Disposal',
        description: 'General electronics recycling with a focus on zero landfill.',
        details1: 'Recovering precious metals.',
        details2: 'Plastic recycling.',
        details3: 'Supporting green initiatives.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-leaf',
        service: 'Recycling',
        price: 10
      },
      {
        id: 32, title: 'Refurbished Laptops',
        description: 'High-quality refurbished laptops at affordable prices.',
        details1: 'Thoroughly tested and cleaned.',
        details2: 'Fresh OS installation.',
        details3: 'Warranty included.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-laptop',
        service: 'Resale',
        price: 299
      },
      {
        id: 33, title: 'Used Monitors',
        description: 'Various sizes of used monitors in great condition.',
        details1: 'No dead pixels guarantee.',
        details2: 'Cables included.',
        details3: 'Wide range of brands.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-desktop',
        service: 'Resale',
        price: 79
      },
      {
        id: 34, title: 'Second-hand Peripherals',
        description: 'Keyboards, mice, webcams, and more.',
        details1: 'Sanitized and tested.',
        details2: 'Gaming gear available.',
        details3: 'Bundle discounts.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-mouse',
        service: 'Resale',
        price: 15
      },
      {
        id: 35, title: 'Network Gear Resale',
        description: 'Used routers, switches, and modems.',
        details1: 'Enterprise and consumer grade.',
        details2: 'Reset to factory settings.',
        details3: 'Firmware updated.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-wifi',
        service: 'Resale',
        price: 45
      },
      {
        id: 36, title: 'Server Components',
        description: 'Parts for servers including ECC RAM and SAS drives.',
        details1: 'Hard-to-find legacy parts.',
        details2: 'Tested for reliability.',
        details3: 'Bulk purchasing options.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-server',
        service: 'Resale',
        price: 120
      },
      {
        id: 37, title: 'Microsoft Office Mastery',
        description: 'Learn the ins and outs of Word, Excel, and PowerPoint.',
        details1: 'Creating professional documents.',
        details2: 'Advanced Excel formulas.',
        details3: 'Effective presentations.',
        imageSample: 'assets/services/webdev04.webp',
        icon: 'fab fa-microsoft',
        service: 'Training',
        price: 129
      },
      {
        id: 38, title: 'Cybersecurity Awareness',
        description: 'Training on how to stay safe online and recognize threats.',
        details1: 'Identifying phishing emails.',
        details2: 'Password best practices.',
        details3: 'Safe browsing habits.',
        imageSample: 'assets/services/webdev04.webp',
        icon: 'fas fa-user-shield',
        service: 'Training',
        price: 99
      },
      {
        id: 39, title: 'AI for Small Business',
        description: 'How to leverage AI tools to automate tasks and grow your business.',
        details1: 'Marketing automation.',
        details2: 'Customer support chatbots.',
        details3: 'Data analysis with AI.',
        imageSample: 'assets/services/webdev10.webp',
        icon: 'fas fa-robot',
        service: 'AI Help',
        price: 199
      },
      {
        id: 40, title: 'Prompt Engineering Basics',
        description: 'Learn how to write effective prompts for AI models like ChatGPT.',
        details1: 'Getting the results you want.',
        details2: 'Context and formatting.',
        details3: 'Avoiding hallucinations.',
        imageSample: 'assets/services/webdev10.webp',
        icon: 'fas fa-terminal',
        service: 'AI Help',
        price: 149
      },
      {
        id: 41, title: 'Local AI Hubs',
        description: 'Turn your old hardware into a private, in-home AI server with no subscriptions and total privacy.',
        details1: 'Installation of local LLMs (Ollama, LocalAI).',
        details2: 'Hardware optimization for local AI inference.',
        details3: 'Custom web dashboard for your home network.',
        imageSample: 'assets/services/webdev10.webp',
        icon: 'fas fa-brain',
        service: 'AI Help',
        price: 249
      },
      {
        id: 42, title: 'The Business Box',
        description: 'A complete "De-Googled" business stack running on your own Linux server. No monthly fees.',
        details1: 'Nextcloud for files, mail, and calendar.',
        details2: 'Mattermost/RocketChat for secure team chat.',
        details3: 'AI-assisted document search and automation.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-archive',
        service: 'Open Source',
        price: 499
      },
      {
        id: 43, title: 'Agent Support',
        description: 'Revolutionary tech support where AI agents triage and solve issues before they cost you time.',
        details1: 'Automated remote diagnostic agents.',
        details2: 'Proactive server and workstation monitoring.',
        details3: 'Direct escalation to a human expert when needed.',
        imageSample: 'assets/services/webdev08.webp',
        icon: 'fas fa-robot',
        service: 'AI Help',
        price: 99
      },
      {
        id: 44, title: 'Linux Clinic',
        description: 'Transition smoothly from Windows to Open Source without losing your familiar workflow.',
        details1: 'White-glove migration of files and settings.',
        details2: 'Customized desktop environments (Mint, Zorin).',
        details3: 'Training on open-source alternatives for all tools.',
        imageSample: 'assets/services/webdev06.webp',
        icon: 'fab fa-linux',
        service: 'Open Source',
        price: 149
      },
      {
        id: 45, title: 'Dog Sitting',
        description: 'Attentive, loving dog sitting service in a safe, comfortable setting while you are away.',
        details1: '$50 a day per dog',
        details2: '$25 each additional dog',
        details3: 'Daily routine, playtime, feeding, and photo updates.',
        imageSample: 'assets/services/webdev01.webp',
        icon: 'fas fa-dog',
        service: 'Other',
        price: 50,
        rateType: 'Per Day'
      },
      {
        id: 46, title: 'Dog Walking',
        description: 'Reliable, caring dog walking service to keep your furry friend exercised and happy.',
        details1: '$20 per walk / visit',
        details2: 'Paced specifically for your dog’s age and energy level.',
        details3: 'Fresh water refill and visit summary included.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-paw',
        service: 'Other',
        price: 20,
        rateType: 'Per Visit'
      },
      {
        id: 47, title: 'Van Rental',
        description: 'Convenient cargo van rental for moves, furniture hauling, material pickups, and errands.',
        details1: '$35 an hour plus gas',
        details2: 'Generous cargo space for big loads and heavy gear.',
        details3: 'Flexible hourly booking with simple handover.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-truck',
        service: 'Rentals',
        price: 35,
        rateType: 'Per Hour (+ gas)'
      },
      {
        id: 48, title: 'Home Assistant & Local Automation',
        description: 'Private, subscription-free home automation powered by open-source Home Assistant running locally.',
        details1: 'Home Assistant OS installation & setup on dedicated hardware.',
        details2: 'Integration for Zigbee, Z-Wave, Philips Hue, and smart plugs.',
        details3: '100% local privacy with zero monthly cloud subscriptions.',
        imageSample: 'assets/services/webdev04.webp',
        icon: 'fas fa-house-laptop',
        service: 'Open Source',
        price: 199
      },
      {
        id: 49, title: 'Open Source Cloud & Office Migration',
        description: 'Break free from monthly Microsoft 365 and Google Workspace subscriptions with self-hosted open-source tools.',
        details1: 'Nextcloud Hub setup for files, contacts, calendar, and office docs.',
        details2: 'Complete data export from cloud providers and local migration.',
        details3: 'Full client configuration on Windows, Mac, Linux, and mobile.',
        imageSample: 'assets/services/webdev01.webp',
        icon: 'fas fa-folder-open',
        service: 'Open Source',
        price: 299
      },
      {
        id: 50, title: 'Custom Linux Server Setup',
        description: 'Dedicated or repurposed PC Linux servers configured for backups, file sharing, media (Jellyfin), or containerized apps.',
        details1: 'Debian / Ubuntu Server installation with Docker setup.',
        details2: 'Automated local and encrypted off-site backups.',
        details3: 'Network share configuration (Samba/NFS) for all household devices.',
        imageSample: 'assets/services/webdev09.webp',
        icon: 'fas fa-server',
        service: 'Open Source',
        price: 249
      },
      {
        id: 57, title: 'Network-Wide Ad Blocker (Pi-hole)',
        description: 'Block invasive ads, trackers, and malicious phishing domains across your whole house or office before they even reach your screens.',
        details1: 'Pi-hole or AdGuard Home installation on a Raspberry Pi or Mini PC.',
        details2: 'Router DNS integration to protect smart TVs, phones, tablets & PCs.',
        details3: 'Faster browsing speeds, lower data usage, and complete privacy.',
        imageSample: 'assets/services/webdev06.webp',
        icon: 'fas fa-shield-virus',
        service: 'Open Source',
        price: 129
      },
      {
        id: 58, title: 'Jellyfin Private Media Server',
        description: 'Enjoy your own personal Netflix and Spotify with Jellyfin—100% free open-source media streaming with zero subscription fees.',
        details1: 'Jellyfin server setup with automatic movie/music metadata fetching.',
        details2: 'Hardware transcoding enabled for smooth 4K playback.',
        details3: 'Client apps installed on Apple TV, Android TV, FireStick, phones & laptops.',
        imageSample: 'assets/services/webdev08.webp',
        icon: 'fas fa-photo-film',
        service: 'Open Source',
        price: 179
      },
      {
        id: 59, title: 'Private Vaultwarden Password Manager',
        description: 'Take back ownership of your passwords, passkeys, and sensitive logins with a lightweight, secure self-hosted Bitwarden server.',
        details1: 'Vaultwarden container setup with HTTPS/SSL encryption.',
        details2: 'Migration of passwords from 1Password, LastPass, or web browsers.',
        details3: 'Automated encrypted daily backups to external storage or cloud.',
        imageSample: 'assets/services/webdev10.webp',
        icon: 'fas fa-key',
        service: 'Open Source',
        price: 149
      },
      {
        id: 60, title: 'Proxmox & TrueNAS Home Lab',
        description: 'Turn surplus desktop PCs or servers into an enterprise-grade virtualization or network-attached storage (NAS) beast.',
        details1: 'Proxmox VE or TrueNAS SCALE bare-metal installation.',
        details2: 'ZFS RAID storage configuration for rock-solid drive redundancy.',
        details3: 'Docker & LXC container environments ready for any self-hosted app.',
        imageSample: 'assets/services/webdev12.webp',
        icon: 'fas fa-network-wired',
        service: 'Open Source',
        price: 299
      },
      {
        id: 61, title: 'OPNsense / pfSense Firewall & VPN',
        description: 'Ditch insecure consumer ISP routers in favor of enterprise open-source network routing, firewalling, and private remote access.',
        details1: 'OPNsense / pfSense installation on dedicated mini PC hardware.',
        details2: 'WireGuard VPN setup to securely access your home network anywhere.',
        details3: 'VLAN segmentation for IoT devices, guest Wi-Fi, and main workstations.',
        imageSample: 'assets/services/webdev13.webp',
        icon: 'fas fa-lock',
        service: 'Open Source',
        price: 249
      },
      {
        id: 62, title: 'Paperless-ngx Digital Archive',
        description: 'Eliminate paper clutter forever with an automated, searchable open-source document management system with optical character recognition.',
        details1: 'Paperless-ngx installation with automatic PDF indexing and tagging.',
        details2: 'Multi-language OCR so every scanned receipt, contract, or bill is instantly searchable.',
        details3: 'Network scanner or email inbox auto-ingest configuration.',
        imageSample: 'assets/services/webdev14.webp',
        icon: 'fas fa-file-invoice',
        service: 'Open Source',
        price: 189
      },
      {
        id: 51, title: 'Custom 3D Printing & Prototyping',
        description: 'Fast, high-precision 3D printing on our Bambu Lab A1 from your 3D files or models from MakerWorld, Printables, and Thingiverse.',
        details1: 'High-speed printing up to 500 mm/s with precision down to 0.08 mm.',
        details2: 'Choice of standard PLA, high-impact PLA Tough, or durable PETG.',
        details3: 'Quick turnaround with local Burlington / Aldershot pickup.',
        imageSample: 'assets/services/webdev11.webp',
        icon: 'fas fa-cube',
        service: '3D Printing',
        price: 20,
        rateType: 'Starting at'
      },
      {
        id: 52, title: 'Broken Part Reproduction & Repair',
        description: 'Save appliances, tools, and equipment by replacing discontinued or broken plastic gears, knobs, latches, and brackets.',
        details1: 'Digital caliper measurements and 3D modeling from broken pieces.',
        details2: 'Printed in high-strength PETG or heat-resistant filaments.',
        details3: 'Huge savings compared to replacing entire appliances.',
        imageSample: 'assets/services/webdev12.webp',
        icon: 'fas fa-gears',
        service: '3D Printing',
        price: 45,
        rateType: 'Starting at'
      },
      {
        id: 53, title: 'Multi-Color AMS Prints & Badges',
        description: 'Eye-catching multi-color 3D printing with automated filament switching powered by the Bambu AMS Lite 4-color system.',
        details1: 'Up to 4 vibrant colors fused in a single monolithic print.',
        details2: 'Custom desk nameplates, 2D/3D business logos, and gamer tags.',
        details3: 'Crisp layer lines and zero paint bleeding.',
        imageSample: 'assets/services/webdev13.webp',
        icon: 'fas fa-palette',
        service: '3D Printing',
        price: 35,
        rateType: 'Starting at'
      },
      {
        id: 54, title: 'Tech Mounts & Desk Organization',
        description: 'Declutter your workspace with custom brackets, mounts, and holders engineered to fit your specific devices.',
        details1: 'VESA monitor mounts for Mini PCs, NUCs, Raspberry Pis & routers.',
        details2: 'Under-desk headphone hangers, laptop docks & power brick cradles.',
        details3: 'Custom snap-fit cable raceways and desktop cable combs.',
        imageSample: 'assets/services/webdev14.webp',
        icon: 'fas fa-desktop',
        service: '3D Printing',
        price: 25,
        rateType: 'Starting at'
      },
      {
        id: 55, title: 'Flexible TPU Parts & Dampers',
        description: 'Flexible, rubber-like 95A TPU prints designed for heavy impact resistance, vibration damping, and weatherproofing.',
        details1: 'Vibration absorbing feet for PC chassis, subwoofers, and audio gear.',
        details2: 'Custom protective corner bumpers, tool grips, and waterproof gaskets.',
        details3: 'Bendable, indestructible, and chemical/UV resistant.',
        imageSample: 'assets/services/webdev02.webp',
        icon: 'fas fa-arrows-spin',
        service: '3D Printing',
        price: 30,
        rateType: 'Starting at'
      },
      {
        id: 56, title: '3D CAD Design & Slicing Service',
        description: 'Turn your napkin sketch, idea, or concept into a functional, production-ready 3D CAD model optimized for 3D printing.',
        details1: 'Parametric CAD modeling with tight tolerance fitting.',
        details2: 'Bambu Studio slicing optimization for strength, infill, and speed.',
        details3: 'STL, STEP, and 3MF production files delivered to keep.',
        imageSample: 'assets/services/webdev03.webp',
        icon: 'fas fa-drafting-compass',
        service: '3D Printing',
        price: 60,
        rateType: 'Per Design'
      },
    ]
  }

  selectPackage(pkg: ItService): void {
    this.selectedPackage = pkg;
    this.showBookingForm = true;
  }

  updateImage() {
    if (this.selectedPackage?.id === 1) {
      return this.selectedPackage.imageSample || 'assets/webdev.webp';
    } else if (this.selectedPackage?.id === 2) {
      return this.selectedPackage.imageSample || 'assets/wordpress.webp';
    } else if (this.selectedPackage?.id === 3) {
      return this.selectedPackage.imageSample || 'assets/seo.webp';
    }
    return 'assets/webdev.webp';
  }

  constructor(private seo: SeoService) {
    this.packages = [];
    this.seo.setPage({
      title: 'Open Source Solutions, 3D Printing & Custom Web Dev Burlington',
      description: 'Migrate to open-source software, setup custom Linux apps, 3D printing & rapid prototyping, AI help, boost SEO, build custom websites, and recycle hardware. Get expert budget technology support from Geek2Go.ca.',
      path: '/services'
    });
  }
}
