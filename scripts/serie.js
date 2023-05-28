export class Serie {
    constructor(imagen, nombre, director, actores, categorias, episodios, plataformas) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.director = director;
        this.actores = actores;
        this.categorias = categorias;
        this.episodios = episodios;
        this.plataformas = plataformas;
    }
    agregarActor(actor) {
        this.actores.push(actor);
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    agregarEpisodios(episodio) {
        this.episodios.push(episodio);
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
    mostrarDetalle() {
        console.log(`Imagen: ${this.imagen} Nombre: ${this.nombre}`);
        console.log(`Director: ${this.director.nombre}`);
        this.actores.forEach((actor, index) => {
            console.log(`Actor ${index + 1}: ${actor.nombre}`);
        });
        this.categorias.forEach((categoria, index) => {
            console.log(`Categoria  ${index + 1}: ${categoria.nombre}`);
        });
        this.episodios.forEach((episodio, index) => {
            console.log(`Episodio  ${index + 1}: ${episodio.nombre}`);
        });
        this.plataformas.forEach((plataforma, index) => {
            console.log(`Plataforma  ${index + 1}: ${plataforma.nombre}`);
        });
        console.log(`\n`);
    }
    mostrarActoresYDirector() {
        console.log(`La lista de actores es la siguiente:`);
        this.actores.forEach((actor, index) => {
            console.log(`El actor ${index + 1}: ${actor.nombre}`);
        });
        console.log(`El director de la serie es: ${this.director.nombre}`);
        console.log(`\n`);
    }
}
