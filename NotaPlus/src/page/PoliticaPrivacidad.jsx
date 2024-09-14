import { Header } from "../components/Header"
import iconVolver from "../asset/footerPrevio.svg"
import { IconFooterVolver } from "../components/IconfooterVolver"
import { useNavigate } from 'react-router-dom';
import Titulos from "../components/Titulos"
import Subtitulos from "../components/Subtitulos"

const PoliticaPrivacidad = () => {
    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1); // Regresa a la página previa
    };


  return (
    <>
    <Header/>
    <section className="flex flex-col place-content-center items-center mb-4">
        <Titulos title="Políticas de Privacidad" />

        <div  className="flex max-w-3xl w-full flex-wrap p-4 items-center overflow-y-auto h-96 scrollbar-hide scroll-smooth gap-8 text-white bg-white/30 rounded-xl min-h-[70vh]">
          
          <p className="mb-3">
            En [Nombre de la Institución] y NotaPlus, nos comprometemos a proteger la privacidad de nuestros estudiantes, padres y profesores. Esta política de privacidad describe cómo recopilamos, usamos y protegemos la información personal que obtenemos a través de nuestra webapp.
          </p>

          <Subtitulos title="1. Información que recopilamos" />   
          <p className="mb-3 text-[1.1rem]">
            Recopilamos información personal de padres, alumnos y profesores que es necesaria para brindar nuestros servicios educativos. Los tipos de información que podemos recopilar incluyen:
          </p>
          <ul className="list-disc list-inside pl-6 mb-3">
            <li className="text-[.9rem]">Nombre completo</li>
            <li className="text-[.9rem]">Información de contacto</li>
            <li className="text-[.9rem]">Información académica de los estudiantes</li>
            <li>Información sobre el progreso académico</li>
          </ul>

          <Subtitulos title="2. Uso de la información" /> 
            <p className="mb-3">
            La información que recopilamos se utiliza para los siguientes fines:
          </p>
          <ul className="list-disc list-inside pl-6 mb-3">
            <li className="text-[.7rem]">Gestionar el registro de estudiantes y su progreso académico</li>
            <li className="text-[.7rem]">Comunicación con padres y tutores legales</li>
            <li className="text-[.7rem]">Coordinación con profesores y administración escolar</li>
            <li className="text-[.8rem]">Cumplir con las normativas legales y educativas</li>
          </ul>

          <Subtitulos title="3. Compartir información" />
          <p className="mb-3">
            No compartimos información personal con terceros, excepto en los siguientes casos:
          </p>
          <ul className="list-disc list-inside pl-6 mb-3">
            <li className="text-[.8rem]">Cuando es requerido por ley o para cumplir con procesos legales</li>
            <li className="text-[.8rem]">Con proveedores de servicios que nos ayudan a gestionar nuestra webapp, siempre garantizando la protección de la información</li>
            <li className="text-[.8rem]">En caso de emergencias para proteger la seguridad de los estudiantes o personal escolar</li>
          </ul>

          <Subtitulos title="4. Seguridad de la información" />
          <p className="mb-3">
            Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal contra accesos no autorizados, pérdida o alteración. Estas medidas incluyen la encriptación de datos y el control de acceso a nuestra base de datos.
          </p>

          <Subtitulos title="5. Derechos de los usuarios" />
          <p className="mb-3">
            Los padres, estudiantes y profesores tienen derecho a acceder, corregir o eliminar su información personal en cualquier momento. Para ejercer estos derechos, pueden ponerse en contacto con la administración de la institución a través de los canales establecidos.
          </p>

          <Subtitulos title="6. Cambios en la política de privacidad" />
          <p className="mb-3">
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Las modificaciones serán notificadas a través de nuestra webapp y estarán disponibles para consulta. Recomendamos revisar esta política periódicamente.
          </p>

          <Subtitulos title="7. Contacto" />
          <p className="mb-3">
            Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, puede ponerse en contacto con nosotros a través de [correo electrónico o teléfono de contacto].
          </p>
        </div>
    </section>
    <ul>
        <IconFooterVolver
                  href="#"
                  mustDo={handleBack}
                  img={iconVolver}
                  alt="icono Volver"
                 
                />
    </ul>
    </>
  )
}

export default PoliticaPrivacidad