import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DjPackage {
  id: number;
  type: 'Wedding' | 'Birthday' | 'Corporate' | 'Other';
  title: string;
  description: string;
  base_price: number;
  duration_hours: number;
  sound: string;
  microphone: string;
  music: string;
  lights: string;
  emcee: string;
  details1: string;
  details2: string;
  details3: string;
  recommended_for: string;
  addOns: string;
  imageSample: string;
  cost_per_hour: number;
  }

@Injectable({
  providedIn: 'root'
})
export class DjPackagesService {

  private apiUrl = 'https://back.funkyrobot.ca/djpackages';

  constructor(private http: HttpClient) {}

  // Fetch all packages from the API
  getPackages(): Observable<DjPackage[]> {
    return this.http.get<DjPackage[]>(this.apiUrl);
  }

  // Fetch a single package by ID
  getPackageById(id: number): Observable<DjPackage> {
    return this.http.get<DjPackage>(`${this.apiUrl}/${id}`);
  }

  // Add a new package (if your API supports POST)
  addPackage(newPackage: DjPackage): Observable<DjPackage> {
    return this.http.post<DjPackage>(this.apiUrl, newPackage);
  }
}