
const Navbar = () => {
  return (
    <nav className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">
          Notas plus
        </li>
      </div>
      <ul className="flex items-center space-x-2 lg:space-x-10">
        <li>Inicio</li>
        <li className="">profesor</li>
        <li>alumno</li>
      </ul>
    </nav>
  );
};
export default Navbar;
