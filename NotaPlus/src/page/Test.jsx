import { Header } from "../components/Header";

import FooterNavBar from "../components/FooterNavBar";

function Test() {
  return (
    <>
      <Header />
      <section className="grid ">
        <div className="grid max-w-3xl gap-[15px] items-center  overflow-y-auto h-80 scrollbar-hide scroll-smooth bg-white/30 rounded-xl overflow-y min-h-[60vh]">
          <div className="grid">
            <thead className="grid-cols-1 border-b col-span-2 bg-pennBlue text-white border border-gray-300 px-4 ">
              <th className="grid align-start text-[1.3rem] font-secondary">
                crear
              </th>
            </thead>
            <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
              <td className="text-blue-800 font-secondary text-[1.2rem]">Titulo</td>
            </tr>
            <tr className="border-b border border-gray-300 ">
              <td className=" px-4 py-2 ">
                <input
                  type="text"
                  className="bg-transparent outline-none text-white placeholder:text-[.8rem]"
                  placeholder="Escribe el titulo de la actividad"
                />
              </td>
            </tr>
            <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
              <td className="text-blue-800 font-secondary text-[1.2rem]">Descripcion</td>
            </tr>
            <tr className="border-b border border-gray-300 ">
              <td className=" px-4 py-2 ">
                <input
                  type="text"
                  className="bg-transparent text-white pb-8 placeholder:text-[.8rem] outline-none"
                  placeholder="Describa la actividad"
                />
              </td>
            </tr>
            <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
              <td className="text-blue-900 font-secondary">Fecha de Entrega</td>
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
              <td className="text-blue-900 font-secondary text-[1.2rem]">Tipo de Actividad</td>
            </tr>
            <tr className="border-b border border-gray-300 ">
              <td className=" px-4 py-2 ">
                <select name="" id="" className="bg-gray-400 relative top-[.7rem] outline:none text-md">
                  <option value="" hidden defaultValue>
                    Seleccionar Destinatario
                  </option>
                  <option value="profe1">Profesor 1</option>
                  <option value="profe2">Profesor 2</option>
                  <option value="profe3">Profesor 3</option>
                </select>
              </td>
            </tr>
            <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
              <td className="text-blue-900 font-secondary text-[1.2rem]">Sistema de Calificacion</td>
            </tr>
            <tr className="border-b border border-gray-300 ">
            <select name="" id="" className="bg-gray-400 relative left-[1rem] top-[.9rem] outline:none text-md">
                  <option value="" hidden defaultValue>
                    Valor en puntos
                  </option>
                  <option value="profe1">Profesor 1</option>
                  <option value="profe2">Profesor 2</option>
                  <option value="profe3">Profesor 3</option>
                </select>
            </tr>
            <tr className=" border border-gray-300 px-4 py-2  bg-cyan-400">
              <td className="text-blue-900 font-secondary text-[1.2rem]">Grupos a Aplicar</td>
            </tr>
            <tr className="border-b border border-gray-300 ">
            <select name="" id="" className="bg-gray-400 relative left-[1rem] top-[.9rem] outline:none text-md">
                  <option value="" hidden defaultValue>
                    Escoge al Grupo
                  </option>
                  <option value="profe1">Profesor 1</option>
                  <option value="profe2">Profesor 2</option>
                  <option value="profe3">Profesor 3</option>
                </select>
            </tr>
          </div>
        </div>
      </section>
      <FooterNavBar />
    </>
  );
}
export default Test;
