import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  @Input() package: any;
  @Output() bookingSubmitted = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventType: ['', Validators.required],
      venue: [''],
      guestCount: [50, Validators.min(1)],
      selectedAddOns: this.fb.array([]),
      specialRequests: ['']
    });
  }

  onSubmit_old() {
    if (this.bookingForm.valid) {
      const bookingData = {
        ...this.bookingForm.value,
        package: this.package
      };
      console.log('Submitting booking:', bookingData);
      this.bookingSubmitted.emit(bookingData);
    }
  }

  onSubmit() {
    // Handle form submission
    const emailBody = `
      Name: ${this.bookingForm.value.firstName} ${this.bookingForm.value.lastName}
      Email: ${this.bookingForm.value.email}
      Phone: ${this.bookingForm.value.phone}
      Event Date: ${this.bookingForm.value.eventDate}
      Event Type: ${this.bookingForm.value.eventType}
      Venue: ${this.bookingForm.value.venue}
      Guest Count: ${this.bookingForm.value.guestCount}
      Special Requests: ${this.bookingForm.value.specialRequests}
      Package: ${this.package.name}
      Package Price: ${this.package.price}
      Add-Ons: ${this.bookingForm.value.selectedAddOns.join(', ')}
    `;

    const mailtoLink = `mailto:carlos@funkyrobot.ca?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    console.log('Form submitted!');
  }

  onCancel() {
    this.cancel.emit();
  }
}