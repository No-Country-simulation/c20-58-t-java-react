import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos"
import Subtitulos from "../components/Subtitulos"
import FooterNavBar from "../components/FooterNavBar"

const Perfil = () => {
  return (

    <>
    <Header/>
    <section className="flex flex-col place-content-center items-center">

          <NombreUsuario
              nombre= "Nombre.Usuario"
          />
          <div  className="flex max-w-3xl w-full flex-wrap p-4 items-center overflow-y-auto h-80 scrollbar-hide scroll-smooth gap-8">
              <div className="max-w-3xl w-full text-right"><a href="http://localhost:5173/editprofile"><span>Editar Perfil</span></a></div>
              <Titulos
                  title="Perfil de Usuario"
              />    
              
              {/* {Acá se debe hacer una petición get por Id} 
                  permitir modificar password, email y agregar foto(lo cual genera una petición put)
              */}

                <div className="max-w-3xl w-full ml-4 backdrop-blur-sm bg-white/30 rounded-xl p-8">
                      <Subtitulos
                      title="Detalles Personales"/>
                        <hr className="pt-4"></hr>  
                        <p>Domicilio:</p>
                        <p>DNI:</p>
                        <p>E-mail:</p>
                      
                </div>
              
                <div className="max-w-3xl w-full ml-4 backdrop-blur-sm bg-white/30 rounded-xl p-8">
                      <Subtitulos
                        title="Información Padres/Tutores"/>
                        <hr className="pt-4"></hr> 
                        <table className="tabla">
                    <thead id="tabla-header">
                        <tr>
                            <th>PARENTESCO</th>
                            <th>NOMBRE</th>
                            <th>EMAIL</th>
                            <th>CONTACTO</th>
                            
                        </tr>
                    </thead>
                    <tbody id="tabla-body">                    
                    </tbody>
                </table>
                                              
                </div>

                <div className="max-w-3xl w-full ml-4 backdrop-blur-sm bg-white/30 rounded-xl p-8">
                    <Subtitulos
                      title="Detalles de Materias"/>            
                      <hr className="pt-4"></hr> 
                      <ul>
                          <li>materia</li>
                          <li>materia</li>
                          <li>materia</li>
                      </ul>
                </div>

            
        </div>
    </section>
    <FooterNavBar/>
    </>
  )
}

export default Perfil