import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-photo-booth-gallery',
  imports: [CommonModule, RouterModule],
  templateUrl: './photo-booth-gallery.component.html',
  styleUrl: './photo-booth-gallery.component.scss'
})
export class PhotoBoothGalleryComponent implements OnInit {

  galleryImages: {src: string, alt: string}[] = [];
  loading = true;
  selectedImage: {src: string, alt: string} | null = null;
  showLightbox = false;

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Social Gallery — Community Snapshots',
      description: 'Browse the Geek2Go Social Gallery — community event photos and social moments from Burlington, Aldershot and the Hamilton area.',
      path: '/social-gallery'
    });
    this.loadGalleryImages();
  }

  private readonly cities = ['Burlington', 'Aldershot', 'Oakville', 'Hamilton', 'Ancaster', 'Grimsby'];

  private randomCity(): string {
    return this.cities[Math.floor(Math.random() * this.cities.length)];
  }

  private loadGalleryImages() {
    const imageCount = 20;
    const basePath = 'assets/pb/';
    
    for (let i = 1; i <= imageCount; i++) {
      this.galleryImages.push({
        src: `${basePath}pb${i}.webp`,
        alt: `Geeking Out in ${this.randomCity()}`
      });
    }
    
    // Simulate loading delay
    setTimeout(() => {
      this.loading = false;
    }, 500);
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
