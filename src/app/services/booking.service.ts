import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BookingResponse {
  success: boolean;
  bookingId?: string;
  customerId?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = "https://back.funkyrobot.ca"; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  createBooking(bookingData: any) {
    return this.http.post<BookingResponse>(`${this.apiUrl}/bookings`, bookingData);
  }

  getBookings() {
    return this.http.get(`${this.apiUrl}/bookings`);
  }

  getBooking(id: string) {
    return this.http.get(`${this.apiUrl}/bookings/${id}`);
  }
}
