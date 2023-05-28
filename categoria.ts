import { Serie } from "./serie"

export class Categoria{
    nombre:string
    series:Serie[]

    constructor(nombre:string, series:Serie[]){
        this.nombre = nombre
        this.series = series
    }
}