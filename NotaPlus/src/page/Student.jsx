import { Header } from "../components/Header";
import {  CardSubject } from "../components/Cards"
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos";
import FooterNavBar from "../components/FooterNavBar"
import subjects from "../json/subjects.json"
import iconUser from "../asset/userimage.png"
import imgSubj1 from "../asset/subj1.svg"
import { useParams } from "react-router-dom";
import users from "../json/users.json"


const Student = () => {
    const { studentId } = useParams();
    const student= users.find(user=>user.userId===parseInt(studentId))
    if (!student) {
        return <div className="flex place-content-center"> <h2 className="text-white">Estudiante no encontrado</h2></div>;
    }




  return (
    <>
        <Header/>
        <section className="flex flex-col place-content-center  items-center">
            <NombreUsuario img={iconUser} alt="Foto de Usuario" saludo="Hola " nombre={student.name} apellido={student.lastname} role={student.role} />
            <Titulos 
                title="Home" />  


            <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center  overflow-y-auto h-80 scrollbar-hide scroll-smooth backdrop-blur-sm bg-white/30 rounded-xl p-8">
                {student.subjects.map((subject) => (
                  <CardSubject key={subject.id}
                    id={subject.id}
                    studentId={studentId}
                    img={imgSubj1}
                    title={subject.name}
                    alt="imagen materia"
                  />
                ))}
            </div>
            
        </section>

        <FooterNavBar/>  

    </>
  )
}

export default Student

