import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
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
  step = 2;
  title = 'Unverbindliche Anfrage';
  subTitle = 'Details zum Anlass'
  booking = new Booking()
  bookedDates: Record<number, Array<number>> = {}
  info_anzahl_erwachsene_zweitage: number | undefined
  info_anzahl_kinder_zweitage: number | undefined


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
  }

  private loadAppointments() {
    this.bookingService.getAllActiveReservations().subscribe((result: DirectusBookingPublic) => {
      console.log(result.data[0].id)
      for (let date of result.data) {
        let parsedDate = new Date(date.info_datum);
        let month = parsedDate.getMonth()
        let day = parsedDate.getDate()
        console.log(date)
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

  doublecustomers() {
    this.info_anzahl_erwachsene_zweitage !== null && this.info_anzahl_erwachsene_zweitage !== undefined ? this.info_anzahl_erwachsene_zweitage*2 : null;
    this.info_anzahl_kinder_zweitage !== null && this.info_anzahl_kinder_zweitage !== undefined ? this.info_anzahl_kinder_zweitage*2 : null;
  }

  previousStep() {
    this.step--;
    this.initalizeStep()
  }

  nextStep() {
    this.step++;
    this.initalizeStep()
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
    }
  }

}
