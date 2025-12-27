import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItService } from 'src/app/services/itservices.service';
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-hardware',
  imports: [CommonModule, ServicesComponent],
  templateUrl: './hardware.component.html',
  styleUrl: './hardware.component.scss'
})
export class HardwareComponent {

  packages: ItService[] = [];
  selectedPackage: ItService | null = null;
  showBookingForm = false;

  addOns: { description: string; price: number }[] = [];

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
      price: 399
    },
    {id: 2, title: 'Wordpress Development',
      description: 'Expert WordPress development services to build and manage your website with ease.',
      details1: 'Custom WordPress themes and plugins.',
      details2: 'Easy-to-use content management system.',
      details3: 'Regular updates and maintenance for security and performance.',
      imageSample: 'assets/services/webdev02.jpg',
      icon: 'fab fa-wordpress',
      price: 399
    },
    {id: 3, title: 'SEO Services',
      description: 'Comprehensive SEO services to boost your website\'s visibility and drive organic traffic.',
      details1: 'Keyword research and optimization.',
      details2: 'On-page and off-page SEO strategies.',
      details3: 'Regular performance reports and analytics.',
      imageSample: 'assets/services/webdev03.jpg',
      icon: 'fas fa-search',
      price: 399
    },
    {id: 4, title: 'Google Ranking Improvement',
      description: 'Specialized services to enhance your website\'s ranking on Google and other search engines.',
      details1: 'Advanced SEO techniques and strategies.',
      details2: 'Content optimization and link building.',
      details3: 'Continuous monitoring and adjustments for optimal results.',
      imageSample: 'assets/services/webdev04.jpg',
      icon: 'fas fa-chart-line',
      price: 399
    },
    {id: 5, title: 'Virus Protection & Removal',
      description: 'Reliable virus protection and removal services to keep your systems safe and secure.',
      details1: 'Comprehensive virus and malware scans.',
      details2: 'Effective removal of threats and infections.',
      details3: 'Ongoing protection and security updates.',
      imageSample: 'assets/services/webdev06.jpg',
      icon: 'fas fa-shield-alt',
      price: 399
    },
    {id: 6, title: 'Data Security',
      description: 'Robust data security solutions to protect your sensitive information from unauthorized access.',
      details1: 'Encryption and secure data storage.',
      details2: 'Access control and authentication measures.',
      details3: 'Regular security audits and assessments.',
      imageSample: 'assets/services/webdev08.jpg',
      icon: 'fas fa-lock',
      price: 399
    },
    {id: 7, title: 'Data Backup & Recovery',
      description: 'Reliable data backup and recovery services to ensure your information is always safe and accessible.',
      details1: 'Automated backup solutions for peace of mind.',
      details2: 'Quick and efficient data recovery processes.',
      details3: 'Regular backup testing and verification.',
      imageSample: 'assets/services/webdev09.jpg',
      icon: 'fas fa-database',
      price: 399
    },
    {id: 8, title: 'General Tech Support',
      description: 'Comprehensive tech support services to assist with all your technology needs.',
      details1: 'Troubleshooting and problem resolution.',
      details2: 'Software and hardware support.',
      details3: 'Remote and on-site assistance options.',
      imageSample: 'assets/services/webdev10.jpg',
      icon: 'fas fa-headset',
      price: 399
    },
    {id: 9, title: 'Graphic Design',
      description: 'Creative graphic design services to enhance your brand\'s visual identity.',
      details1: 'Custom logo and branding design.',
      details2: 'Marketing materials and promotional graphics.',
      details3: 'Digital and print design solutions.',
      imageSample: 'assets/services/webdev11.jpg',
      icon: 'fas fa-paint-brush',
      price: 399
    },
    {id: 10, title: 'Social Media Management',
      description: 'Effective social media management services to grow your online presence and engage with your audience.',
      details1: 'Content creation and scheduling.',
      details2: 'Audience engagement and community management.',
      details3: 'Performance tracking and analytics.',
      imageSample: 'assets/services/webdev12.jpg',
      icon: 'fas fa-thumbs-up',
      price: 399
    },
    {id: 11, title: 'IT Consulting',
      description: 'Expert IT consulting services to help you develop and implement effective technology strategies.',
      details1: 'Technology assessments and recommendations.',
      details2: 'Strategic planning and implementation support.',
      details3: 'Ongoing guidance and advisory services.',
      imageSample: 'assets/services/webdev13.jpg',
      icon: 'fas fa-lightbulb',
      price: 399
    },
    {id: 12, title: 'E-commerce Solutions',
      description: 'Comprehensive e-commerce solutions to help you build and manage a successful online store.',
      details1: 'Custom e-commerce website development.',
      details2: 'Secure payment gateway integration.',
      details3: 'Inventory management and order processing.',
      imageSample: 'assets/services/webdev14.jpg',
      icon: 'fas fa-shopping-cart',
      price: 399
    },  
    {id: 13, title: 'Custom Software Development',
      description: 'Tailored software development services to meet your unique business needs.',
      details1: 'Custom application design and development.',
      details2: 'Integration with existing systems and platforms.',
      details3: 'Ongoing support and maintenance.',
      imageSample: 'assets/services/webdev01.jpg',
      icon: 'fas fa-code',
      price: 399
    },
    {id: 14, title: 'Network Setup & Maintenance',
      description: 'Reliable network setup and maintenance services to ensure your systems are always connected and secure.',
      details1: 'Network design and installation.',
      details2: 'Ongoing monitoring and maintenance.',
      details3: 'Troubleshooting and support services.',
      imageSample: 'assets/services/webdev02.jpg',
      icon: 'fas fa-network-wired',
      price: 399
    },
    {id: 15, title: 'Cloud Services',
      description: 'Comprehensive cloud services to help you leverage the power of the cloud for your business.',
      details1: 'Cloud migration and deployment.',
      details2: 'Cloud storage and backup solutions.',
      details3: 'Ongoing cloud management and support.',
      imageSample: 'assets/services/webdev03.jpg',
      icon: 'fas fa-cloud',
      price: 399
    },  
    {id: 16, title: 'Tech Training & Support',
      description: 'Empowering your team with tech training and support services to enhance their skills and productivity.',
      details1: 'Customized training programs and workshops.',
      details2: 'Ongoing support and resources.',
      details3: 'Hands-on learning and practical applications.',
      imageSample: 'assets/services/webdev04.jpg',
      icon: 'fas fa-chalkboard-teacher',
      price: 399
    },  
    {id: 17, title: 'More...!',
      description: 'And much more to meet your tech needs. Contact us to learn about our full range of services.',
      details1: 'Tailored solutions for your unique requirements.',
      details2: 'Flexible service options to fit your budget.',
      details3: 'Dedicated support and customer service.',
      imageSample: 'assets/services/webdev06.jpg',
      icon: 'fas fa-ellipsis-h',
      price: 399
    }
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
