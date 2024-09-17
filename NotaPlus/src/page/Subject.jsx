import { Header } from "../components/Header";
import { useSelector } from "react-redux";
import iconUser from "../asset/userimage.png" ;
import womanUser from "../asset/womanUser.png";
import NombreUsuario from "../components/NombreUsuario";
import FooterNavBar from "../components/FooterNavBar";
import NombreUsuarioSubject from "../components/NombreUsuarioSubject";
import { CardsSubjectInfo } from "../components/Cards";
import subjectImage from "../asset/subjectImage.png";
import { Link } from "react-router-dom";
import users from "../json/users.json"
import { useParams } from 'react-router-dom';
import Titulos from "../components/Titulos";



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
       <Titulos
            title="Materias Dictadas"/>  
      <section  className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center overflow-y-auto h-80 scrollbar-hide scroll-smooth backdrop-blur-sm bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl p-8">
          {stateSubject.map(({ id, subject, group }) => {
            return (
            
                <div key={id}className="border-2  border-green-700 p-2 rounded-lg min-h-[10rem] bg-white">
                    <CardsSubjectInfo img={subjectImage} alt="ImageSubject"  userId={teacher.id} subjectId={id}/>
                    <h2 className="text-lg uppercase text-azulClaroBase">{subject}</h2>
                    <p className="text-grey_user">{group}</p>
                </div>
              
            );
          })}
      </section>

      <FooterNavBar  userId={teacher.id} role={teacher.role}/>
    </>
  );
}

export default Subject;
