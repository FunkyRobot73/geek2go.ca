import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ProfileService } from 'src/app/services/profile.service';
import { PROFILE_DATA } from 'src/app/services/profile.data';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/interfaces/blog';
import { PROJECT_UPDATES, Transmission } from 'src/app/services/twitter.data';
import { SeoService } from 'src/app/services/seo.service';
import { environment } from 'src/environments/environment';

import { AiDiagnosticComponent } from './ai-diagnostic/ai-diagnostic.component';
import { PrintLabComponent } from './print-lab/print-lab.component';

const DEFAULT_FEATURED_OPS = [
  {
    title: 'What is OpenSource?',
    subtitle: 'You do not need to spend a fortune to have good technology.',
    icon: 'fa-solid fa-unlock-keyhole',
    link: 'https://www.youtube.com/watch?v=PVD1LNDxOnc',
    color: '#81b64c'
  },
  {
    title: 'What is Linux?',
    subtitle: 'Ditch the License Fee',
    icon: 'fa-brands fa-linux',
    link: 'https://www.youtube.com/watch?v=eQbIxEw3AI0',
    color: 'var(--chess-heading-text)'
  },
  {
    title: 'What is Linux Mint?',
    subtitle: 'A Friendly Face',
    icon: 'fa-solid fa-leaf',
    link: 'https://www.youtube.com/watch?v=n1jT9leP8sE&t=17s',
    color: '#81b64c'
  },
  {
    title: 'Ditch subscription fees',
    subtitle: 'Why pay for software? ... Why ??',
    icon: 'fa-solid fa-piggy-bank',
    link: 'https://www.youtube.com/watch?v=eS-e_O4egsU',
    color: 'var(--chess-heading-text)'
  }
];

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, LatestArticlesComponent, AiDiagnosticComponent, PrintLabComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  profile: any = PROFILE_DATA;
  mainFeedArticles: Blog[] = [];
  featuredOps: any[] = DEFAULT_FEATURED_OPS;
  transmissions: Transmission[] = PROJECT_UPDATES;
  imageBaseUrl = environment.imageBaseUrl;

  private profileService = inject(ProfileService);
  private blogService = inject(BlogService);
  private seo = inject(SeoService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.seo.setPage({
      title: 'IT Support, 3D Printing & Computer Repair Burlington',
      description: 'Expert IT support, 3D printing & rapid prototyping (Bambu Lab A1), computer repair, virus removal, data recovery & web development in Burlington & Aldershot. Geek2Go.ca',
      path: '/'
    });
    this.profileService.profile$.subscribe(data => {
      if (data) {
        this.profile = data;
      }
    });

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
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
}
