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

    ngOnInit() {
      this.packages = [
        {
          id: 1, title: 'Website Development',
          description: 'Professional website development services to create a stunning online presence for your business.',
          details1: 'Custom website design tailored to your brand.',
          details2: 'Responsive design for optimal viewing on all devices.',
          details3: 'SEO-friendly structure to improve search engine rankings.',
          imageSample: 'assets/services/webdev.jpg',
          icon: 'fas fa-laptop-code',
      price: 100
        },
        {id: 2, title: 'Wordpress Development',
          description: 'Expert WordPress development services to build and manage your website with ease.',
          details1: 'Custom WordPress themes and plugins.',
          details2: 'Easy-to-use content management system.',
          details3: 'Regular updates and maintenance for security and performance.',
          imageSample: 'assets/services/wordpress.jpg',
          icon: 'fab fa-wordpress',
      price: 100
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
