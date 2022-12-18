import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DirectusBookingPublic } from '../models/responses/booking';
import { Booking } from '../models/class/booking';

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

  public getAllAbsences(): Observable<DirectusBookingPublic> {
    let url = this.baseUrl + "/items/absences"
    return this.http.get<DirectusBookingPublic>(url);
  }

  public createReservation(booking: Booking): Observable<DirectusBookingPublic> {
    let url = this.baseUrl + "/items/reservations"


    let zutaten: string[] = []
    if (booking.req_zutaten_mehr_zutaten) {
      zutaten.push("mehr_zutaten")
    }
    if (booking.req_zutaten_teig) {
      zutaten.push("teig")
    }

    let beilagen: string[] = []
    if (booking.req_beilagen_dessert) {
      beilagen.push("dessert")
    }
    if (booking.req_beilagen_getraenke) {
      beilagen.push("getraenke")
    }
    if (booking.req_beilagen_mehr_beilagen) {
      beilagen.push("mehr_beilagen")
    }
    if (booking.req_beilagen_salat) {
      beilagen.push("salat")
    }
    let dateString;
    if (booking.info_full_date != undefined) {
      dateString = this.getDateString(booking)
    }
    let timeString;
    if (booking.info_zeit != undefined) {
      timeString = booking.info_zeit.hours + ":" + booking.info_zeit.minutes + ":00"
    }

    let data = {
      "req_ofen": [
        "ofen"
      ],
      "req_personal": [

      ],
      "req_belegt_durch": booking.req_belegt_durch,
      "req_transport": booking.req_transport,
      "req_zutaten": zutaten,
      "req_beilagen": beilagen,
      "req_geschirr": booking.req_geschirr,
      "info_strom_wasser": booking.info_strom_wasser,
      "info_adresse_besteller": booking.info_adresse_besteller,
      "info_adresse_anlass": booking.info_adresse_anlass,
      "info_bemerkungen": booking.info_bemerkungen,
      "info_anzahl_erwachsene": booking.info_anzahl_erwachsene,
      "info_anzahl_kinder": booking.info_anzahl_kinder,
      "info_anzahl_tage": booking.info_anzahl_tage,
      "info_dauer_anlass": booking.info_dauer_anlass,
      "info_telefon": booking.info_telefon,
      "info_email": booking.info_email,
      "info_zeit": booking.info_zeit + ":00",
      "info_datum": dateString,
      "info_name": booking.info_name
    }
    return this.http.post<DirectusBookingPublic>(url, data);
  }

  getDateString(booking: any): String {
    if (booking != undefined) {
      let month = (booking.info_full_date.getMonth() + 1)
      if (month <= 9) {
        month = "0" + month
      }
      let date = booking.info_full_date.getDate()
      if (date <= 9) {
        date = "0" + date
      }
      return booking?.info_full_date.getFullYear() + "-" + month + "-" + date
    }
    return "";
  }
}
