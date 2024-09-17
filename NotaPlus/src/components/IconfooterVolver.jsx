import { Link } from "react-router-dom"

export const IconFooterVolver = (params) => {
  const {link,mustDo, img,alt} = params
   return (
    <>
        <li>
            <Link to={link}>
                <img className="h_[44px] w-[2.5rem] relative left-4  pointer " src={img} alt={alt} onClick={mustDo}/>
            </Link>
        </li>
    </>
  )
}