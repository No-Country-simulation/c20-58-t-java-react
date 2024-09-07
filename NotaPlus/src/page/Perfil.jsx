import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos"
import Subtitulos from "../components/Subtitulos"
import FooterNavBar from "../components/FooterNavBar"
import { Link } from "react-router-dom";

const Perfil = () => {
  return (

    <>
    <Header/>
    <section className="flex flex-col place-content-center items-center">

          <NombreUsuario
              nombre= "Nombre.Usuario"
          />
          <div  className="flex max-w-3xl w-full flex-wrap p-4 items-center overflow-y-auto h-80 scrollbar-hide scroll-smooth gap-8">

                <div className="w-full text-right justify-self-end">
                    <Link to="/editprofile" className="text-white underline "> <span >Editar Perfil</span></Link>
                </div>
              
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
        

                        <div className="overflow-x-auto">
                              <table className="min-w-full table-auto border border-gray-300 bg-white">
                                <thead className="bg-gray-200">
                                  <tr>
                                    <th className="px-4 py-2 text-left text-gray-700 font-semibold">PARENTESCO</th>
                                    <th className="px-4 py-2 text-left text-gray-700 font-semibold">NOMBRE</th>
                                    <th className="px-4 py-2 text-left text-gray-700 font-semibold">EMAIL</th>
                                    <th className="px-4 py-2 text-left text-gray-700 font-semibold">CONTACTO</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="bg-gray-50 border-b hover:bg-gray-100">
                                    <td className="px-4 py-2">Padre</td>
                                    <td className="px-4 py-2">Juan Pérez</td>
                                    <td className="px-4 py-2">juan.perez@email.com</td>
                                    <td className="px-4 py-2">+54 11 1234-5678</td>
                                  </tr>
                                  <tr className="bg-white border-b hover:bg-gray-100">
                                    <td className="px-4 py-2">Madre</td>
                                    <td className="px-4 py-2">María García</td>
                                    <td className="px-4 py-2">maria.garcia@email.com</td>
                                    <td className="px-4 py-2">+54 11 9876-5432</td>
                                  </tr>
                                  <tr className="bg-gray-50 hover:bg-gray-100">
                                    <td className="px-4 py-2">Tutor</td>
                                    <td className="px-4 py-2">Pedro López</td>
                                    <td className="px-4 py-2">pedro.lopez@email.com</td>
                                    <td className="px-4 py-2">+54 11 5555-6666</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                                              
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