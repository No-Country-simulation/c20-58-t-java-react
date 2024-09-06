import {useForm} from 'react-hook-form'


import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos"
import Label from "../components/Label"
import FooterNavBar from "../components/FooterNavBar"

const EditarPerfil = () => {
  const {register, handleSubmit,
      formState: {errors, },
      watch
  } =useForm();

  console.log(errors);

  const onSubmit= handleSubmit(
      (data)=>{
        console.log(data);
      }
  );

  
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

          <div className="flex max-w-3xl gap-[15px] flex-wrap p-4 items-center  overflow-y-auto h-80 scrollbar-hide scroll-smooth">
            
            <Titulos
              title="Editar Perfil"
             />
            <form onSubmit={onSubmit}>
                <Label
                    para="email"
                    title="E-mail:"
                />
                <input 
                  className="w-full p-2 mb-1"  
                  type="email" 
                  placeholder="Email..."
                  {...register("email",{
                      pattern:{
                        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,

                        message: "E-mail no válido"  

                      }
                  })} 
                  />
                  {errors.email && <span className='block mb-4 text-xs text-red-600'>{errors.email.message}</span> }
                
                <Label
                    para="password"
                    title="Nueva Contraseña: "
                />
                <input 
                    className="w-full p-2 mt-1 mb-1" 
                    type="password" 
                    placeholder="Escriba Nueva Contraseña..."
                    {...register("password",{
                      
                      
                          pattern:{
                            value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                            message:"La contraseña debe tener un mínimo de 8 caracteres, una letra minúscula, una mayúscula y un número"
                          
                        }
                      
                    })} 
                    />
                      {errors.password && <span className='block mb-4 text-xs text-red-600'>{errors.password.message}</span> }

                <Label
                    para="confirmPassword"
                    title="Confirmar Contraseña: "
                />
                <input 
                    className="w-full p-2 mt-1mb-1" 
                    type="password" 
                    placeholder="Confirmar Nueva Contraseña..."
                    {...register("confirmPassword",{
                      validate: value=>value==watch("password") || "Las contraseñas no coinciden"
                    })} 
                    />
                    {errors.confirmPassword && <span className='block mb-4 text-xs text-red-600'>{errors.confirmPassword.message}</span> }
                

                <button type="submit" className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] my-8 text-white ease-in-out duration-300 hover:bg-mexicanPink_logo hover:scale-90  mb-6 mr-[4px]"><span>Guardar</span></button>
            
                  <pre>
                    {JSON.stringify(watch(),null,2)}
                  </pre>
            </form>
          </div>
    </section>
    <FooterNavBar/>
    </>
  )
}

export default EditarPerfil