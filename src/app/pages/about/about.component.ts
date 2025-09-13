import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profile: any;
  socialPlatforms: any[] = [];
  servicesData: any[] = [];

  constructor(
    private profileService: ProfileService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.profileService.profile$.subscribe(profile => {
      this.profile = profile;
      this.initializeData();
    });
  }
  private initializeData() {
    this.socialPlatforms = [
      { platform: 'facebook', icon: 'fab fa-facebook-f' },
      { platform: 'instagram', icon: 'fab fa-instagram' },
      { platform: 'twitter', icon: 'fab fa-twitter' },
      { platform: 'tiktok', icon: 'fab fa-tiktok' },
      { platform: 'youtube', icon: 'fab fa-youtube' }
    ];

    this.servicesData = [
      { 
        title: 'DJ Services', 
        description: this.profile?.djBlurb || 'Professional music mixing for your event', 
        icon: 'fas fa-music' 
      },
      { 
        title: 'Photo Booth', 
        description: this.profile?.photoboothBlurb || 'Fun photo experiences for your guests', 
        icon: 'fas fa-camera' 
      },
      { 
        title: 'Full Service', 
        description: this.profile?.shortBlurb || 'Complete event entertainment solutions', 
        icon: 'fas fa-star' 
      }
    ];
  }

  getSafeVideoUrl(url: string) {
    if (!url) return '';
    const videoId = url.split('v=')[1]?.split('&')[0];
    if (!videoId) return '';
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

}
