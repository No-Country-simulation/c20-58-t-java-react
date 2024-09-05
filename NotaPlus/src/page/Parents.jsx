import { Header } from "../components/Header";
import { Cards } from "../components/Cards"
import FooterNavBar from "../components/FooterNavBar"
import NombreUsuario from "../components/NombreUsuario"
import icon4 from "../asset/icon_estudiantes.png"


const Parents = () => {
  return (
    <>
    <Header/>
    <section className="flex flex-col place-content-center  items-center">
        <NombreUsuario
            saludo="Hola "
            nombre="Nombre.padres"/>
        <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center  overflow-y-auto h-80 scroll-smooth backdrop-blur-sm bg-white/30 rounded-xl p-8">
            <Cards
                img={icon4}
                title="Nombre Estudiante" 
                href="#"
                alt="icono  estudiantes"
            
            />
            <Cards
                img={icon4}
                title="Nombre Estudiante" 
                href="#"
                alt="icono  estudiantes"
            
            />
            <Cards
                img={icon4}
                title="Nombre Estudiante" 
                href="#"
                alt="icono  estudiantes"
            
            />
            <Cards
                img={icon4}
                title="Nombre Estudiante" 
                href="#"
                alt="icono estudiantes"
            
            />

        </div>
        
    </section>

    <FooterNavBar/>  

</>
  )
}

export default Parents