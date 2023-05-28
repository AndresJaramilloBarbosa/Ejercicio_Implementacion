import { Plan } from "./plan"
import { Serie } from "./serie"

export class Plataforma{
    nombre:string
    sitio:string
    planes:Plan[]
    series:Serie[]

    constructor(nombre:string, sitio:string, series:Serie[], planes:Plan[]){
        this.nombre = nombre
        this.sitio = sitio
        this.planes = []
        this.series = []
    }

    agregarPlanes(planes: Plan) {
      this.planes.push(planes);
    }

    mostrarPlanes() {
      console.log(`Planes en la plataforma ${this.nombre}:`);
      this.planes.forEach((plan, index) => {
        console.log(`Plan ${index + 1}: Precio: ${plan.precio}`);
      })
    }

    agregarSerie(serie:Serie){
      this.series.push(serie)
    }

    mostrarSeries(){
      console.log(`Series en la plataforma ${this.nombre}:`);
      this.series.forEach((serie, index) => {
        console.log(`Serie ${index + 1}: ${serie.nombre}`);
      })
      console.log(`\n`)
    }

    mostrarDetallePlataforma(){
      console.log(`El detalle de la plataforma ${this.nombre}`)
      console.log(`Sitio ${this.sitio}`)
      this.mostrarSeries()
      this.mostrarPlanes()
    }
}