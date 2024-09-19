import logo from "../asset/notaPlusLogo.svg";
import Button1 from "../components/Button1";
import Label from "../components/Label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import iconVolver from "../asset/footerPrevio.svg"
import { IconFooterVolver } from "../components/IconfooterVolver"

const RegainAccess = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        
      } = useForm();
    
      console.log(errors);
    
      const onSubmit = handleSubmit((data) => {
        alert( "Mensaje enviado. Ingrese a su casilla de correo y siga los pasos para recuperar su contraseña.")
        reset(),
        console.log(data);
      });

      const navigate = useNavigate();
        const handleBack = () => {
        navigate(-1); // Regresa a la página previa
    };


  return (
    <>
        <section className="flex flex-col mt-30 items-center justify-center h-[90vh]">
        
        <img src={logo} alt="logoNotaPlus"
          className="flex self-center w-[50%] md:w-[30%] sm:bottom-[3rem] md:bottom-[0rem]"
        />
            
            <h2 className="text-white text-center text-[20px] mt-10">Para recuperar su contraseña, envíe su dirección de correo electrónico y le enviaremos un email con instrucciones para poder acceder de nuevo.</h2>
        
            <div className="overflow-y-auto h-96 scrollbar-hide scroll-smooth  max-w-3xl w-full mt-4">
                <form className="flex flex-col  items-center justify-center" onSubmit={onSubmit}>
                    <Label para="email" title="E-mail:" />
                    <input 
                        className="w-full p-2 mb-1 rounded-md"
                        type="email"
                        placeholder="Email..."
                        {...register("email", {
                            required:{
                                value:true,
                                message: "Debe escribir un mail"
                            },
                            pattern: {
                            value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,

                            message: "E-mail no válido",
                            },
                        })}
                    />

                    {errors.email && (
                    <span className="block mb-4 text-s font-bold text-mexicanPink_logo">
                        {errors.email.message}
                    </span>
                    )}
                    <Button1 typeBtn="submit" text="Enviar"/>    
                </form>
                
            </div>        
        </section>    
        <ul>
        <IconFooterVolver
                  href="#"
                  mustDo={handleBack}
                  img={iconVolver}
                  alt="icono Volver"
                 
                />
    </ul>        
    </>
)
}

export default RegainAccess