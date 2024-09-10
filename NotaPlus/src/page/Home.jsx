import logo from "../asset/notaPlusLogo.svg";
import Footer from "../components/Footer";
import Button1 from "../components/Button1";

const Home = () => {
  return (
    <section className="flex flex-col justify-center min-h-[90vh]">
      <div className="flex flex-col items-center gap-[35px]">
        <h2 className="font-bold text-white text-[30px] uppercase">
          Bienvenidos
        </h2>
        <img
          src={logo}
          alt="imagen de bienvenida"
          className="w-[213.59px] h-[144px]"
        />
        <Button1
            link="/login"
            text="Iniciar Sesión"
        />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
