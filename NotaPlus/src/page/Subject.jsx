import { Header } from "../components/Header";
import { CardsSubject } from "../components/CardsSubject";
import subjectImage  from "../asset/subjectImage.png"
import womanUser from "../asset/womanUser.png"
import NombreUsuarioSubject from "../components/NombreUsuarioSubject";
import Footer from "../components/Footer";
function Subject() {
  return (
    <>
      <Header />
      <NombreUsuarioSubject img={womanUser} name="Sophia Rose" text='Profesora'/>
      <hr className="pt-2 w-[70%]"/>
      <div className="flex justify-end mb-4">
        <p>ICON1</p>
      </div>
      <section className="grid grid-cols-2 place-items-center gap-2 ">
        <div className="border-2  border-green-700 p-2 rounded-md min-h-[12rem]">
          <CardsSubject img={subjectImage} alt='ImageSubject' />
          <h2 className="text-lg uppercase text-green-500">Materia 1</h2>
          <p className="text-white">Grupo 1</p>
        </div>
        <div className="border-2  border-green-700 p-2 rounded-md min-h-[12rem]">
          <CardsSubject img={subjectImage} alt='ImageSubject'/>
          <h2 className="text-lg uppercase text-green-500">Materia 2</h2>
          <p className="text-white">Grupo 2</p>
        </div>
        <div className="border-2  border-green-700 p-2 rounded-md min-h-[12rem]">
          <CardsSubject img={subjectImage} alt='ImageSubject'/>
          <h2 className="text-lg uppercase text-green-500">Materia 3</h2>
          <p className="text-white">Grupo 3</p>
        </div>
        <div className="border-2  border-green-700 p-2 rounded-md min-h-[12rem]">
          <CardsSubject img={subjectImage} alt='ImageSubject'/>
          <h2 className="text-lg uppercase text-green-500">Materia 4</h2>
          <p className="text-white">Grupo 4</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Subject;
