import { Time } from "@angular/common"

export class Booking {
    info_name: string | undefined
    info_adresse_besteller: string | undefined
    info_adresse_anlass: string | undefined
    info_telefon: string | undefined
    info_email: string | undefined
    info_datum: Date | undefined
    info_zeit: Time | undefined
    info_full_date: any
    info_dauer_anlass: number | undefined
    info_anzahl_tage: boolean | undefined
    info_anzahl_erwachsene: number | undefined
    info_anzahl_kinder: number | undefined
    req_ofen: any
    req_personal: any
    req_belegt_durch: any
    req_transport: boolean | undefined
    req_zutaten: any
    req_beilagen: any
    req_geschirr: any
    info_strom_wasser: boolean | undefined
    info_bemerkungen: string | undefined
}