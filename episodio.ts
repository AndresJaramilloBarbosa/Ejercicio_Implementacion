import { Serie } from "./serie"

export class Episodio {
    nombre:string
    resumen:string
    duracion:string
    serie:Serie

    constructor(nombre:string, resumen:string, duracion:string, serie:Serie){
        this.nombre = nombre
        this.resumen =resumen
        this.duracion = duracion
        this.serie = serie
    }


}