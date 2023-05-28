import { Persona } from "./persona.js";
export class Actor extends Persona {
    constructor(nombre, fotografia, descripcion, series) {
        super(nombre, fotografia, descripcion);
        this.series = series;
    }
    agregarSeries(serie) {
        this.series.push(serie);
    }
    mostrarDetalleActor(actor) {
        console.log(`Detalle del actor "${actor.nombre}":`);
        console.log(`- Fotografía: ${actor.fotografia}`);
        console.log(`- Descripción: ${actor.descripcion}`);
        console.log("- Series:");
        for (const serie of actor.series) {
            console.log(`  - ${serie.nombre}`);
        }
        console.log(`\n`);
    }
}
