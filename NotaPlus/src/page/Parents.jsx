import { Cards } from "../components/Cards"
import Footer from "../components/Footer"
import icon4 from "../asset/icon_estudiantes.png"


const Parents = () => {
  return (
    <>
    <section className="flex flex-col place-content-center  items-center">
        <div className="max-w-3xl w-full"><h2 className="text-left text-white  font-bold text-[20px] py-7  ">Hola Nombre.padres</h2></div>
        <div className="flex place-content-around max-w-3xl gap-[15px] flex-wrap overflow-y-auto p-4">
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

    <Footer/>  

</>
  )
}

export default Parents