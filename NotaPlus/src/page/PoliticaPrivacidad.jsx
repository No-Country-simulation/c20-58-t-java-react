import { Header } from "../components/Header"
import iconVolver from "../asset/footerPrevio.svg"
import { IconFooter } from "../components/IconFooter"
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
    <Titulos title="Políticas de Privacidad" />

    <div  className="flex max-w-3xl w-full flex-wrap p-4 items-center overflow-y-auto h-96 scrollbar-hide scroll-smooth gap-8 text-white backdrop-blur-sm bg-white/30 rounded-xl p-8">
      
      <p className="mb-4">
        En [Nombre de la Institución] y NotaPlus, nos comprometemos a proteger la privacidad de nuestros estudiantes, padres y profesores. Esta política de privacidad describe cómo recopilamos, usamos y protegemos la información personal que obtenemos a través de nuestra webapp.
      </p>

      <Subtitulos title="1. Información que recopilamos" />   
      <p className="mb-4">
        Recopilamos información personal de padres, alumnos y profesores que es necesaria para brindar nuestros servicios educativos. Los tipos de información que podemos recopilar incluyen:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Nombre completo</li>
        <li>Información de contacto (correo electrónico, teléfono)</li>
        <li>Información académica de los estudiantes</li>
        <li>Información sobre el progreso académico</li>
      </ul>

      <Subtitulos title="2. Uso de la información" /> 
        <p className="mb-4">
        La información que recopilamos se utiliza para los siguientes fines:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Gestionar el registro de estudiantes y su progreso académico</li>
        <li>Comunicación con padres y tutores legales</li>
        <li>Coordinación con profesores y administración escolar</li>
        <li>Cumplir con las normativas legales y educativas</li>
      </ul>

      <Subtitulos title="3. Compartir información" />
      <p className="mb-4">
        No compartimos información personal con terceros, excepto en los siguientes casos:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Cuando es requerido por ley o para cumplir con procesos legales</li>
        <li>Con proveedores de servicios que nos ayudan a gestionar nuestra webapp, siempre garantizando la protección de la información</li>
        <li>En caso de emergencias para proteger la seguridad de los estudiantes o personal escolar</li>
      </ul>

      <Subtitulos title="4. Seguridad de la información" />
      <p className="mb-4">
        Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal contra accesos no autorizados, pérdida o alteración. Estas medidas incluyen la encriptación de datos y el control de acceso a nuestra base de datos.
      </p>

      <Subtitulos title="5. Derechos de los usuarios" />
      <h2 className="text-2xl font-bold mb-2"></h2>
      <p className="mb-4">
        Los padres, estudiantes y profesores tienen derecho a acceder, corregir o eliminar su información personal en cualquier momento. Para ejercer estos derechos, pueden ponerse en contacto con la administración de la institución a través de los canales establecidos.
      </p>

      <Subtitulos title="6. Cambios en la política de privacidad" />
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Las modificaciones serán notificadas a través de nuestra webapp y estarán disponibles para consulta. Recomendamos revisar esta política periódicamente.
      </p>

      <Subtitulos title="7. Contacto" />
      <p className="mb-4">
        Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, puede ponerse en contacto con nosotros a través de [correo electrónico o teléfono de contacto].
      </p>
    </div>

    <IconFooter
              href="#"
              mustDo={handleBack}
              img={iconVolver}
              alt="icono Volver"
            />

    </>
  )
}

export default PoliticaPrivacidad