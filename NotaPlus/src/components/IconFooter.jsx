import { Link } from "react-router-dom"

export const IconFooter = (params) => {
  const {link,mustDo, img,alt} = params
   return (
    <>
        <li>
            <Link to={link}>
                <img className="h_[44px] w-[2rem] pointer " src={img} alt={alt} onClick={mustDo}/>
            </Link>
        </li>
    </>
  )
}
