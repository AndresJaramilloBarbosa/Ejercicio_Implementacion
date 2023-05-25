import { Persona } from "./persona";
import { Serie } from "./serie";

export class Actor extends Persona{
    series:Serie[]

    constructor(nombre:string, fotografia:string, descripcion:string, series:Serie[]){
        super(nombre,fotografia,descripcion)
        this.series = series
    }

}
