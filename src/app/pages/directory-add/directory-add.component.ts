import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectoryService } from '../../services/directory.service';

@Component({
  selector: 'app-directory-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './directory-add.component.html',
  styleUrls: ['./directory-add.component.scss']
})
export class DirectoryAddComponent {
  categories = [
    'Plumbing',
    'Electrical',
    'HVAC & Heating/AC',
    'Handyman & Renovation',
    'Roofing & Siding',
    'Landscaping & Lawn Care',
    'Automotive & Detailing',
    'Accounting & Tax',
    'Mortgages & Real Estate',
    'Legal Services',
    'IT & Tech Support',
    'Photography & Media',
    'Fitness & Health',
    'Other Local Services'
  ];

  formData = {
    businessName: '',
    contactName: '',
    category: '',
    tagline: '',
    description: '',
    phone: '',
    email: '',
    websiteUrl: '',
    serviceArea: 'Burlington & Surrounding Areas',
    fbProfile: '',
    dadDiscount: '',
    website_url_hp: '', // Honeypot trap
  };

  selectedFile: File | null = null;
  imagePreviewUrl: string | null = null;

  loading = false;
  submitted = false;
  errorMessage = '';

  constructor(public directoryService: DirectoryService) {}

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        this.errorMessage = 'Image size must be under 5MB';
        return;
      }
      this.selectedFile = file;
      this.errorMessage = '';

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeSelectedFile(): void {
    this.selectedFile = null;
    this.imagePreviewUrl = null;
  }

  onSubmit(): void {
    if (!this.formData.businessName || !this.formData.contactName || !this.formData.category || !this.formData.description || !this.formData.email) {
      this.errorMessage = 'Please complete all required fields (Business Name, Your Name, Category, Description, and Email).';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const payload = new FormData();
    payload.append('businessName', this.formData.businessName);
    payload.append('contactName', this.formData.contactName);
    payload.append('category', this.formData.category);
    payload.append('description', this.formData.description);
    payload.append('email', this.formData.email);

    if (this.formData.tagline) payload.append('tagline', this.formData.tagline);
    if (this.formData.phone) payload.append('phone', this.formData.phone);
    if (this.formData.websiteUrl) payload.append('websiteUrl', this.formData.websiteUrl);
    if (this.formData.serviceArea) payload.append('serviceArea', this.formData.serviceArea);
    if (this.formData.fbProfile) payload.append('fbProfile', this.formData.fbProfile);
    if (this.formData.dadDiscount) payload.append('dadDiscount', this.formData.dadDiscount);
    if (this.formData.website_url_hp) payload.append('website_url_hp', this.formData.website_url_hp);

    if (this.selectedFile) {
      payload.append('image', this.selectedFile);
    }

    this.directoryService.submitListing(payload).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.submitted = true;
        } else {
          this.errorMessage = res.message || 'Submission failed. Please try again.';
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Server error occurred while submitting your listing.';
      }
    });
  }
}
