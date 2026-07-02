import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'src/app/services/profile.service';
import { SeoService } from 'src/app/services/seo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  profile: any;
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';
  
  constructor(
    private profileService: ProfileService,
    private sanitizer: DomSanitizer,
    private seo: SeoService,
    private http: HttpClient
  ) {
    this.seo.setPage({
      title: 'Contact Geek2Go — IT Support Burlington',
      description: 'Get in touch with Geek2Go.ca for IT support, computer repair, or web development inquiries in Burlington, Aldershot & surrounding areas.',
      path: '/contact'
    });
  }

  ngOnInit() {
    this.profileService.profile$.subscribe(profile => {
      this.profile = profile;
    });
  }

  getSafeVideoUrl(url: string) {
    // Convert YouTube URL to embed URL
    const videoId = url.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  submitContact() {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';

    const contactUrl = environment.apiUrl.replace('/blogs', '/contact');

    this.http.post(contactUrl, this.formData).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        // Reset form fields
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.submitError = true;
        this.errorMessage = err.error?.error || 'Something went wrong. Please try again or reach out directly via phone or email.';
        console.error('Contact submission error:', err);
      }
    });
  }
}
