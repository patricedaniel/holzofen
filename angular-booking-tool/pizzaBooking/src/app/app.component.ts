import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookedDate } from './models/class/booked-date';
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
  bookedDates: Array<BookedDate> = []
  snackBar: any;

  constructor(private bookingService: BookingService, private renderer: Renderer2, private matSnackBar: MatSnackBar) {
    this.loadAppointments()
    this.loadAbsences()
    // Activate faker for Testdata 
    // this.faker()
  }

  dateFilter: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      let datesOfMonth = this.getBookedDates(cellDate.getFullYear(), cellDate.getMonth())
      if (datesOfMonth != undefined && datesOfMonth.includes(cellDate.getDate())) {
        return 'disabled-class'
      }
    }
    return '';
  };

  private getBookedDates(year:number, month:number) : Array<number> {
    let bookedDays: number[] = []
    for (let bookedDate of this.bookedDates) {
      if (bookedDate.month == month && bookedDate.year == year) {
        if (bookedDate.day != 0 && !bookedDays.includes(bookedDate.day))
          bookedDays.push(bookedDate.day)
      }
    }
    return bookedDays
  }

  //makes fake data
  private faker() {
    this.booking.info_adresse_anlass = "Universitätsstrasse 23, 4562 Biberist"
    this.booking.info_anzahl_erwachsene = 50
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

  // load all Bookings to show mark not awaylable dates in the calendar
  private loadAppointments() {
    this.bookingService.getAllActiveReservations().subscribe((result: DirectusBookingPublic) => {
      for (let date of result.data) {
        let parsedDate = new Date(date.info_datum);
        let bookedDate = new BookedDate()
        bookedDate.year = parsedDate.getFullYear()
        bookedDate.month = parsedDate.getMonth()
        bookedDate.day = parsedDate.getDate()
        let isTwoDay = date.info_anzahl_tage
        this.bookedDates.push(bookedDate)
        if (isTwoDay) {
          let bookedDate = new BookedDate()
            bookedDate.year = parsedDate.getFullYear()
            bookedDate.month = parsedDate.getMonth()
            bookedDate.day = parsedDate.getDate()+1
            this.bookedDates.push(bookedDate)
        }
      }
    })
  }

  // load all Absences to show mark not awaylable dates in the calendar
  private loadAbsences() {
    this.bookingService.getAllAbsences().subscribe((result: DirectusBookingPublic) => {
      for (let date of result.data) {
        for (var arr = [], dt = new Date(date.absence_start); dt <= new Date(date.absence_end); dt.setDate(dt.getDate() + 1)) {
          //arr.push(new Date(dt));
          let parsedDate = new Date(dt);
          let bookedDate = new BookedDate()
          bookedDate.year = parsedDate.getFullYear()
          bookedDate.month = parsedDate.getMonth()
          bookedDate.day = parsedDate.getDate()
          this.bookedDates.push(bookedDate)
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
    this.scrollToTop()
  }

  nextStep() {
    if (!this.booking.info_full_date) {
      this.matSnackBar.open("Hoppla – scheint als hättest du gar kein Datum ausgewählt!", "OK");
    }
    else if (this.isInThePast(new Date(), this.booking.info_full_date)) {
      this.matSnackBar.open("Dein Wunschdatum liegt in der Vergangenheit!", "OK");
    }
    else if (this.dateDiff(new Date(), this.booking.info_full_date) < 9) {
      this.matSnackBar.open("Du solltes mindestens 10 Tage im voraus reservieren!", "OK");
    }
    else if (!this.booking.info_zeit) {
      this.matSnackBar.open("Leider hast du keine gültige Uhrzeit eingegeben!", "OK");
    }
    else if (!this.booking.info_anzahl_erwachsene) {
      this.matSnackBar.open("Gib eine ungefähre Anzahl erwachsener Pizzaesser an!", "OK");
    }
    else if (!this.booking.info_adresse_anlass) {
      this.matSnackBar.open("Bitte füll zuerst die Adresse des Veranstaltungsortes aus!", "OK");
    }
    else {
      this.step++;
      this.initalizeStep()
      this.scrollToTop()
    }
  }

  dateDiff(d1: Date, d2: Date) {
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(Number(d1) - Number(d2)) / msInDay);
  }

  isInThePast(d1: Date, d2: Date) {
    return d1.setHours(0, 0, 0, 0) <= d2.setHours(0, 0, 0, 0) ? false : true;
  }

  sendForm() {
    if (!this.booking.info_name) {
      this.matSnackBar.open("Bitte füll zuerst deinen Vor- und Nachname aus!", "OK");
    }
    else if (!this.booking.info_email || !this.booking.info_email.includes("@")) {
      this.matSnackBar.open("Hoppla, das scheint keine gültige E-Mail-Adresse zu sein!", "OK");
    }
    else if (!this.booking.info_telefon) {
      this.matSnackBar.open("Gerne antworten wir dir telefonisch, dafür brauchen wir aber eine Telefonnummer von dir!", "OK");
    }
    else if (!this.booking.info_adresse_besteller) {
      this.matSnackBar.open("Bitte gib zuerst eine Rechnungsadresse an!", "OK");
    }
    else {
      this.bookingService.createReservation(this.booking).subscribe((data: any) => {
      })
      this.nextStep()
    }
  }

  initalizeStep() {
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

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}


