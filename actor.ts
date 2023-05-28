import { Persona } from "./persona.js";
import { Serie } from "./serie";

export class Actor extends Persona{
    series:Serie[]

    constructor(nombre:string, fotografia:string, descripcion:string, series:Serie[]){
        super(nombre,fotografia,descripcion)
        this.series = series
    }

    agregarSeries(serie:Serie){
        this.series.push(serie)
    }

    mostrarDetalleActor(actor: Actor): void {
        
        console.log(`Detalle del actor "${actor.nombre}":`);
        console.log(`- Fotografía: ${actor.fotografia}`);
        console.log(`- Descripción: ${actor.descripcion}`);
        console.log("- Series:");

        for (const serie of actor.series) {
          console.log(`  - ${serie.nombre}`);
        }
        console.log(`\n`)
    }
}
