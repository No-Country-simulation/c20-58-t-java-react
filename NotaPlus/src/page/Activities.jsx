import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario";
import Titulos from "../components/Titulos";
import iconUser from "../asset/userimage.png" ;
import { useParams } from "react-router-dom";
import users from "../json/users.json"
import FooterNavBar from "../components/FooterNavBar";
import Button1 from "../components/Button1";

function NewActivity() {
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
                title="Actividades"/>

          <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center overflow-y-auto h-80 scrollbar-hide scroll-smooth bg-white/30 rounded-xl">
            <form className="grid" >
              <thead className="grid-cols-1 border-b col-span-2 bg-pennBlue text-white border border-gray-300 px-4 ">
                <th className="grid align-start text-[1.3rem] font-secondary">
                  Crear
                </th>
              </thead>
              <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
                <td className="text-blue-800 font-secondary text-[1.2rem]">Título</td>
              </tr>
              <tr className="border-b border border-gray-300 ">
                <td className=" px-4 py-2 ">
                  <input
                    type="text"
                    className="bg-transparent outline-none text-white placeholder:text-[1rem]"
                    placeholder="Título de la actividad"
                  />
                </td>
              </tr>
              <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
                <td className="text-blue-800 font-secondary text-[1.2rem]">Descripción</td>
              </tr>
              <tr className="border-b border border-gray-300 ">
                <td className=" px-4 py-2 ">
                  <input
                    type="text"
                    className="bg-transparent text-white pb-8 placeholder:text-[1rem] outline-none"
                    placeholder="Describa la actividad"
                  />
                </td>
              </tr>
              <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
                <td className="text-blue-800 font-secondary text-[1.2rem]">Fecha de Entrega</td>
              </tr>
              <tr className="border-b border border-gray-300 ">
                <td className="">
                  <input
                    type="date"
                    className="bg-transparent text-white placeholder:text-[.8rem] outline-none relative top-[.3rem] left-[.9rem] text-[1.4rem]"
                  />
                </td>
              </tr>
              <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
                <td className="text-blue-800 font-secondary text-[1.2rem]">Materia</td>
              </tr>
              <tr className="border-b border border-gray-300 ">
                  <select name="" id="" className="bg-gray-400 w-full py-3 outline:none text-md">
                    <option value="" hidden defaultValue>
                      Seleccionar Materia
                    </option>
                    <option value="mat1">Inglés I</option>
                    <option value="mat2">Inglés II</option>
                    <option value="mat3">Lengua I</option>
                    <option value="mat4">Lengua II</option>
                  </select>
                
              </tr>
              <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
                <td className="text-blue-800 font-secondary text-[1.2rem]">Tipo de Actividad</td>
              </tr>
              <tr className="border-b border border-gray-300 ">
              <select name="" id="" className="bg-gray-400 w-full py-3 outline:none text-md">
                    <option value="" hidden defaultValue>
                      Seleccionar Actividad
                    </option>
                    <option value="profe1">Parcial</option>
                    <option value="profe2">Final</option>
                    <option value="profe3">Ensayo</option>
                    <option value="profe3">Éxamen oral</option>
                    <option value="profe3">Actividad Práctica</option>
                    <option value="profe3">Salida Programada</option>
                    <option value="profe3">Otro</option>

                  </select>
              </tr>
              <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
                <td className="text-blue-900 font-secondary text-[1.2rem]">Grupos a Aplicar</td>
              </tr>
              <tr className="border-b border border-gray-300 ">
              <select name="" id="" className="bg-gray-400 w-full py-3 outline:none text-md">
                    <option value="" hidden defaultValue>
                      Escoge al Grupo
                    </option>
                    <option value="grupo1">Grupo 1</option>
                    <option value="grupo2">Grupo 2</option>
                    
                  </select>
              </tr>
            </form>
            <div className="flex justify-end mt-4 w-full">
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                  Guardar
                </button>
              </div>
          </div>
      </section>
      <FooterNavBar  userId={teacher.id} role={teacher.role}/>
    </>
  );
}
export default NewActivity;
