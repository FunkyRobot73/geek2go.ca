import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ProfileService } from 'src/app/services/profile.service';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/interfaces/blog';
import { TACTICAL_TRANSMISSIONS, Transmission } from 'src/app/services/twitter.data';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, LatestArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  profile: any;
  mainFeedArticles: Blog[] = [];
  featuredOps: any[] = [];
  transmissions: Transmission[] = TACTICAL_TRANSMISSIONS;

  private profileService = inject(ProfileService);
  private blogService = inject(BlogService);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setPage({
      title: 'IT Support & Computer Repair Burlington',
      description: 'Expert IT support, computer repair, virus removal, data recovery & web development in Burlington, Aldershot, Oakville & Hamilton. 25+ years experience. Call Geek2Go.ca today!',
      path: '/'
    });
    this.profileService.profile$.subscribe(data => {
      this.profile = data;
      this.initializeFeaturedOps();
    });

    this.blogService.viewBlog().subscribe({
      next: (blogs) => {
        // Take latest 3 for the main channel feed
        this.mainFeedArticles = blogs.slice(-3).reverse();
      }
    });
  }

  private initializeFeaturedOps() {
    this.featuredOps = [
      { 
        title: 'Local AI Hubs', 
        subtitle: 'Revive & Private AI', 
        icon: 'fa-solid fa-microchip',
        link: '/services',
        color: '#81b64c'
      },
      { 
        title: 'Business Box', 
        subtitle: 'De-Googled Server', 
        icon: 'fa-solid fa-server',
        link: '/services',
        color: '#fff'
      },
      { 
        title: 'Agent Support', 
        subtitle: 'AI-Assisted Remote', 
        icon: 'fa-solid fa-robot',
        link: '/services',
        color: '#81b64c'
      },
      { 
        title: 'Linux Clinic', 
        subtitle: 'Open-Source Transition', 
        icon: 'fa-solid fa-linux',
        link: '/services',
        color: '#fff'
      }
    ];
  }
}
