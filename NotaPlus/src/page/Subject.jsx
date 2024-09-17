import { Header } from "../components/Header";
import { CardsSubject } from "../components/CardsSubject";
import subjectImage  from "../asset/subjectImage.png"
import iconUser from "../asset/userimage.png" ;
import womanUser from "../asset/womanUser.png"
import NombreUsuario from "../components/NombreUsuario";
import Footer from "../components/Footer";
import users from "../json/users.json"
import { useParams } from 'react-router-dom';

function Subject() {

  const {userId} = useParams();
  const teacher= users.users.find(user=>user.id===parseInt(userId))
  if (!teacher) {
      return <div className="flex place-content-center"> <h2 className="text-white">Perfil no encontrado</h2></div>;
  }

  return (
    <>
      <Header />
      <NombreUsuario img={iconUser} alt="Foto de Usuario"  nombre={teacher.name} apellido={teacher.lastname} role={teacher.role} />
      
      {/* <NombreUsuarioSubject img={womanUser} name="Sophia Rose" text='Profesora'/>
      <hr className="pt-2 w-[70%]"/> */}

      <div className="flex justify-end mb-4">
        <p>ICON1</p>
      </div>
      <section className="grid grid-cols-2 place-items-center gap-2 ">
        <div className="border-2 bg-white  border-green-700 p-2 rounded-lg min-h-[12rem]">
          <CardsSubject img={subjectImage} alt='ImageSubject' />
          <h2 className="text-lg uppercase text-azulClaroBase font-bold">Materia 1</h2>
          <p className="text-grey_user">Grupo 1</p>
        </div>
        <div className="border-2 bg-white  border-green-700 p-2 rounded-lg min-h-[12rem]">
          <CardsSubject img={subjectImage} alt='ImageSubject'/>
          <h2 className="text-lg uppercase text-azulClaroBase font-bold">Materia 2</h2>
          <p className="text-grey_user">Grupo 2</p>
        </div>
        <div className="border-2 bg-white  border-green-700 p-2 rounded-lg min-h-[12rem]">
          <CardsSubject img={subjectImage} alt='ImageSubject'/>
          <h2 className="text-lg uppercase text-azulClaroBase font-bold">Materia 3</h2>
          <p className="text-grey_user">Grupo 3</p>
        </div>
        <div className="border-2 bg-white  border-green-700 p-2 rounded-lg min-h-[12rem]">
          <CardsSubject img={subjectImage} alt='ImageSubject'/>
          <h2 className="text-lg uppercase text-azulClaroBase font-bold">Materia 4</h2>
          <p className="text-grey_user">Grupo 4</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Subject;
