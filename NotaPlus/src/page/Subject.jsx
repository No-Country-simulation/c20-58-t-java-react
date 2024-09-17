import { Header } from "../components/Header";
import { useSelector } from "react-redux";
import iconUser from "../asset/userimage.png" ;
import womanUser from "../asset/womanUser.png";
import NombreUsuario from "../components/NombreUsuario";
import Footer from "../components/Footer";
import NombreUsuarioSubject from "../components/NombreUsuarioSubject";
import { CardsSubject } from "../components/CardsSubject";
import subjectImage from "../asset/subjectImage.png";
import { Link } from "react-router-dom";
import users from "../json/users.json"
import { useParams } from 'react-router-dom';


function Subject() {
  
  const {userId} = useParams();
  const teacher= users.users.find(user=>user.id===parseInt(userId))
  if (!teacher) {
      return <div className="flex place-content-center"> <h2 className="text-white">Perfil no encontrado</h2></div>;
  }
  
  const stateSubject = useSelector((state) => state.subjects.subject);
  console.log(stateSubject);
  return (
    <>
      <Header />
       <NombreUsuario img={iconUser} alt="Foto de Usuario"  nombre={teacher.name} apellido={teacher.lastname} role={teacher.role} />
      
      {/* <NombreUsuarioSubject img={womanUser} name="Sophia Rose" text='Profesora'/>
      <hr className="pt-2 w-[70%]"/> */}

      <hr className="pt-2 w-[70%]" />
      <div className="flex justify-end mb-4">
        <p>ICON1</p>
      </div>
      <Link to={'/activities'} className="grid grid-cols-2 gap-2">
      {stateSubject.map(({ id, subject, group }) => {
        return (
          <section
          className=""
          key={id}
          >
            <div className="border-2  border-green-700 p-2 rounded-md min-h-[12rem]">
              <CardsSubject img={subjectImage} alt="ImageSubject" />
              <h2 className="text-lg uppercase text-green-500">{subject}</h2>
              <p className="text-white">{group}</p>
            </div>
          </section>
        );
      })}
      </Link>

      <Footer />
    </>
  );
}

export default Subject;
