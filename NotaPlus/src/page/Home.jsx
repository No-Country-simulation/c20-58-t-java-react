import logo from "../asset/notaPlusLogo.svg";
import Footer from "../components/Footer";

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
        <button className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] text-white ease-in-out duration-300 hover:bg-mexicanPink_logo hover:scale-90 ">
          <a href="http://localhost:5173/login">
            <span>Iniciar Sesión</span>
          </a>
        </button>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
