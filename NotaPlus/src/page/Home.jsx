import logo from "../asset/logoNotaPlus.png"

const Home = () => {
  return (
    <section className="flex flex-col items-center h-screen gap-[60px]">
    <h2 className="font-bold text-white text-[30px] uppercase">Bienvenidos</h2>
    <img src={logo} alt="imagen de bienvenida" className="w-[213.59px] h-[144px]"/>
    <button className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] text-white"><a href="/login"><span>Iniciar Sesión</span></a></button>
  </section>
  )
}

export default Home




