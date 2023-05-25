import { Persona } from "./persona";
export class Director extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
        this.series = [];
    }
}
