import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { observable } from 'rxjs';
import { Booking } from './models/class/booking';
import { DirectusBookingPublic } from './models/responses/booking';
import { BookingService } from './services/booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  step = 1;
  title = 'Unverbindliche Anfrage';
  subTitle = 'Details zum Anlass'
  booking = new Booking()
  bookedDates: Record<number, Array<number>> = {}


  dateFilter: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      let datesOfMonth = this.bookedDates[cellDate.getMonth()]
      if (datesOfMonth != undefined && datesOfMonth.includes(cellDate.getDate())) {
        return 'disabled-class'
      }
    }
    return '';
  };

  constructor(private bookingService: BookingService, private renderer: Renderer2) {
    this.loadAppointments()
    this.faker()
  }

  //makes fake data
  private faker() {
    this.booking.info_adresse_anlass = "Universitätsstrasse 23, 4562 Biberist"
    //this.booking.info_anzahl_erwachsene = 50
    this.booking.info_anzahl_kinder = 25
    this.booking.info_anzahl_tage = true
    this.booking.info_dauer_anlass = 6
    this.booking.info_full_date = new Date()
    this.booking.info_bemerkungen = "Bemerkung"
    this.booking.info_strom_wasser = true
    this.booking.req_beilagen_salat = true
    this.booking.req_beilagen_dessert = true
    this.booking.req_beilagen_mehr_beilagen = true
    this.booking.req_beilagen_getraenke = true
    this.booking.req_belegt_durch = "Catering"
    this.booking.req_geschirr = true
    this.booking.req_ofen = true
    this.booking.req_personal_helfer = true
    this.booking.req_personal_pizaiolo = true
    this.booking.req_zutaten_mehr_zutaten = true
    this.booking.req_zutaten_teig = true
    this.booking.req_transport = true
    this.booking.info_adresse_besteller = "Dorfstrasse, 4562 Biberist"
    this.booking.info_email = "leonard.hofstadter@unibiberist.ch"
    this.booking.info_name = "Leonard Hofstadter"
    this.booking.info_telefon = "032 666 18 32"
  }

  private loadAppointments() {
    this.bookingService.getAllActiveReservations().subscribe((result: DirectusBookingPublic) => {
      for (let date of result.data) {
        let parsedDate = new Date(date.info_datum);
        let month = parsedDate.getMonth()
        let day = parsedDate.getDate()
        let isTwoDay = date.info_anzahl_tage
        if (this.bookedDates[month] == null) {
          this.bookedDates[month] = [day]
          if (isTwoDay) {
            this.bookedDates[month].push(day + 1)
          }
        } else {
          this.bookedDates[month].push(day)
          if (isTwoDay) {
            this.bookedDates[month].push(day + 1)
          }
        }
      }
    })
  }

  doubleIt(pizzaEsser: any) {
    if (isNaN(pizzaEsser)) {
      return 0
    }
    return pizzaEsser * 2
  }
  previousStep() {
    this.step--;
    this.initalizeStep()
  }

  nextStep() {
    if(!this.booking.info_full_date) {
      alert("Hoppla – scheint als hättest du gar kein Datum ausgewählt!");
    }
    else if(!this.booking.info_zeit) {
      alert("Leider hast du keine gültige Uhrzeit eingegeben!");
    }
    else if(!this.booking.info_anzahl_erwachsene) {
      alert("Gib eine ungefähre Anzahl erwachsener Pizzaesser an!");
    }
    else if(!this.booking.info_adresse_anlass) {
      alert("Bitte füll zuerst die Adresse des Veranstaltungsortes aus!");
    } 
    else {
      console.log(this.booking)
      this.step++;
      this.initalizeStep()
    }
  }

  sendForm() {
    if(!this.booking.info_name) {
      alert("Bitte füll zuerst deinen Vor- und Nachname aus!");
    }
    else if(!this.booking.info_email || !this.booking.info_email.includes("@")) {
      alert("Hoppla, das scheint keine gültige E-Mail-Adresse zu sein!");
    }
    else if(!this.booking.info_telefon) {
      alert("Gerne antworten wir dir telefonisch, dafür brauchen wir aber eine Telefonnummer von dir!");
    }
    else if(!this.booking.info_adresse_besteller) {
      alert("Bitte gib zuerst eine Rechnungsadresse an!");
    } 
    else {
      this.bookingService.createReservation(this.booking).subscribe((data: any) => {
        console.log(data)
      })
      this.nextStep()
    }
  }

  initalizeStep() {
    console.log(this.booking)
    switch (this.step) {
      case 1:
        this.subTitle = 'Details zum Anlass'
        break;
      case 2:
        this.subTitle = 'Was brauchen sie für ihren Anlass?'
        break;
      case 3:
        this.subTitle = 'Wie erreichen wir Sie?'
        break;
      case 4:
        this.subTitle = 'Vielen Dank für Ihre Anfrage'
        break;
    }
  }

}


