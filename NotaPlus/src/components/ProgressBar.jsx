

const ProgressBar = ({promedio}) => {

    const progreso =  promedio / 10 * 100
    const colorBarra = promedio >=6 ? 'bg-blue-500' : 'bg-red-500';
    const resultado = promedio >=6 ? "Aprobada" : "Desaprobada"
  return (
    <div className="w-full bg-gray-200 rounded-full h-6 text-center">
        <div className={`${colorBarra} h-6 rounded-full`}  style={{width:`${progreso}%`}}></div>
        <span className="uppercase">{resultado}</span>
    </div>
  )
}

export default ProgressBar