import logo from '../asset/logoNotaPlus.png'


export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8">
      <img src={logo} alt="Logo de NotaPlus"  className='h-[55px]'/>
                
    </header>
  )
}
