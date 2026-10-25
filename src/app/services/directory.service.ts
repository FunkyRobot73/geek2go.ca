import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DirectoryListing, DirectoryCounts } from '../interfaces/directory.interface';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  private apiUrl: string;
  private publicBaseUrl: string;

  constructor(private http: HttpClient) {
    const base = environment.apiUrl.replace(/\/blogs$/, '');
    this.apiUrl = `${base}/directory`;
    this.publicBaseUrl = base.replace(/\/api$/, '') + '/public';
  }

  // Public: Get approved listings
  getApprovedListings(category?: string, search?: string): Observable<{ success: boolean; listings: DirectoryListing[] }> {
    let params = new HttpParams();
    if (category && category !== 'All') {
      params = params.set('category', category);
    }
    if (search && search.trim() !== '') {
      params = params.set('search', search.trim());
    }
    return this.http.get<{ success: boolean; listings: DirectoryListing[] }>(this.apiUrl, { params });
  }

  // Public: Get distinct categories from backend
  getCategories(): Observable<{ success: boolean; categories: string[] }> {
    return this.http.get<{ success: boolean; categories: string[] }>(`${this.apiUrl}/categories`);
  }

  // Public: Submit listing
  submitListing(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submit`, formData);
  }

  // Admin: Get listings with stats
  getAdminListings(status?: string): Observable<{ success: boolean; counts: DirectoryCounts; listings: DirectoryListing[] }> {
    let params = new HttpParams();
    if (status && status !== 'all') {
      params = params.set('status', status);
    }
    return this.http.get<{ success: boolean; counts: DirectoryCounts; listings: DirectoryListing[] }>(`${this.apiUrl}/admin`, { params });
  }

  // Admin: Approve or Reject
  updateStatus(id: number, status: 'approved' | 'rejected' | 'pending', adminNotes?: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}/status`, { status, adminNotes });
  }

  // Admin: Update full listing
  updateListing(id: number, data: FormData | any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // Admin: Delete listing
  deleteListing(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Image helper for cards & admin view
  resolveImageUrl(path?: string): string {
    if (!path) {
      return `${this.publicBaseUrl}/avatars/default-dad.svg`;
    }
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    if (path.startsWith('avatars/') || path.startsWith('uploads/')) {
      return `${this.publicBaseUrl}/${path}`;
    }
    return `${this.publicBaseUrl}/uploads/${path}`;
  }
}
