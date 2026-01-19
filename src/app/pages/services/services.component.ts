import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItService } from 'src/app/services/itservices.service';


@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  packages: ItService[] = [];
  selectedPackage: ItService | null = null;
  showBookingForm = false;

  addOns: { description: string; price: number }[] = [];
  services = [
    "Hardware",
    "Software",
    "WebDev",
    "Recycling",
    "Resale",
    "Training",
    "AI Help"
  ];
  activeTab: string = 'Hardware';

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
        imageSample: 'assets/services/webdev01.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev04.jpg',
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
        imageSample: 'assets/services/webdev06.jpg',
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
        imageSample: 'assets/services/webdev08.jpg',
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
        imageSample: 'assets/services/webdev09.jpg',
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
        imageSample: 'assets/services/webdev10.jpg',
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
        imageSample: 'assets/services/webdev11.jpg',
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
        imageSample: 'assets/services/webdev12.jpg',
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
        imageSample: 'assets/services/webdev13.jpg',
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
        imageSample: 'assets/services/webdev01.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev04.jpg',
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
        imageSample: 'assets/services/webdev06.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev10.jpg',
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
        imageSample: 'assets/services/webdev10.jpg',
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
        imageSample: 'assets/services/webdev13.jpg',
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
        imageSample: 'assets/services/webdev13.jpg',
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
        imageSample: 'assets/services/webdev13.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev03.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev02.jpg',
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
        imageSample: 'assets/services/webdev04.jpg',
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
        imageSample: 'assets/services/webdev04.jpg',
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
        imageSample: 'assets/services/webdev10.jpg',
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
        imageSample: 'assets/services/webdev10.jpg',
        icon: 'fas fa-terminal',
        service: 'AI Help',
        price: 149
      },
    ]
  }

  selectPackage(pkg: ItService): void {
    this.selectedPackage = pkg;
    this.showBookingForm = true;
  }

  updateImage() {
    if (this.selectedPackage?.id === 1) {
      return this.selectedPackage.imageSample || 'assets/webdev.jpg';
    } else if (this.selectedPackage?.id === 2) {
      return this.selectedPackage.imageSample || 'assets/wordpress.jpg';
    } else if (this.selectedPackage?.id === 3) {
      return this.selectedPackage.imageSample || 'assets/seo.jpg';
    }
    return 'assets/webdev.jpg';
  }

  constructor() {
    this.packages = [];
  }
}
