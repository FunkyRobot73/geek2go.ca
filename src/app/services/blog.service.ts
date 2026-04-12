import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from '../interfaces/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  // Use Central Configuration
  private apiUrl01 = environment.apiUrl;

  /**
   * Fetch all blogs (mapped for compatibility)
   */
  viewBlog() {
    return this.http.get<Blog[]>(this.apiUrl01).pipe(
      map(blogs => blogs
        .filter(blog => blog.catBlog?.toLowerCase() !== 'journal')
        .map(blog => ({
          ...blog,
          idBlog: blog.id.toString() 
        }))
      ),
      catchError(this.handleError)
    );
  }

  /**
   * Fetch a single blog post by ID
   */
  getBlogPost(id: number) {
    return this.http.get<Blog>(`${this.apiUrl01}/${id}`).pipe(
      map(blog => ({
        ...blog,
        idBlog: blog.id.toString()
      })),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong!'));
  }
}
