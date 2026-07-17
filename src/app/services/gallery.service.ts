import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface GalleryItem {
  id: number;
  title: string;
  blurb: string;
  date: string;
  image: string;
  category: string;
  site: string;
  order: number;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Resolve base path from environment
    const base = environment.apiUrl.replace(/\/blogs$/, '');
    this.apiUrl = `${base}/gallery`;
  }

  getImageUrl(filename: string): string {
    if (!filename) return '';
    return `${environment.imageBaseUrl}${filename}`;
  }

  getGalleryItems(site?: string, category?: string): Observable<GalleryItem[]> {
    let url = this.apiUrl;
    const params: string[] = [];
    if (site) params.push(`site=${encodeURIComponent(site)}`);
    if (category) params.push(`category=${encodeURIComponent(category)}`);
    
    if (params.length > 0) {
      url += '?' + params.join('&');
    }
    return this.http.get<GalleryItem[]>(url);
  }
}
