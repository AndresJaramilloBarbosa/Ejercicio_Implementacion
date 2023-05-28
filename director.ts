import { Persona } from "./persona.js";
import { Serie } from "./serie";

export class Director extends Persona{
    series:Serie[]

    constructor(nombre:string, fotografia:string, descripcion:string, series:Serie[]){
        super(nombre,fotografia,descripcion)
        this.series = series
    }

    agregarSeries(serie:Serie){
        this.series.push(serie)
    }

    mostrarDetalleDirector(director: Director): void {
        
        console.log(`Detalle del director "${director.nombre}":`);
        console.log(`- Fotografía: ${director.fotografia}`);
        console.log(`- Descripción: ${director.descripcion}`);
        console.log("- Series:");

        for (const serie of director.series) {
          console.log(`  - ${serie.nombre}`);
        }
        console.log(`\n`)
    }
}