import { Header } from "../components/Header";
import { Cards } from "../components/Cards";
import NombreUsuario from "../components/NombreUsuario";
import Titulos from "../components/Titulos";
import FooterNavBar from "../components/FooterNavBar";
import icon1 from "../asset/icon_evaluaciones.png";
import icon2 from "../asset/icon_materias.png";
import icon3 from "../asset/icon_actividades.png";
import icon4 from "../asset/icon_estudiantes.png";
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
        <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center overflow-y-auto h-80 scrollbar-hide scroll-smooth backdrop-blur-sm bg-white/30 rounded-xl p-8">
          <Cards img={icon1} title="Evaluaciones" alt="icono evaluaciones" />
          <Cards img={icon2} title="Materias" alt="icono materias" />
          <Cards img={icon3} title="Actividades" alt="icono actividades" />
          <Cards img={icon4} title="Estudiantes" alt="icono estudiantes" />
        </div>
      </section>

      <FooterNavBar  userId={teacher.id} role={teacher.role}/>
    </>
  );
};

export default Teacher;
