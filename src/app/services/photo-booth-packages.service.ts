import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PbPackage {
  idPB: number;
  titlePB: string;
  descPB: string;
  base_pricePB: number;
  details1PB: string;
  details2PB: string;
  details3PB: string;
  recommended_forPB?: string;
  // conditions?: string;
  addOnsPB: string;
  imageSamplePB: string;  
  cost_per_hourPB: number;
  packagePB: string;
  hoursPB: number;
  propsPB: string;
  backdropPB: string;
  printsPB: string;
  layoutPB: string;
  usbPB: string;
  hostingPB: string;
  instantDigitalPB: string;
  guestBookPB: string;
  colorPB: string;
  indoorPB: string;
  greenScreenPB: string;
  type: 'cocktail' | 'standard' | 'ultimate' | 'custom';
}

@Injectable({
  providedIn: 'root'
})
export class PhotoBoothPackagesService {private apiUrl = 'https://back.funkyrobot.ca/photobooth';

  constructor(private http: HttpClient) {}

  // Fetch all packages from the API
  getPackages(): Observable<PbPackage[]> {
    return this.http.get<PbPackage[]>(this.apiUrl);
  }

  // Fetch a single package by ID
  getPackageById(id: number): Observable<PbPackage> {
    return this.http.get<PbPackage>(`${this.apiUrl}/${id}`);
  }

  // Add a new package (if your API supports POST)
  addPackage(newPackage: PbPackage): Observable<PbPackage> {
    return this.http.post<PbPackage>(this.apiUrl, newPackage);
  }
}

