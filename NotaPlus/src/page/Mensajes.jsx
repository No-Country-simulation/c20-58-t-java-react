import FooterNavBar from "../components/FooterNavBar"

const Mensajes = () => {
  return (
<>

    <section>
        <form className="flex flex-col ">
            <label  htmlFor="subject" className="p-2">Asunto</label>
            <input className="w-full p-2" type="text" placeholder="Escriba Asunto"></input>
            <label htmlFor="receiver" className="p-2">Destinatario</label>
            <select name="receiver" id="receiver" className="p-2">
                <option value="" hidden selected>Seleccionar Destinatario</option>
                <option value="profe1">Profesor 1</option>
                <option value="profe2">Profesor 2</option>
                <option value="profe3">Profesor 3</option>

            </select>
            <label htmlFor="message" className="p-2">Mensaje</label>
            <textarea className="w-full p-2" name="message" id="nessage" cols="30" placeholder="Escriba mensaje"></textarea>
            <label htmlFor="file" className="p-2">Adjuntar foto o archivo</label>
            <input className="w-full  p-2" type="file" />
        </form>
        <table>
            Historial de Mensajes
        </table>
    </section>
    <section id="table-messages">
            
            <h3>Listado de mensajes enviados y recibidos</h3>
            <div id="buscador">
                    <label htmlFor="get-message">Buscar Mensaje:</label>
                    <select name="get-message"  id="get-message" required>
                        <option value= ""  hidden selected>Seleccionar Destinatario</option>
                        <option value ="todos">Mostrar todos</option>
                        <option value="profe1">Profesor 1</option>
                        <option value="profe2">Profesor 2</option>
                        <option value="profe3">Profesor 3</option>
                    </select>
                    <button id="btnBuscar">Buscar</button>
            </div>
            <table class="tabla">
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
        </section>
        
    <FooterNavBar/>
</>
)
}

export default Mensajes