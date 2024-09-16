import iconVolver from "../asset/footerPrevio.svg"
import iconfooter1 from "../asset/footerinicio.svg";
import iconfooter3 from "../asset/footermensajes.svg";
import iconfooter4 from "../asset/footerperfil.svg";
import { IconFooter } from "./IconFooter";
import { useNavigate } from 'react-router-dom';

const FooterNavBar = ({userId, role}) => {
  
  
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1); // Regresa a la página previa
    };

    const goToMyHome = () => {
        if(role==="Estudiante"){
          navigate(`/student/${userId}`) //Regresa a Home y sesión de estudiante logeado
        }else if(role==="Profesor/a"){
          navigate(`/teacher/${userId}`)//Regresa a Home y sesión de profesor logeado
        }else if(role==="Padre/Madre"){
          navigate(`/parent/${userId}`) //Regresa a Home y sesión de padres logeado
        }

    }

    const goToMessages = () => {
      navigate(`/messages/${userId}`)
    }

    const goToMyProfile = ()=>{
      navigate(`/profile/${userId}`) //Ingresa al Perfil del usuario logeado
    }
  


  return (
    <footer className="max-w-3xl">
        <div className="bg-resolutionBlue_footer h-[54px]  rounded-t-[50px] absolute inset-x-0 bottom-0 w-full" >
          <ul className="flex items-center justify-center gap-8 pt-3">

          <IconFooter
              mustDo={handleBack}
              img={iconVolver}
              alt="icono Volver"
            />

            <IconFooter
              // cómo personalizo enlace home según usuario
              mustDo={goToMyHome}
              img={iconfooter1}
              alt="icono home"
            />
            <IconFooter
              mustDo={goToMessages}
              img={iconfooter3}
              alt="icono mensajes"
            />
            <IconFooter
              mustDo={goToMyProfile}
              img={iconfooter4}
              alt="icono perfil"
            />
          </ul>
        </div>
    </footer>      
  );
};

export default FooterNavBar;
