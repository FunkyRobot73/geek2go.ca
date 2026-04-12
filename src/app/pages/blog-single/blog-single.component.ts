import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from 'src/environments/environment';
import { Blog } from '../../interfaces/blog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-blog-single',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.scss'
})
export class BlogSingleComponent implements OnInit {
  imageBaseUrl = environment.imageBaseUrl;

  
  profile: any;
  blogPost: Blog | null = null;
  loading: boolean = true;
  error: string | null = null;
recentBlogs: Blog[] = []; // For sidebar recent posts

  constructor(
    private route: ActivatedRoute, 
    private blogService: BlogService,
    private profileService: ProfileService,
    private seo: SeoService
  ) {
    this.profileService.profile$.subscribe(data => {
      this.profile = data;
    });
    this.blogService.viewBlog().subscribe({
      next: (data) => {
        this.recentBlogs = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchBlogPost(id);
    } else {
      this.error = 'Invalid blog post ID';
      this.loading = false;
    }
  }

  fetchBlogPost(id: string): void {
    this.blogService.getBlogPost(+id).subscribe({
      next: (post) => {
        this.blogPost = post;
        this.seo.setPage({
          title: post.titleBlog || 'Blog Post — Geek2Go.ca',
          description: post.subtitleBlog || 'Read the latest from Geek2Go.ca — IT tips, tech news and geek culture from Burlington.',
          path: `/blog-single/${post.idBlog}`
        });
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load blog post';
        this.loading = false;
      }
    });
  }

}
