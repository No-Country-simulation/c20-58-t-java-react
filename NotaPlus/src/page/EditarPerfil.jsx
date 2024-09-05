import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos"
import Label from "../components/Label"
import FooterNavBar from "../components/FooterNavBar"

const EditarPerfil = () => {
  return (
    <>
    <Header/>
    <section className="flex flex-col place-content-center items-center">
          <NombreUsuario
              nombre= "Nombre.Usuario"
          />
          {/* {Acá se debe hacer una petición get por Id} 
              permitir modificar password, email y agregar foto(lo cual genera una petición put)
          */}

          <div className="flex max-w-3xl gap-[15px] flex-wrap p-4 items-center  overflow-y-auto h-80 scroll-smooth">
            
            <Titulos
              title="Editar Perfil"
             />
            <form>
                <Label
                    para="email"
                    title="E-mail: "
                />
                <input className="w-full p-2 mb-6" type="email" placeholder="Email..."></input>
                
                <Label
                    para="password"
                    title="Nueva Contraseña: "
                />
                <input className="w-full p-2  mb-6" type="password" placeholder="Escriba Nueva Contraseña..."></input>

                <Label
                    para="confirmPassword"
                    title="Confirmar Contraseña: "
                />
                <input className="w-full p-2  mb-6" type="password" placeholder="Confirmar Nueva Contraseña..."></input>


                <button type="submit" className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] my-8 text-white ease-in-out duration-300 hover:bg-mexicanPink_logo hover:scale-90  mb-6 mr-[4px]"><span>Guardar</span></button>
            </form>
          </div>
    </section>
    <FooterNavBar/>
    </>
  )
}

export default EditarPerfil