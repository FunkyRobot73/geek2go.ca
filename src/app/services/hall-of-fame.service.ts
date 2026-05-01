import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HallOfFameItem {
  id?: number;
  title: string;
  subtitle?: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  facts?: string;
  tags?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {
  private apiUrl = 'https://back.geek2go.ca/api/hall-of-fame';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
