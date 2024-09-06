import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos"
import Label from "../components/Label"
import FooterNavBar from "../components/FooterNavBar"

const Mensajes = () => {
  return (
<>
    <Header/>  
    <section className="flex flex-col items-center">
        
        <NombreUsuario
            nombre= "Nombre.Usuario"
        />

        <div className=" overflow-y-auto h-80 scroll-smooth scrollbar-hide pb-[100px]">    
            <form className="flex flex-col items-center">
            
            <Titulos
                title="ENVIAR MENSAJE O CONSULTA"
            />


                <Label
                    para="subject"
                    title="Asunto"
                />
                <input className="w-full p-2" type="text" placeholder="Escriba Asunto"></input>

                <Label
                    para="receiver"
                    title="Destinatario"
                />
                <select name="receiver" id="receiver" className="w-full p-2">
                    <option value="" hidden defaultValue>Seleccionar Destinatario</option>
                    <option value="profe1">Profesor 1</option>
                    <option value="profe2">Profesor 2</option>
                    <option value="profe3">Profesor 3</option>
                </select>

                <Label
                    para="message"
                    title="Mensage"
                />
                <textarea className="w-full p-2" name="message" id="nessage" cols="30" placeholder="Escriba mensaje"></textarea>
            
                <button className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] my-8 text-white ease-in-out duration-300 hover:bg-mexicanPink_logo hover:scale-90 "><a href="#"><span>Enviar</span></a></button>
            </form>

            <div id="table-messages">
                
                <Titulos
                title="Listado de mensajes enviados y recibidos"
                />
                <div id="buscador" className="flex flex-wrap items-center place-content-around gap-4 overflow-y-auto p-4">
                        <Label
                            para="get-message"
                            title="Buscar Mensaje: "
                        />
                        <select  className="w-full p-2" name="get-message"  id="get-message" required>
                            <option value= ""  hidden defaultValue>Seleccionar Destinatario</option>
                            <option value ="todos">Mostrar todos</option>
                            <option value="profe1">Profesor 1</option>
                            <option value="profe2">Profesor 2</option> 
                            <option value="profe3">Profesor 3</option>
                        </select>
                        <button className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] my-8 text-white ease-in-out duration-300 hover:bg-mexicanPink_logo hover:scale-90 "><a href="#"><span>Buscar</span></a></button>
                </div>
                <table className="tabla">
                    <thead id="tabla-header">
                        <tr>
                            <th>FECHA</th>
                            <th>ASUNTO</th>
                            <th>DESTINATARIO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody id="tabla-body">                    
                    </tbody>
                </table>
            </div>
        </div>    
    </section>

    

    <FooterNavBar/>
</>
)
}

export default Mensajes