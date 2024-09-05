export const NavBar = () => {
  return (
  <nav className="h-[55px] px-5 sticky top-0 z-50 py-[.8rem] bg-transparent lg:px-20 flex justify-between text-white">
    <ul className="flex items-center space-x-2 lg:space-x-10">
      <li className="ease-in-out duration-300 hover:bg-argentinianBlue_logo hover:rounded-lg p-2">Inicio</li>
      <li className="ease-in-out duration-300 hover:bg-argentinianBlue_logo hover:rounded-lg p-2">Perfil</li>
      <li className="ease-in-out duration-300 hover:bg-argentinianBlue_logo hover:rounded-lg p-2">Mensaje</li>
    </ul>
  </nav>
  )
}




