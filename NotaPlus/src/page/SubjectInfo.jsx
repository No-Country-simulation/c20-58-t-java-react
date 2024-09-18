import { Header } from "../components/Header"
import iconUser from "../asset/userimage.png"
import NombreUsuario from "../components/NombreUsuario"
import Titulos from "../components/Titulos"
import FooterNavBar from "../components/FooterNavBar"
import users from "../json/users.json"
import { useParams } from 'react-router-dom';

const SubjectInfo = () => {
    const { userId,subjectId } = useParams();
    const teacher= users.users.find(user=>user.id===parseInt(userId))
    if (!teacher) {
        return <div className="flex place-content-center"> <h2 className="text-white">Perfil no encontrado</h2></div>;
    }
    const subject = teacher.subjects.find(sub => sub.id === parseInt(subjectId));
        if (!subject) {
          return <div className="flex place-content-center"> <h2 className="text-white">Materia no encontrada</h2></div>;
        }

  return (
    <>
    <Header/>
    <section className="flex flex-col place-content-center items-center">
        <NombreUsuario img={iconUser} alt="Foto de Usuario" saludo="Hola " nombre={teacher.name} apellido={teacher.lastname} role={teacher.role} />
        <Titulos
             text="Información de "
              title={subject.name}/>  
            <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center  overflow-y-auto h-80 scrollbar-hide scroll-smooth bg-white/30 rounded-xl p-8 max-sm:min-h-[50vh]">
                  <div className="overflow-x-auto scrollbar-hide"> 
                    <table className="my-3 min-w-full bg-white">
                      <thead className="bg-pennBlue text-white"> 
                        <tr className="">
                          <th className=" border border-gray-300 px-4 py-2">Sistema de Calificación</th>
                          <th className=" border border-gray-300 px-4 py-2">Puntos</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                          <tr className="border-b hover:bg-gray-300">
                            <td className=" border border-gray-300 px-4 py-2  bg-yellow-500">Puntos</td>
                            <td className=" border border-gray-300 px-4 py-2">1-10</td>
                          </tr>                
                      </tbody>
                    </table>
                    <table className="my-3 min-w-full bg-white">
                      <thead className="bg-pennBlue text-white"> 
                        <tr className="">
                          <th className=" border border-gray-300 px-4 py-2">Porcentaje para Aprobar</th>
                          <th className=" border border-gray-300 px-4 py-2">%</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                          <tr className="border-b hover:bg-gray-300">
                            <td className=" border border-gray-300 px-4 py-2  bg-yellow-500">Umbral Mínimo</td>
                            <td className=" border border-gray-300 px-4 py-2">% 60</td>
                          </tr>                
                      </tbody>
                    </table>
                    <table className="my-3 min-w-full bg-white">
                      <thead className="bg-pennBlue text-white"> 
                        <tr className="">
                          <th className=" border border-gray-300 px-4 py-2">Rango en Promedio</th>
                          <th className=" border border-gray-300 px-4 py-2">%</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                          <tr className="border-b hover:bg-gray-300">
                            <td className=" border border-gray-300 px-4 py-2  bg-green-400">Superior</td>
                            <td className=" border border-gray-300 px-4 py-2">95-100</td>
                          </tr>  
                          <tr className="border-b hover:bg-gray-300">
                            <td className=" border border-gray-300 px-4 py-2  bg-blue-400">Sobresaliente</td>
                            <td className=" border border-gray-300 px-4 py-2">90-94</td>
                          </tr>   
                          <tr className="border-b hover:bg-gray-300">
                            <td className=" border border-gray-300 px-4 py-2  bg-yellow-500">Aprobado</td>
                            <td className=" border border-gray-300 px-4 py-2">93-60</td>
                          </tr>   
                          <tr className="border-b hover:bg-gray-300">
                            <td className=" border border-gray-300 px-4 py-2  bg-red-500">Desaprobado</td>
                            <td className=" border border-gray-300 px-4 py-2">-60</td>
                          </tr>           
                      </tbody>
                    </table>

                  </div>
                  
                
            </div>
        
    </section>
    <FooterNavBar  userId={teacher.id} role={teacher.role}/>
    </>
  )
}

export default SubjectInfo