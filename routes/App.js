
import { Footer } from "../layouts/Footer.js"
import { InicioSesion } from "../pages/IniciarSesion.js"
import { Error404 } from "../pages/Error404.js"
import { Inicio } from "../pages/Inicio.js"
import { RegistroAs } from "../pages/RegistroAsesor.js"
import getHash from "../connection/helpers/getHash.js"
import resolverRuta from "../connection/helpers/resolverRuta.js"

const Rutas = {

    "/" : Inicio,
    "/login" : InicioSesion,
    "/registrar-asesor": RegistroAs

}

const App = async () =>{

    const header = document.querySelector("header")
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")

    footer.innerHTML = await Footer()

    let ruta = await resolverRuta(getHash())
    let pagina = (Rutas[ruta]) ? Rutas[ruta] : Error404

    main.innerHTML = await pagina()

}

export {App}