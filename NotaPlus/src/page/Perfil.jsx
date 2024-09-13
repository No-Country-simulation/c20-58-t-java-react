import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario";
import Titulos from "../components/Titulos";
import Subtitulos from "../components/Subtitulos";
import FooterNavBar from "../components/FooterNavBar";
import { Link } from "react-router-dom";

const Perfil = (props) => {
  return (
    <>
      <Header />
      <section className="flex flex-col place-content-center items-center">
        <NombreUsuario nombre="Nombre.Usuario" />
        <div className="flex max-w-3xl w-full flex-wrap p-4 items-center overflow-y-auto h-96 scrollbar-hide gap-8">
          <div className="w-full text-right justify-self-end">
            <Link to="/editprofile" className="text-white underline ">
              {" "}
              <span>Editar Perfil</span>
            </Link>
          </div>

          <Titulos title="Perfil de Usuario" />

          {/* {Acá se debe hacer una petición get por Id} 
                  permitir modificar password, email y agregar foto(lo cual genera una petición put)
              */}

          <div className="max-w-3xl w-full ml-4 backdrop-blur-sm bg-white/30 rounded-xl p-8">
            <Subtitulos title="Detalles Personales" />
            <hr className="pt-4"></hr>
            <p>Domicilio: {props.domicilio}</p>
            <p>DNI: {props.dni}</p>
            <p>E-mail:{props.email}</p>
          </div>

        </div>
      </section>
      <FooterNavBar />
    </>
  );
};

export default Perfil;
