import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // optimization
import { RouterModule } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../interfaces/blog';

@Component({
    selector: 'app-latest-articles',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './latest-articles.component.html',
    styleUrl: './latest-articles.component.scss'
})
export class LatestArticlesComponent implements OnInit {
    latestBlogs: Blog[] = [];
    isLoading = true;

    private blogService = inject(BlogService);

    ngOnInit(): void {
        this.blogService.viewBlog().subscribe({
            next: (blogs) => {
                // Filter for "Tech" category
                const techBlogs = blogs.filter(blog => blog.catBlog?.toLowerCase() === 'tech');

                // Take the latest 2
                this.latestBlogs = techBlogs.slice(-2).reverse();
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Failed to load blogs', err);
                this.isLoading = false;
            }
        });
    }
}
