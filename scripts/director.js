import { Persona } from "./persona.js";
export class Director extends Persona {
    constructor(nombre, fotografia, descripcion, series) {
        super(nombre, fotografia, descripcion);
        this.series = series;
    }
    agregarSeries(serie) {
        this.series.push(serie);
    }
    mostrarDetalleDirector(director) {
        console.log(`Detalle del director "${director.nombre}":`);
        console.log(`- Fotografía: ${director.fotografia}`);
        console.log(`- Descripción: ${director.descripcion}`);
        console.log("- Series:");
        for (const serie of director.series) {
            console.log(`  - ${serie.nombre}`);
        }
        console.log(`\n`);
    }
}
