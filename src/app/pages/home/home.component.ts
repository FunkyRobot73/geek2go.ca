import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ProfileService } from 'src/app/services/profile.service';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/interfaces/blog';
import { TACTICAL_TRANSMISSIONS, Transmission } from 'src/app/services/twitter.data';

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

  ngOnInit() {
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
        title: 'System Repair', 
        subtitle: 'Hardware & OS Recovery', 
        icon: 'fa-solid fa-microchip',
        link: '/services',
        color: '#81b64c'
      },
      { 
        title: 'Web Forge', 
        subtitle: 'Custom Dev & SEO', 
        icon: 'fa-solid fa-code',
        link: '/services',
        color: '#fff'
      },
      { 
        title: 'Nerd Academy', 
        subtitle: '1-on-1 Tech Training', 
        icon: 'fa-solid fa-graduation-cap',
        link: '/services',
        color: '#81b64c'
      }
    ];
  }
}
