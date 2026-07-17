import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';
import { GalleryService } from 'src/app/services/gallery.service';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  galleryImages: GalleryImage[] = [];
  loading = true;
  selectedImage: GalleryImage | null = null;
  showLightbox = false;
  activeFilter = 'all';

  constructor(
    private seo: SeoService,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Project Gallery — Open Source & Code Snapshots',
      description: 'Explore custom Linux servers, private AI hubs, code scripts, SEO rankings, and hardware recycling archives at Geek2Go.',
      path: '/gallery'
    });
    this.loadGalleryImages();
  }

  private readonly cities = ['Burlington', 'Aldershot', 'Oakville', 'Hamilton', 'Ancaster', 'Grimsby'];

  private randomCity(): string {
    return this.cities[Math.floor(Math.random() * this.cities.length)];
  }

  private loadGalleryImages() {
    this.galleryService.getGalleryItems('geek2go.ca').subscribe({
      next: (items) => {
        if (items && items.length > 0) {
          const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));
          this.galleryImages = sortedItems.map(item => ({
            src: this.galleryService.getImageUrl(item.image),
            alt: item.blurb || item.title || `Gallery Item in ${this.randomCity()}`,
            category: item.category || 'tech'
          }));
          this.loading = false;
        } else {
          this.loadStaticGalleryImages();
        }
      },
      error: (err) => {
        console.error('Error fetching gallery items, falling back to static:', err);
        this.loadStaticGalleryImages();
      }
    });
  }

  private loadStaticGalleryImages() {
    this.galleryImages = [];
    
    // Load from gallery01 (comics/geek)
    for (let i = 1; i <= 22; i++) {
      this.galleryImages.push({
        src: `assets/gallery01/gallery01_${i}.webp`,
        alt: `Geeking Out - Comic Archive Log #${i}`,
        category: 'comics'
      });
    }

    // Load from gallery02 (tech/open source)
    for (let i = 1; i <= 21; i++) {
      this.galleryImages.push({
        src: `assets/gallery02/gallery02_${i}.webp`,
        alt: `Open Source Setup in ${this.randomCity()} #${i}`,
        category: 'tech'
      });
    }
    
    this.loading = false;
  }

  get filteredImages(): GalleryImage[] {
    if (this.activeFilter === 'all') {
      return this.galleryImages;
    }
    return this.galleryImages.filter(img => img.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  openLightbox(image: GalleryImage) {
    this.selectedImage = image;
    this.showLightbox = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.showLightbox = false;
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  navigateLightbox(direction: number) {
    if (!this.selectedImage) return;
    
    const visibleImages = this.filteredImages;
    const currentIndex = visibleImages.findIndex(img => img.src === this.selectedImage?.src);
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = visibleImages.length - 1;
    if (newIndex >= visibleImages.length) newIndex = 0;
    
    this.selectedImage = visibleImages[newIndex];
  }
}
