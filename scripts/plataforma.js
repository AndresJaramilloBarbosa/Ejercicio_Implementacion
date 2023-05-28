export class Plataforma {
    constructor(nombre, sitio, series, planes) {
        this.nombre = nombre;
        this.sitio = sitio;
        this.planes = [];
        this.series = [];
    }
    agregarPlanes(planes) {
        this.planes.push(planes);
    }
    mostrarPlanes() {
        console.log(`Planes en la plataforma ${this.nombre}:`);
        this.planes.forEach((plan, index) => {
            console.log(`Plan ${index + 1}: Precio: ${plan.precio}`);
        });
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
    mostrarSeries() {
        console.log(`Series en la plataforma ${this.nombre}:`);
        this.series.forEach((serie, index) => {
            console.log(`Serie ${index + 1}: ${serie.nombre}`);
        });
        console.log(`\n`);
    }
    mostrarDetallePlataforma() {
        console.log(`El detalle de la plataforma ${this.nombre}`);
        console.log(`Sitio ${this.sitio}`);
        this.mostrarSeries();
        this.mostrarPlanes();
    }
}
