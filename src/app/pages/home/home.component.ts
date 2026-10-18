import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ProfileService } from 'src/app/services/profile.service';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/interfaces/blog';
import { PROJECT_UPDATES, Transmission } from 'src/app/services/twitter.data';
import { SeoService } from 'src/app/services/seo.service';
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
        // Filter for Tech articles (backend returns newest first via createdAt DESC)
        const techBlogs = blogs.filter(blog => blog.catBlog?.toLowerCase().includes('tech'));
        const nonComicBlogs = blogs.filter(blog => !blog.catBlog?.toLowerCase().includes('comic'));
        const source = techBlogs.length >= 3 ? techBlogs : (nonComicBlogs.length > 0 ? nonComicBlogs : blogs);
        this.mainFeedArticles = source.slice(0, 3);
      }
    });
  }

  private initializeFeaturedOps() {
    this.featuredOps = [
      {
        title: 'What is OpenSource?',
        subtitle: 'You do not need to spend a fortune to have good technology.',
        icon: 'fa-solid fa-unlock-keyhole',
        link: 'https://www.youtube.com/watch?v=29w_rM2C7a4',
        color: '#81b64c'
      },
      {
        title: 'What is Linux?',
        subtitle: 'Ditch the License Fee',
        icon: 'fa-brands fa-linux',
        link: 'https://www.youtube.com/watch?v=JgXn4xG5f6A',
        color: 'var(--chess-heading-text)'
      },
      {
        title: 'What is Linux Mint?',
        subtitle: 'A Friendly Face',
        icon: 'fa-solid fa-leaf',
        link: 'https://www.youtube.com/watch?v=tV6Xn4xG5f6A',
        color: '#81b64c'
      },
      {
        title: 'Ditch subscription fees',
        subtitle: 'Why pay for software? ... Why ??',
        icon: 'fa-solid fa-piggy-bank',
        link: 'https://www.youtube.com/watch?v=Y-yC3j4QJnA',
        color: 'var(--chess-heading-text)'
      }
    ];
  }
}
