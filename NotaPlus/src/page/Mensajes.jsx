import {useForm} from 'react-hook-form'

import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos"
import Label from "../components/Label"
import FooterNavBar from "../components/FooterNavBar"

const Mensajes = () => {

    const {register, handleSubmit,
        formState: {errors, },
        watch,
        reset
    } =useForm();
  
    console.log(errors);
  
    const onSubmit= handleSubmit(
        (data)=>{
          console.log(data);
            alert("Gracias por su consulta. En brevedad responderemos")
            reset()
    }
    );



  return (
<>
    <Header/>  
    <section className="flex flex-col items-center">
        
        <NombreUsuario
            nombre= "Nombre.Usuario"
        />

        <div className=" overflow-y-auto h-80 scrollbar-hide scroll-smooth pb-[12px] max-w-3xl w-full">    
            
            <form className="flex flex-col items-center mb-10" onSubmit={onSubmit}>
            
            <Titulos
                title="ENVIAR MENSAJE O CONSULTA"
            />


                <Label
                    para="subject"
                    title="Asunto:"
                />
                <input className="w-full p-2 " type="text" placeholder="Escriba Asunto"
                    {...register("subject",{
                        required:{
                          value:true,
                          message: "Debe contener un Asunto"  

                        },
                    
                    })}
                />
                  {errors.subject && <span className='block mb-4 font-bold text-xs text-red-600'>{errors.subject.message}</span> }
                

                <Label
                    para="receiver"
                    title="Destinatario:"
                />
                <select name="receiver" id="receiver" className="w-full p-2"
                {...register("receiver",{
                    required:{
                      value:true,
                      message: "Debe seleccionar un Destinatario"  
                    },
                
                })}
                >
                    <option value="" hidden defaultValue>Seleccionar Destinatario</option>
                    <option value="profe1">Profesor 1</option>
                    <option value="profe2">Profesor 2</option>
                    <option value="profe3">Profesor 3</option>
                </select>
                {errors.receiver && <span className='block mb-4 font-bold text-xs text-red-600'>{errors.receiver.message}</span> }
                
                <Label
                    para="message"
                    title="Mensage:"
                />
                <textarea className="w-full p-2" name="message" id="nessage" cols="30" placeholder="Escriba mensaje"
                    {...register("message",{
                        required:{
                          value:true,
                          message: "Debe contener un mensaje"  
                        },
                        maxLength:{
                            value:100,
                            message: "Ha llegado al límite de carácteres"
                        },
                        minLength:{
                            value:3,
                            message: "Debe escribir un mensaje"
                        }
                    
                    })}
                ></textarea>
                    {errors.message && <span className='block mb-4 font-bold text-xs text-red-600'>{errors.message.message}</span> }
                
                <button type='submit' className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] my-8 text-white ease-in-out duration-300 hover:bg-mexicanPink_logo hover:scale-90 "><a href="#"><span>Enviar</span></a></button>
            {/* Este botón además debe realizar una petición post para crear el nuevo resgistro de mensaje */}
            
            </form>

            {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <div id="table-messages">
                
                <Titulos
                title="Listado de mensajes enviados y recibidos"
                />
                <div id="buscador" className="flex flex-wrap items-center place-content-around gap-4 overflow-y-auto p-4">
                        <Label
                            para="get-message"
                            title="Buscar Mensaje por: "
                        />
                        <select  className="w-[291px] h-[48px] p-2" name="get-message"  id="get-message" required>
                                <option value="" hidden defaultValue>Seleccionar Destinatario</option>
                                <option value="profe1">Profesor 1</option>
                                <option value="profe2">Profesor 2</option>
                                <option value="profe3">Profesor 3</option>    
                        </select>
                        
                        <button className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] my-8 text-white ease-in-out duration-300 hover:bg-mexicanPink_logo hover:scale-90 "><a href="#"><span>Buscar</span></a></button>
                </div>

                <table className="max-w-3xl w-full">
                    <thead id="tabla-header" className='h-[30px] bg-mexicanPink_logo'>
                        <tr>
                            <th className='text-[15px] border border-solid border-resolutionBlue_footer'>FECHA</th>
                            <th className='text-[15px] border border-solid border-resolutionBlue_footer'>ASUNTO</th>
                            <th className='text-[15px] border border-solid border-resolutionBlue_footer'>DESTINATARIO</th>
                            <th className='text-[15px] border border-solid border-resolutionBlue_footer'>VER</th>
                        </tr>
                    </thead>
                    <tbody id="tabla-body"> 
                        <tr className='bg-white '>
                            <td className='h-[25px] text-center text-[15px] border border-solid border-resolutionBlue_footer'>06/09/2024</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer text-wrap  px-2'>justificación inasistencia de Paola</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer'>Sergio Corrales</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer'><button>Ver</button></td>        
                        </tr>
                        <tr className='bg-white '>   
                            <td className='h-[25px] text-center text-[15px] border border-solid border-resolutionBlue_footer'>04/09/2024</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer text-wrap px-2' >Confirmo asistencia a Acto</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer'>Sergio Corrales</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer'><button>Ver</button></td>    
                        </tr>    
                        <tr className='bg-white '>
                            <td className='h-[25px] text-center text-[15px] border border-solid border-resolutionBlue_footer'>01/09/2024</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer text-wrap px-2'>Agradecimientos</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer'>Sergio Corrales</td><td className='h-[25px] text-center text-[15px]  border border-solid border-resolutionBlue_footer'><button>Ver</button></td>               
                        </tr>
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