import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ProfileService } from 'src/app/services/profile.service';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, LatestArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  profile: any;
  mainFeedArticles: Blog[] = [];
  featuredOps: any[] = [];

  private profileService = inject(ProfileService);
  private blogService = inject(BlogService);

  ngAfterViewInit() {
    // Re-initialize Twitter widgets if script is loaded
    if ((window as any).twttr && (window as any).twttr.widgets) {
      (window as any).twttr.widgets.load();
    }
  }

  ngOnInit() {
    this.profileService.profile$.subscribe(data => {
      this.profile = data;
      this.initializeFeaturedOps();
      
      // Trigger Twitter load after data arrives and DOM updates
      setTimeout(() => {
        if ((window as any).twttr && (window as any).twttr.widgets) {
          (window as any).twttr.widgets.load();
        }
      }, 100);
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
