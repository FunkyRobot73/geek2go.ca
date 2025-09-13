import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dj-gallery',
  imports: [CommonModule, NgFor],
  templateUrl: './dj-gallery.component.html',
  styleUrl: './dj-gallery.component.scss'
})
export class DjGalleryComponent implements OnInit{

  galleryImages: {src: string, alt: string}[] = [];
  loading = true;
  selectedImage: {src: string, alt: string} | null = null;
  showLightbox = false;

  ngOnInit() {
    this.loadGalleryImages();
  }

  private loadGalleryImages() {
    // In a real app, you would get these from a service or API
    // For demo purposes, we'll simulate loading images from assets/pb/
    // You should replace this with your actual image filenames
    
    const imageCount = 20; // Change this to match your actual number of images
    const basePath = 'assets/dj/';
    
    for (let i = 1; i <= imageCount; i++) {
      this.galleryImages.push({
        src: `${basePath}dj${i}.jpg`, // Adjust naming pattern as needed
        alt: `DJ Party Image ${i}`
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
