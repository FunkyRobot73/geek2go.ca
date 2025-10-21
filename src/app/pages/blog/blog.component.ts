import { Component, inject } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../../interfaces/blog';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [NgFor, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  viewBlogService = inject(BlogService);
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  categories = ['All', 'Comics', 'Music', 'Rants', 'Tech', 'Media'];
  selectedCategory = '';

  constructor() {
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
