import FooterNavBar from "../components/FooterNavBar";
import { Header } from "../components/Header";
import Titulos from "../components/Titulos";
import iconMail from "../asset/icon_mail.svg";
import iconUser from "../asset/userimage.png";
import NombreUsuario from "../components/NombreUsuario";
import { useSelector } from "react-redux";
import users from "../json/users.json";
import { useParams } from "react-router-dom";

function Tests() {
  const { userId } = useParams();
  const teacher = users.users.find((user) => user.id === parseInt(userId));
  if (!teacher) {
    return (
      <div className="flex place-content-center">
        {" "}
        <h2 className="text-white">Perfil no encontrado</h2>
      </div>
    );
  }

  const stateTable = useSelector((state) => state.students.students);
  console.log(stateTable);

  return (
    <>
      <Header />
      <section className="flex flex-col place-content-center items-center">
        <NombreUsuario
          img={iconUser}
          alt="Foto de Usuario"
          nombre={teacher.name}
          apellido={teacher.lastname}
          role={teacher.role}
        />
        <Titulos title="Tabla de Evaluaciones" />

        {/* <NombreUsuarioSubject
          img={subjectImage}
          alt="SubjectUser"

          name="Materia 1"
          text="Grupo 1"
        /> <hr className="pt-2 w-[70%]" />*/}

        {/* <section className="flex justify-between mt-[1rem]">
          <p>ICON 3</p>
          <div className="flex">
            <h2 className="uppercase text-[#64B2FA] text-[1.2rem] pr-[1rem] font-bold relative bottom-[.2rem]">
              Estudiantes
            </h2>
            <p className="pr-2">ICON1</p>
            <p className="pr-[.3rem]">ICON2</p>
          </div>
        </section> */}
        <div className="flex justify-center max-w-3xl gap-[15px] flex-wrap p-4 items-center overflow-y-auto h-80 scrollbar-hide scroll-smooth bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl bg-backdrop-blur-sm p-8 max-sm:min-h-[50vh]">
          <div className="grid grid-flow-col-dense m-[4px] w-full">
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
                  <th className="text-[#E11282] border-2 border-[#85C226] w-[24px]">
                    <div>
                      <img className="h-[24px]" src={iconMail} alt="feedback" />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white text-black">
                {stateTable.map(
                  ({
                    id,
                    name,
                    noteOne,
                    noteTwo,
                    noteThree,
                    noteFour,
                    stateStudent,
                  }) => {
                    return (
                      <tr className="border-b border-gray-300" key={id}>
                        <td className="grid">
                          <span className="text-[.7rem]">{name}</span>
                          <span
                            className={
                              stateStudent == "Aprobado"
                                ? "my-2 bg-green-200 text-green-800 rounded text-[.7rem]"
                                : "my-2 bg-red-200 text-red-800 rounded text-[.7rem]"
                            }
                          >
                            {stateStudent}
                          </span>
                        </td>
                        <td className="border-2 border-blue-500">
                          <input
                            type="number"
                            name=""
                            id=""
                            className="w-[2rem] appearance-none h-[2.5rem]"
                            value={noteOne}
                          />
                        </td>
                        <td className="border-2 border-blue-500">
                          <input
                            type="number"
                            name=""
                            id=""
                            className="w-[2rem] appearance-none h-[2.5rem]"
                            value={noteTwo}
                          />
                        </td>
                        <td className="border-2 border-blue-500">
                          <input
                            type="number"
                            name=""
                            id=""
                            className="w-[2rem] appearance-none h-[2.5rem]"
                            value={noteThree}
                          />
                        </td>
                        <td className="border-2 border-blue-500">
                          <input
                            type="number"
                            name=""
                            id=""
                            className="w-[2rem] appearance-none h-[2.5rem]"
                            value={noteFour}
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
                          <button className="">
                            <img
                              className="h-[24px]"
                              src={iconMail}
                              alt="feedback"
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4 w-full">
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
              Guardar
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
              Subir
            </button>
          </div>
        </div>
      </section>
      <FooterNavBar userId={teacher.id} role={teacher.role} />
    </>
  );
}

export default Tests;
