import { Header } from "../components/Header";
import { CardStudent} from "../components/Cards"
import Titulos from "../components/Titulos";
import FooterNavBar from "../components/FooterNavBar"
import NombreUsuario from "../components/NombreUsuario"
import icon4 from "../asset/icon_estudiantes.png"
import iconUser from "../asset/userimage.png" 
import { useParams } from "react-router-dom";
import users from "../json/users.json"


const Parents = () => {
    const { userId } = useParams();
    const parent= users.users.find(user=>user.id===parseInt(userId))
    if (!parent) {
        return <div className="flex place-content-center"> <h2 className="text-white">Perfil no encontrado</h2></div>;
    }



  return (
    <>
    <Header/>
        <section className="flex flex-col place-content-center  items-center">
        <NombreUsuario img={iconUser} alt="Foto de Usuario" saludo="Hola " nombre={parent.name} apellido={parent.lastname} role={parent.role} />
        <Titulos 
                title="Home" /> 

        <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center overflow-y-auto h-80 scrollbar-hide scroll-smooth backdrop-blur-sm bg-white/30 rounded-xl p-8">
                
                {parent.students.map((student) => (
                    <CardStudent key={student.id}
                        studentId={student.id}
                        img={icon4}
                        title={student.name}
                        alt="imagen estudiante"
                    />
                ))} 
            
            
{/*             
            <Cards
                img={icon4}
                title="Nombre Estudiante" 
                href="#"
                alt="icono  estudiantes"
            
            />
            <Cards
                img={icon4}
                title="Nombre Estudiante" 
                href="#"
                alt="icono  estudiantes"
            
            />
            <Cards
                img={icon4}
                title="Nombre Estudiante" 
                href="#"
                alt="icono  estudiantes"
            
            />
            <Cards
                img={icon4}
                title="Nombre Estudiante" 
                href="#"
                alt="icono estudiantes"
            
            /> */}

        </div>
      </section>

      <FooterNavBar userId={parent.id} role={parent.role} />
    </>
  );
};

export default Parents;
