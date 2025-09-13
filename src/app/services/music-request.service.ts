import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MusicRequest, EventPhase, SpecialDanceType } from '../interfaces/music-request';

@Injectable({
  providedIn: 'root'
})
export class MusicRequestService {
  private baseUrl = 'https://www.back.funkyrobot.ca/api';
  private baseUrl1 = 'https://www.back.funkyrobot.ca';

  constructor(private http: HttpClient) { }

  getEventPhases(): Observable<EventPhase[]> {
    return this.http.get<EventPhase[]>(`${this.baseUrl}/music-requests/phases`);
  }

  getSpecialDanceTypes(): Observable<SpecialDanceType[]> {
    return this.http.get<SpecialDanceType[]>(`${this.baseUrl}/music-requests/dance-types`);
  }

  saveMusicRequests(requests: MusicRequest[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/song_requests`, requests);
  }

  getCustomerEvents(customerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/customer-events/${customerId}`);
  }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl1}/customer2`);
  }

  getSongRequests(customerId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/song_requests/${customerId}`);
  // return this.http.get<any[]>(`${this.baseUrl}/song_requests/${customerId}`);

}

}
