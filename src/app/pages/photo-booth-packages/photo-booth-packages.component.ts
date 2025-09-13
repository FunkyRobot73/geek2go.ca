import { Component } from '@angular/core';
import { PbPackage, PhotoBoothPackagesService } from 'src/app/services/photo-booth-packages.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingFormComponent } from 'src/app/components/booking-form/booking-form.component';

@Component({
  selector: 'app-photo-booth-packages',
  imports: [CommonModule, RouterModule, BookingFormComponent],
  templateUrl: './photo-booth-packages.component.html',
  styleUrl: './photo-booth-packages.component.scss'
})
export class PhotoBoothPackagesComponent {

  packages: PbPackage[] = [];
  selectedPackage: PbPackage | null = null;
  showBookingForm = false;
  showAllAddons = false;

  addOns: { description: string; price: number }[] = [];

   ngOnInit() {
    this.photoBoothService.getPackages().subscribe(
      (data) => {
        this.packages = data;
      },
      (error) => console.error('Error fetching packages:', error)
    );
  }

  updateAddOns() {
    if (this.selectedPackage?.packagePB === 'standard') {
      this.addOns = [
        { description: 'Additional Hour', price: 150 },
        { description: 'Karaoke', price: 200 },
        { description: 'Ceremony', price: 200 },
        { description: 'Photo Booth (Cocktail)', price: 400 }
      ];
    } else {
      this.addOns = [
        { description: 'Additional Hour', price: 150 },
        { description: 'Karaoke', price: 200 },
        { description: 'Photo Booth (Cocktail)', price: 400 }

      ];
    }
  }

  updateImage() {
    if (this.selectedPackage?.packagePB === 'standard') {   
      return this.selectedPackage.imageSamplePB || 'assets/pb2025.jpg';
    } else if (this.selectedPackage?.packagePB === 'standard') {
      return this.selectedPackage.imageSamplePB || 'assets/pb2025.jpg';
    } else if (this.selectedPackage?.packagePB === 'standard') {
      return this.selectedPackage.imageSamplePB || 'assets/pb2025.jpg';
        }
      return 'assets/pb2025.jpg';
  }

selectPackage(pkg: PbPackage): void {
    this.selectedPackage = pkg;
    this.showBookingForm = false;
    this.updateAddOns();
  }


  constructor(private photoBoothService: PhotoBoothPackagesService) {}
  
  // trackById(index: number, item: PhotoBoothPackage): number {
  //   return item.id;
  // }

  onBookingSubmit(bookingData: any) {
    console.log('Booking submitted:', bookingData);
    // Here you would typically send to your backend
    alert('Booking submitted successfully!');
    this.selectedPackage = null;
    this.showBookingForm = false;
  }

  startBooking() {
    if (this.selectedPackage) {
      this.showBookingForm = true;
    }
  }
}
