import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { SeoService } from 'src/app/services/seo.service';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-geek-gallery',
  imports: [CommonModule, RouterModule],
  templateUrl: './geek-gallery.component.html',
  styleUrl: './geek-gallery.component.scss'
})
export class GeekGalleryComponent implements OnInit{

  profile: any;
  galleryImages: {src: string, alt: string}[] = [];
  loading = true;
  selectedImage: {src: string, alt: string} | null = null;
  showLightbox = false;

  constructor(
    private profileService: ProfileService, 
    private seo: SeoService,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Geek Gallery — Events & Community Photos',
      description: 'Browse the Geek2Go Geek Gallery — photos from community events and tech moments in Burlington, Aldershot and the surrounding area.',
      path: '/geek-gallery'
    });
    this.profileService.profile$.subscribe(data => {
      this.profile = data;
    });
    this.loadGalleryImages();
  }

  private readonly cities = ['Burlington', 'Aldershot', 'Oakville', 'Hamilton', 'Ancaster', 'Grimsby'];

  private randomCity(): string {
    return this.cities[Math.floor(Math.random() * this.cities.length)];
  }

  private loadGalleryImages() {
    this.galleryService.getGalleryItems('geek2go.ca', 'comics').subscribe({
      next: (items) => {
        if (items && items.length > 0) {
          const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));
          this.galleryImages = sortedItems.map(item => ({
            src: this.galleryService.getImageUrl(item.image),
            alt: item.blurb || item.title || `Geeking Out in ${this.randomCity()}`
          }));
          this.loading = false;
        } else {
          this.loadStaticGalleryImages();
        }
      },
      error: (err) => {
        console.error('Error fetching dynamic gallery items, falling back to static:', err);
        this.loadStaticGalleryImages();
      }
    });
  }

  private loadStaticGalleryImages() {
    const imageCount = 22;
    const basePath = 'assets/gallery01/';
    
    this.galleryImages = [];
    for (let i = 1; i <= imageCount; i++) {
      this.galleryImages.push({
        src: `${basePath}gallery01_${i}.webp`,
        alt: `Geeking Out in ${this.randomCity()}`
      });
    }
    this.loading = false;
  }

  openLightbox(image: {src: string, alt: string}) {
    this.selectedImage = image;
    this.showLightbox = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  }

  closeLightbox() {
    this.showLightbox = false;
    this.selectedImage = null;
    document.body.style.overflow = ''; // Re-enable scrolling
  }

  navigateLightbox(direction: number) {
    if (!this.selectedImage) return;
    
    const currentIndex = this.galleryImages.findIndex(img => img.src === this.selectedImage?.src);
    let newIndex = currentIndex + direction;
    
    // Wrap around if at beginning or end
    if (newIndex < 0) newIndex = this.galleryImages.length - 1;
    if (newIndex >= this.galleryImages.length) newIndex = 0;
    
    this.selectedImage = this.galleryImages[newIndex];
  }
}
