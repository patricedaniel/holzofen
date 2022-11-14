export interface DirectusBookingPublic {
    data: DirectusBookingPublic[]
}

export interface DirectusBookingPublic {
    id: number
    info_anzahl_tage: boolean;
    info_datum: Date
    absence_start: Date
    absence_end: Date
}
