import { Plataforma } from "./plataforma"

export class Plan{
    precio:number
    plataforma:Plataforma

    constructor(precio:number, plataforma:Plataforma){
        this.precio = precio
        this.plataforma = plataforma
    }
}