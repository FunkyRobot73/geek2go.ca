import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ProfileService } from 'src/app/services/profile.service';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/interfaces/blog';
import { PROJECT_UPDATES, Transmission } from 'src/app/services/twitter.data';
import { SeoService } from 'src/app/services/seo.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AiDiagnosticComponent } from './ai-diagnostic/ai-diagnostic.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, LatestArticlesComponent, AiDiagnosticComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  profile: any;
  mainFeedArticles: Blog[] = [];
  featuredOps: any[] = [];
  transmissions: Transmission[] = PROJECT_UPDATES;
  imageBaseUrl = environment.imageBaseUrl;

  private profileService = inject(ProfileService);
  private blogService = inject(BlogService);
  private seo = inject(SeoService);
  private http = inject(HttpClient);

  ngOnInit() {
    this.seo.setPage({
      title: 'IT Support & Computer Repair Burlington',
      description: 'Expert IT support, computer repair, virus removal, data recovery & web development in Burlington, Aldershot, Oakville & Hamilton. 25+ years experience. Call Geek2Go.ca today!',
      path: '/'
    });
    this.profileService.profile$.subscribe(data => {
      this.profile = data;
      this.initializeFeaturedOps();
      this.fetchTransmissions();
    });

    this.blogService.viewBlog().subscribe({
      next: (blogs) => {
        // Take latest 3 for the main channel feed
        this.mainFeedArticles = blogs.slice(-3).reverse();
      }
    });
  }

  private fetchTransmissions() {
    const url = this.profile?.transmissionsJsonUrl;
    if (!url) {
      return;
    }
    this.http.get<Transmission[]>(url).subscribe({
      next: (data) => {
        if (Array.isArray(data) && data.length > 0) {
          this.transmissions = data;
        }
      },
      error: (err) => {
        console.warn('Failed to load dynamic transmissions from GitHub, using offline fallback:', err);
      }
    });
  }

  private initializeFeaturedOps() {
    this.featuredOps = [
      { 
        title: 'Local AI Hubs', 
        subtitle: 'Private & Subscription-Free', 
        icon: 'fa-solid fa-brain',
        link: '/services',
        color: '#81b64c'
      },
      { 
        title: 'Business Box', 
        subtitle: 'De-Googled Linux Server', 
        icon: 'fa-solid fa-server',
        link: '/services',
        color: 'var(--chess-heading-text)'
      },
      { 
        title: 'Custom Coding', 
        subtitle: 'Linux, Web & SEO Scripts', 
        icon: 'fa-solid fa-code',
        link: '/services',
        color: '#81b64c'
      },
      { 
        title: 'Linux Clinic', 
        subtitle: 'Ditch License Fees', 
        icon: 'fa-solid fa-linux',
        link: '/services',
        color: 'var(--chess-heading-text)'
      },
      { 
        title: 'Deal Finder', 
        subtitle: 'Hardware Recycling', 
        icon: 'fa-solid fa-radar',
        link: '/sourcing-agent',
        color: '#81b64c'
      }
    ];
  }
}
