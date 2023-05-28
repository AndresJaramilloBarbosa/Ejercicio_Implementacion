import { Plataforma } from "./plataforma.js"

export class Plan{
    precio:number
    plataformas:Plataforma | null

    constructor(precio:number, plataforma:Plataforma){
        this.precio = precio
        this.plataformas = plataforma
    }
}