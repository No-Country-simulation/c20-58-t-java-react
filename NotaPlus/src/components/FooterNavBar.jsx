import iconfooter1 from "../asset/footerinicio.svg";
import iconfooter3 from "../asset/footermensajes.svg";
import iconfooter4 from "../asset/footerperfil.svg";
import { IconFooter } from "./IconFooter";

const FooterNavBar = () => {
  return (
    <div className="bg-resolutionBlue_footer h-[54px] w-11/12 rounded-t-[50px]  align-middle absolute bottom-0">
      <ul className="flex items-center justify-center gap-8 pt-3">
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
  );
};

export default FooterNavBar;
