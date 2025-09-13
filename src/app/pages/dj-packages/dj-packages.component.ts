import { Component, OnInit } from '@angular/core';
import { DjPackagesService, DjPackage } from '../../services/dj-packages.service';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from 'src/app/components/booking-form/booking-form.component';

@Component({
  selector: 'app-dj-packages',
  templateUrl: './dj-packages.component.html',
  imports: [CommonModule, BookingFormComponent],
  styleUrls: ['./dj-packages.component.scss']
})


export class DjPackagesComponent {
  packages: DjPackage[] = [];
  selectedPackage: DjPackage | null = null;
  showBookingForm = false;

  addOns: { description: string; price: number }[] = [];

  ngOnInit() {
    this.djPackagesService.getPackages().subscribe(
      (data) => {
        this.packages = data;
        this.updateAddOns();
      },
      (error) => console.error('Error fetching packages:', error)
    );
  }

  updateAddOns() {
    if (this.selectedPackage?.type === 'Wedding') {
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
    if (this.selectedPackage?.type === 'Wedding') {   
      return this.selectedPackage.imageSample || 'assets/dj-sample.jpg';
    } else if (this.selectedPackage?.type === 'Birthday') {
      return this.selectedPackage.imageSample || 'assets/dj-sample.jpg';
    } else if (this.selectedPackage?.type === 'Corporate') {
      return this.selectedPackage.imageSample || 'assets/dj-sample.jpg';
        }
      return 'assets/dj-sample.jpg';
  }

  selectPackage(pkg: DjPackage): void {
    this.selectedPackage = pkg;
    this.showBookingForm = false;
    this.updateAddOns();
  }

  constructor(private djPackagesService: DjPackagesService) {}

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