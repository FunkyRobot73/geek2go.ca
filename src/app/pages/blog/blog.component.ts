import { Component, inject } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../../interfaces/blog';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-blog',
  imports: [RouterModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  viewBlogService = inject(BlogService);
  imageBaseUrl = environment.imageBaseUrl;
  seo = inject(SeoService);
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  categories = ['All', 'Comics', 'Music', 'Rants', 'Tech', 'Media'];
  selectedCategory = '';

  constructor() {
    this.seo.setPage({
      title: 'Tech Blog — Geek Culture, IT Tips & More',
      description: 'Read the Geek2Go blog for IT tips, tech news, comics, music and geek culture from Burlington\'s own IT expert, Carlos Sousa.',
      path: '/blogs'
    });
    this.viewBlogService.viewBlog().subscribe({
      next: (data) => {
        this.blogs = data;
        this.filteredBlogs = [...this.blogs]; // Initialize with all blogs
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      // Filter out 'journal' category when showing all
      this.filteredBlogs = this.blogs.filter(blog =>
        blog.catBlog.toLowerCase() !== 'journal'
      );
    } else {
      this.filteredBlogs = this.blogs.filter(blog =>
        blog.catBlog.toLowerCase() === category.toLowerCase() &&
        blog.catBlog.toLowerCase() !== 'journal'
      );
    }
  }

}
