import iconVolver from "../asset/footerPrevio.svg"
import iconfooter1 from "../asset/footerinicio.svg";
import iconfooter3 from "../asset/footermensajes.svg";
import iconfooter4 from "../asset/footerperfil.svg";
import { IconFooter } from "./IconFooter";
import { useNavigate } from 'react-router-dom';

const FooterNavBar = () => {
  
  
    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1); // Regresa a la página previa
    };
  


  return (
    <footer className="max-w-3xl">
        <div className="bg-resolutionBlue_footer h-[54px]  rounded-t-[50px] absolute inset-x-0 bottom-0 w-full" >
          <ul className="flex items-center justify-center gap-8 pt-3">

          <IconFooter
              href="#"
              mustDo={handleBack}
              img={iconVolver}
              alt="icono Volver"
            />

            <IconFooter
              // cómo personalizo enlace home según usuario
              href="http://localhost:5173"
              img={iconfooter1}
              alt="icono home"
            />
            <IconFooter
              href="http://localhost:5173/messages"
              img={iconfooter3}
              alt="icono mensajes"
            />
            <IconFooter
              href="http://localhost:5173/profile"
              img={iconfooter4}
              alt="icono perfil"
            />
          </ul>
        </div>
    </footer>      
  );
};

export default FooterNavBar;
