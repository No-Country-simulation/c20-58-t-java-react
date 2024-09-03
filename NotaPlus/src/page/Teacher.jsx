import { Cards } from "../components/Cards"
import icon1 from "../asset/icon_evaluaciones.png"
import icon2 from "../asset/icon_materias.png"
import icon3 from "../asset/icon_actividades.png"
import icon4 from "../asset/icon_estudiantes.png"

const Teacher = () => {
  return (
    <>
        <section className="flex flex-col  place content-center h-screen items-center">
            <div className="max-w-3xl"><h2 className="text-left text-white  font-bold text-[20px] py-5 ">Nombre.profesor</h2></div>
            <div className="flex place-content-around max-w-3xl gap-[15px] flex-wrap">
                <Cards
                    img={icon1}
                    title="Evaluaciones" 
                    alt="icono evaluaciones"
                
                />
                <Cards
                    img={icon2}
                    title="Materias" 
                    alt="icono materias"
                
                />
                <Cards
                    img={icon3}
                    title="Actividades" 
                    alt="icono actividades"
                
                />
                <Cards
                    img={icon4}
                    title="Estudiantes" 
                    alt="icono estudiantes"
                
                />

            </div>
        </section>
            

    </>
    

  )
}

export default Teacher