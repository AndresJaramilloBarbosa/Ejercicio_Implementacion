import { Persona } from "./persona";
export class Actor extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
        this.series = [];
    }
}
