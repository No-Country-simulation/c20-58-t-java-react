import Footer from "../components/Footer";
import { Header } from "../components/Header";
import subjectImage from "../asset/subjectImage.png";
import iconUser from "../asset/userimage.png"
import NombreUsuario from "../components/NombreUsuario";
import { useSelector } from "react-redux";
import users from "../json/users.json"
import { useParams } from 'react-router-dom';

function Activities() {
  const {userId} = useParams();
  const teacher= users.users.find(user=>user.id===parseInt(userId))
  if (!teacher) {
      return <div className="flex place-content-center"> <h2 className="text-white">Perfil no encontrado</h2></div>;
  }


  const stateTable = useSelector((state) => state.table);
  return (
    <>
      <Header />
      <NombreUsuario img={iconUser} alt="Foto de Usuario"  nombre={teacher.name} apellido={teacher.lastname} role={teacher.role} />
      {/* <NombreUsuarioSubject
        img={subjectImage}
        alt="SubjectUser"
        name="Materia 1"
        text="Grupo 1"
      /> <hr className="pt-2 w-[70%]" />*/}
      
      <section className="flex justify-between mt-[1rem]">
        <p>ICON 3</p>
        <div className="flex">
          <h2 className="uppercase text-[#64B2FA] text-[1.2rem] pr-[1rem] font-bold relative bottom-[.2rem]">
            Estudiantes
          </h2>
          <p className="pr-2">ICON1</p>
          <p className="pr-[.3rem]">ICON2</p>
        </div>
      </section>

      {stateTable.map(({ id, nombre, nota1, nota2, nota3, nota4, estado }) => {
        return (
          <div className="grid grid-flow-col-dense m-[4px]" key={id}>
            <table className="text-center  text-white">
              <thead className="bg-white">
                <tr>
                  <th className="text-[.9rem] text-white bg-[#85C226] border-2 border-[#85C226]">
                    Estudiante
                  </th>
                  <th className="text-[.7rem] text-[#E11282] border-2 border-[#85C226]">
                    Nota 1
                  </th>
                  <th className="text-[.7rem] text-[#E11282] border-2 border-[#85C226]">
                    Nota 2
                  </th>
                  <th className="text-[.7rem] text-[#E11282] border-2 border-[#85C226]">
                    Nota 3
                  </th>
                  <th className="text-[.7rem] text-[#E11282] border-2 border-[#85C226]">
                    Nota 4
                  </th>
                  <th className="text-[.9rem] p-[1rem] text-[#E11282] border-2 border-[#85C226]">
                    %
                  </th>
                  <th className="text-[#E11282] border-2 border-[#85C226]">
                    ICON
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-black">
                <tr className="border-b border-gray-300">
                  <td className="grid">
                    <span className="text-[.7rem]">{nombre}</span>
                    <span className="mt-2 bg-red-200 text-red-800 rounded text-[.7rem]">
                      {estado}
                    </span>
                  </td>
                  <td className="border-2 border-blue-500">
                    <input
                      type="number"
                      name=""
                      id=""
                      className="w-[2rem] appearance-none h-[2.5rem]"
                      value={nota1}
                    />
                  </td>
                  <td className="border-2 border-blue-500">
                    <input
                      type="number"
                      name=""
                      id=""
                      className="w-[2rem] appearance-none h-[2.5rem]"
                      value={nota2}
                    />
                  </td>
                  <td className="border-2 border-blue-500">
                    <input
                      type="number"
                      name=""
                      id=""
                      className="w-[2rem] appearance-none h-[2.5rem]"
                      value={nota3}
                    />
                  </td>
                  <td className="border-2 border-blue-500">
                    <input
                      type="number"
                      name=""
                      id=""
                      className="w-[2rem] appearance-none h-[2.5rem]"
                      value={nota4}
                    />
                  </td>
                  <td className="border-2 border-blue-500">
                    <input
                      type="number"
                      name=""
                      id=""
                      className="w-[2rem] appearance-none h-[2.5rem]"
                    />
                  </td>
                  <td className="border-2 border-blue-500">
                    <button className="">ICON</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <div className="flex justify-end mt-4">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
          Guardar
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
          Subir
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Activities;
