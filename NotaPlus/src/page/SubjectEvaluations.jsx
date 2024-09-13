import { Header } from "../components/Header"
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos"
import iconUser from "../asset/userimage.png"
import FooterNavBar from "../components/FooterNavBar"
import users from "../json/users.json"
import { useParams } from 'react-router-dom';


const SubjectEvaluations = () => {
    const {studentId,subjectId} = useParams();
    
    //Busco datos del estudiante
    const student = users.users.find(user => user.id === parseInt(studentId));
        if (!student) {
          return <div className="flex place-content-center"> <h2 className="text-white">Estudiante no encontrado</h2></div>;
        } 

    // Busco y filtro la materia por su ID
    const subject = student.subjects.find(sub => sub.id === parseInt(subjectId));
        if (!subject) {
          return <div className="flex place-content-center"> <h2 className="text-white">Materia no encontrada</h2></div>;
        }

  // Calcular el promedio de notas
  const totalNotas = subject.tests.reduce((acc, test) => acc + test.nota, 0);
  const promedio = subject.tests.length > 0 ? (totalNotas / subject.tests.length).toFixed(2) : 0;

    
  
    return (

    <>

<Header/>
        <section className="flex flex-col place-content-center  items-center">
            <NombreUsuario img={iconUser} alt="Foto de Usuario"  nombre={student.name} apellido={student.lastname} role={student.role}  />
            <Titulos 
                text="Evaluaciones de "
                title={subject.name}/>  

            <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center  overflow-y-auto h-80 scrollbar-hide scroll-smooth backdrop-blur-sm bg-white/30 rounded-xl p-8">
                  <div className="overflow-x-auto scrollbar-hide"> 
                    <table className="min-w-full bg-white">
                      <thead className="bg-pennBlue text-white">
                        <tr className="">
                          <th className=" border border-gray-300 px-4 py-2">Fecha</th>
                          <th className=" border border-gray-300 px-4 py-2">Tipo</th>
                          <th className=" border border-gray-300 px-4 py-2">Nota</th>
                          <th className=" border border-gray-300 px-4 py-2">Feedback</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subject.tests.map(test => (
                          <tr key={test.id} className="border-b hover:bg-gray-300">
                            <td className=" border border-gray-300 px-4 py-2  bg-argentinianBlue_logo">{test.fecha}</td>
                            <td className=" border border-gray-300 px-4 py-2">{test.tipo}</td>
                            <td className=" border border-gray-300 px-4 py-2">{test.nota}</td>
                            <td className=" border border-gray-300 px-4 py-2">{test.feedback}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4">
                      <h3>Promedio final: {promedio}</h3>
                  </div>
                
            </div>
            
        </section>

        <FooterNavBar/>  

    </>
  )
}

export default SubjectEvaluations