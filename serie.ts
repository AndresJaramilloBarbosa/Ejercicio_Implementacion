import { Actor } from "./actor"
import { Director } from "./director"
import { Categoria } from "./categoria"
import { Episodio } from "./episodio"
import { Plataforma } from "./plataforma"

export class Serie{
    imagen:string
    nombre:string
    actores:Actor[]
    director:Director
    categorias:Categoria[]
    episodios:Episodio[]
    plataformas:Plataforma[]

    constructor(imagen:string, nombre:string, director:Director, actores:Actor[], categorias:Categoria[], episodios:Episodio[], plataformas:Plataforma[]){
        this.imagen = imagen
        this.nombre = nombre
        this.director = director
        this.actores = actores
        this.categorias = categorias
        this.episodios = episodios
        this.plataformas = plataformas

    }
}