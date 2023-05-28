import { Plan } from "./plan.js";
import { Plataforma } from "./plataforma.js";
import { Serie } from "./serie.js";
import { Director } from "./director.js";
import { Categoria } from "./categoria.js";
import { Actor } from "./actor.js";
import { Episodio } from "./episodio.js";
//CATEGORIAS
const terror = new Categoria("Terror", []);
const suspenso = new Categoria("Suspenso", []);
const comica = new Categoria("Comica", []);
const accion = new Categoria("Accion", []);
const romantico = new Categoria("Romantico", []);
const acategorias = [];
acategorias.push(terror);
acategorias.push(suspenso);
acategorias.push(comica);
acategorias.push(accion);
acategorias.push(romantico);
//DIRECTORES
const dirLewis = new Director("Lewis", "www.fotografia1.com", "Es un actor de la epoca moderna", []);
const dirAna = new Director("Ana", "www.fotografia2.com", "Es una directora con reconocimiento mundial", []);
//ACTORES
const actBraddPitt = new Actor("Brad Pitt", "www.fotografia1.com", "Es un actor muy reconocido", []);
const actLeonardo = new Actor("Leonardo", "www.fotografia2.com", "Es un actor conocido por el Titanic", []);
//EPISODIOS
const episodio1 = new Episodio("El despertar", "Este es el inicio de la serie con este capitulo intrigante", "01:34:00", null);
const episodio2 = new Episodio("Avistamiento", "El personajke principal tiene su primera aparicion", "01:57:00", null);
//PLATAFORMAS
const netflix = new Plataforma("Netflix", "www.netflix.com", [], []);
const hbo = new Plataforma("HBO", "www.hbo.com", [], []);
const amazon = new Plataforma("Amazon", "www.amazon.com", [], []);
const disney = new Plataforma("Disney", "www.disney.com", [], []);
const plataformas = [];
plataformas.push(netflix);
plataformas.push(hbo);
plataformas.push(amazon);
plataformas.push(disney);
//PLANES
const plan1 = new Plan(10000, netflix);
const plan2 = new Plan(15000, netflix);
//SERIES
const fubar = new Serie("www.imagen2.com", "Fubar", dirAna, [], [], [], []);
const lost = new Serie("www.imagen1.com", "Lost", dirLewis, [], [], [], []);
lost.agregarActor(actBraddPitt);
lost.agregarActor(actLeonardo);
lost.agregarCategoria(terror);
lost.agregarCategoria(suspenso);
lost.agregarCategoria(accion);
lost.agregarEpisodios(episodio1);
lost.agregarEpisodios(episodio2);
lost.agregarPlataforma(netflix);
lost.agregarCategoria(hbo);
fubar.agregarPlataforma(netflix);
netflix.agregarPlanes(plan1);
netflix.agregarPlanes(plan2);
netflix.agregarSerie(fubar);
netflix.agregarSerie(lost);
dirLewis.agregarSeries(lost);
dirLewis.agregarSeries(fubar);
actBraddPitt.agregarSeries(lost);
actBraddPitt.agregarSeries(fubar);
//REQUERIMIENTOS
// 1- Mostrar el listado de series
netflix.mostrarSeries();
// 2- Mostrar el detalle de una serie en particular
lost.mostrarDetalle();
// 3- Mostrar el listado de categorias
console.log(`La lista de todas las categorias es:`);
acategorias.forEach((categoria, index) => {
    console.log(`Categoria ${index + 1}: ${categoria.nombre} `);
});
console.log(`\n`);
// 4- Mostrar el listado de actores y directores de una serie
lost.mostrarActoresYDirector();
// 5- Mostrar el detalle de un director y de un actor
dirLewis.mostrarDetalleDirector(dirLewis);
actBraddPitt.mostrarDetalleActor(actBraddPitt);
//6 - Mostrar el listado de las plataformas
plataformas.forEach((plataforma, index) => {
    console.log(`Plataforma ${index + 1}: ${plataforma.nombre}`);
});
console.log(`\n`);
//7- Mostrar el detalle de una plataforma
netflix.mostrarDetallePlataforma();
