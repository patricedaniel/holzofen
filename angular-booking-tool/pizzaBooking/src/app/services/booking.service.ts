import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DirectusBookingPublic } from '../models/responses/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl = environment.API_BASE_URL
  constructor(private http: HttpClient) { }

  public getAllActiveReservations(): Observable<DirectusBookingPublic> {
    let url = this.baseUrl + "/items/reservations?filter[status][neq]=rejected&filter[info_datum][gt]=now"
    return this.http.get<DirectusBookingPublic>(url);
  }
}
