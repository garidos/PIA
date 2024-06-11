import { Ponuda } from "./ponuda"

export class Agencija {
    korisnickoIme: string = ""
    lozinka: string = ""
    tip: string = ""
    naziv: string = ""
    PIB: number = 0
    usluge: Ponuda[] = []
}