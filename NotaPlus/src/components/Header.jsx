import logo from "../asset/notaPlusLogo.svg";
import ButtonLogout from "./ButtonLogout";

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-3">
      <img src={logo} alt="Logo de NotaPlus" className="h-[55px]" />
      <ButtonLogout />
    </header>
  );
};
