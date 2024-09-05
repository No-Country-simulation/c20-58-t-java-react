import logo from '../asset/notaPlusLogo.svg'


export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8">
      <img src={logo} alt="Logo de NotaPlus"  className='h-[55px]'/>
                
    </header>
  )
}
