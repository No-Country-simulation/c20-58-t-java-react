import { Header } from "../components/Header";
import { Cards } from "../components/Cards";
import NombreUsuario from "../components/NombreUsuario";
import Titulos from "../components/Titulos";
import FooterNavBar from "../components/FooterNavBar";
import icon1 from "../asset/icon_evaluaciones.svg";
import icon2 from "../asset/icon_materias.svg";
import icon3 from "../asset/icon_actividades.svg";
import icon4 from "../asset/messageIcon.png";
import iconUser from "../asset/userimage.png" ;
import { useParams } from "react-router-dom";
import users from "../json/users.json"


const Teacher = () => {
  const { userId } = useParams();
  const teacher= users.users.find(user=>user.id===parseInt(userId))
  if (!teacher) {
      return <div className="flex place-content-center"> <h2 className="text-white">Perfil no encontrado</h2></div>;
  }

  return (
    <>
      <Header />
      <section className="flex flex-col place-content-center items-center">
        <NombreUsuario img={iconUser} alt="Foto de Usuario" saludo="Hola " nombre={teacher.name} apellido={teacher.lastname} role={teacher.role} />
          <Titulos
              title="Home"/>  
          <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center overflow-y-auto h-80 scrollbar-hide scroll-smooth  bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl bg-backdrop-blur-sm p-8">
            <Cards img={icon1} title="Evaluaciones" alt="icono evaluaciones"  userId={userId} sub="tests"/>
            <Cards img={icon2} title="Materias" alt="icono materias"  userId={userId} sub="subjects" />
            <Cards img={icon3} title="Actividades" alt="icono actividades"  userId={userId} sub="activities"/>
            <Cards img={icon4} title="Mensajes" alt="icono mensage"  userId={userId} sub="messages"/>
          </div>
      </section>

      <FooterNavBar  userId={teacher.id} role={teacher.role}/>
    </>
  );
};

export default Teacher;
