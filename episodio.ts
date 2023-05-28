import { Serie } from "./serie.js"

export class Episodio {
    nombre:string
    resumen:string
    duracion:string
    serie:Serie | null

    constructor(nombre:string, resumen:string, duracion:string, serie:Serie | null = null){
        this.nombre = nombre
        this.resumen =resumen
        this.duracion = duracion
        this.serie = serie
    }
}