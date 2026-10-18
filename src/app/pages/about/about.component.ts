import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-about',
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profile: any;
  socialPlatforms: any[] = [];
  servicesData: any[] = [];

  constructor(
    private profileService: ProfileService,
    private sanitizer: DomSanitizer,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'About Carlos Sousa — Burlington IT Expert',
      description: '25+ years IT experience in Burlington & Aldershot. Meet Carlos Sousa, founder of Geek2Go.ca — your local computer repair and tech support specialist.',
      path: '/about'
    });
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
        title: 'Geek2Go', 
        site: 'geek2go.ca',
        link: 'https://geek2go.ca',
        description: this.profile?.shortBlurb || 'Open source solutions, computer repair, Linux setups, and SEO.', 
        icon: 'fas fa-laptop-code' 
      },
      { 
        title: 'DJ Services', 
        site: 'funkyrobot.ca',
        link: 'https://funkyrobot.ca',
        description: this.profile?.djBlurb || 'Professional music mixing and high-energy entertainment for your event.', 
        icon: 'fas fa-music' 
      },
      { 
        title: 'iSellComics', 
        site: 'isellcomics.ca',
        link: 'https://isellcomics.ca',
        description: 'Comic book collecting, vintage back issues, graphic novels, and geek culture treasures.', 
        icon: 'fas fa-book-open' 
      },
      { 
        title: 'Photo Booth', 
        site: 'funkyrobot.ca',
        link: 'https://funkyrobot.ca',
        description: this.profile?.photoboothBlurb || 'State-of-the-art photo booth fun with props and instant prints.', 
        icon: 'fas fa-camera' 
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
