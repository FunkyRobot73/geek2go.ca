import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [RouterModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 profile: any;
  
  constructor(private profileService: ProfileService, private sanitizer: DomSanitizer, private seo: SeoService) {
    this.seo.setPage({
      title: 'Contact Geek2Go — IT Support Burlington',
      description: 'Get in touch with Geek2Go.ca for IT support, computer repair, or web development inquiries in Burlington, Aldershot & surrounding areas.',
      path: '/contact'
    });
    this.profileService.profile$.subscribe(profile => {
      this.profile = profile;
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

  submitForm() {
    // Handle form submission
    const emailBody = `
      Name: ${this.profile.name}
      Email: ${this.profile.email}
      Message: ${this.profile.message}
      Note: ${this.profile.subject}
    `;

    const mailtoLink = `mailto:carlos@geek2go.ca?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    console.log('Form submitted!');
  }

}
