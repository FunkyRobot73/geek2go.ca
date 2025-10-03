import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../../interfaces/blog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-blog-single',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.scss'
})
export class BlogSingleComponent implements OnInit {

  
  blogPost: Blog | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

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
