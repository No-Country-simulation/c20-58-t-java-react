import logo from "../asset/notaPlusLogo.svg";
import ButtonLogout from "./ButtonLogout";

export const Header = () => {
  return (
    <>
    <header className="flex justify-between items-end mb-6">
        <img src={logo} alt="Logo de NotaPlus" className="h-[100px]" />
        <ButtonLogout />
        
    </header>
    <hr />
    </>
  );
};
