import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex justify-center mt-[2rem]">
          <Link to="/politica" className="text-white underline">
                <span className="text-white mt-[2rem]">Ir a Política de Privacidad</span>
          </Link>
    </footer>
  );
}
export default Footer;
