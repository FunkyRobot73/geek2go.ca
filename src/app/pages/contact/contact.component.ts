import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-contact',
  imports: [NgFor, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 profile: any;
  
  constructor(private profileService: ProfileService, private sanitizer: DomSanitizer) {
    
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

    const mailtoLink = `mailto:carlos@funkyrobot.ca?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    console.log('Form submitted!');
  }

}
