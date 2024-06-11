import { Usluga } from "./usluga"

export class Putnik {
    korisnickoIme: string = ""
    lozinka: string = ""
    ime: string = ""
    prezime: string = ""
    tip: string = ""
    imelj: string = ""
    lokacijatrenutna: string = ""
    novac: number = 0
    lista: Usluga[] = []
}