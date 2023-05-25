import { Plan } from "./plan"
import { Serie } from "./serie"

export class Plataforma{
    nombre:string
    sitio:string
    planes:Plan[]
    series:Serie[]

    constructor(nombre:string, sitio:string, series:Serie[], planes:Plan[]){
        this.nombre = nombre
        this.sitio = sitio
        this.planes = planes
        this.series = series
    }
}