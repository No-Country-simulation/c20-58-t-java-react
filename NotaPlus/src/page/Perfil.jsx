import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario";
import iconUser from "../asset/userimage.png"
import Titulos from "../components/Titulos";
import Subtitulos from "../components/Subtitulos";
import FooterNavBar from "../components/FooterNavBar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import users from "../json/users.json"

const Perfil = () => {

  const { userId } = useParams();
  
  const user = users.users.find(user => user.id === parseInt(userId));

  if (!user) {
    return <div>Perfil no encontrado</div>;
  }

  const navigate = useNavigate();

  const goToEditProfile = ()=>{
    navigate(`/profile/${userId}/editprofile`) //Ingresa a Editar Perfil del usuario logeado
  }



  return (
    <>
      <Header />
      <section className="flex flex-col place-content-center items-center">
        <NombreUsuario img={iconUser} alt="Foto de Usuario"  nombre={user.name} apellido={user.lastname} role={user.role} />
        
        <div className="flex max-w-3xl w-full flex-wrap p-4 items-center overflow-y-auto h-96 scrollbar-hide gap-8">
          <div className="w-full text-right justify-self-end">
            
              {" "}
              <span className="text-white underline cursor-pointer" onClick={goToEditProfile}>Editar Perfil</span>          
              {/* {Acá se debe hacer una petición get por Id} 
                  permitir modificar password, email y agregar foto(lo cual genera una petición put)
              */}

          </div>

          <Titulos title="Perfil de Usuario" />



          <div className="max-w-3xl w-full ml-4 backdrop-blur-sm bg-white/30 rounded-xl p-8">
            <Subtitulos title="Detalles Personales" />
            <hr className="pt-4"></hr>
            <p>Domicilio: {user.address}</p>
            <p>DNI: {user.id}</p>
            <p>E-mail:{user.email}</p>
            <p>Numero Contacto: {user.contact}</p>
          </div>

        </div>
      </section>
      <FooterNavBar userId={user.id} role={user.role}/>
    </>
  );
};

export default Perfil;
