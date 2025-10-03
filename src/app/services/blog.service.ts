import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  private apiUrl01 = "https://back.funkyrobot.ca/viewblog";

  viewBlog() {
    return this.http.get<any[]>(this.apiUrl01).pipe(
      map(blogs => blogs.filter(blog => blog.catBlog?.toLowerCase() !== 'journal')),
      catchError(this.handleError)
    );
    
  }

private handleError(error: any) {
  console.error('An error occurred:', error);
  return throwError(() => new Error('Something went wrong!'));
}
}
