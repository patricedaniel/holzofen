import { Time } from "@angular/common"

export class Booking {
    info_name: string | undefined
    info_adresse_besteller: string | undefined
    info_adresse_anlass: string | undefined
    info_telefon: string | undefined
    info_email: string | undefined
    info_datum: Date | undefined
    info_zeit: Time | undefined
    info_full_date: Date | undefined
    info_dauer_anlass: number | undefined
    info_anzahl_tage: boolean | undefined
    info_anzahl_erwachsene: number | undefined
    info_anzahl_kinder: number | undefined
    req_ofen: boolean = true
    req_personal: string[] = []
    req_personal_pizaiolo: boolean = false
    req_personal_helfer: boolean = false
    req_belegt_durch: any
    req_transport: boolean | undefined
    req_zutaten: any
    req_zutaten_teig: boolean = false
    req_zutaten_mehr_zutaten: boolean = false
    req_beilagen: any
    req_beilagen_getraenke: boolean = false
    req_beilagen_salat: boolean = false
    req_beilagen_dessert: boolean = false
    req_beilagen_mehr_beilagen: boolean = false
    req_geschirr: any
    info_strom_wasser: boolean | undefined
    info_bemerkungen: string | undefined
}