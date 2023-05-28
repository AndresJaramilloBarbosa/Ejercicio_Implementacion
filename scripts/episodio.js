export class Episodio {
    constructor(nombre, resumen, duracion, serie = null) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
        this.serie = serie;
    }
}
