

export const IconFooter = (params) => {
  const {mustDo, img,alt} = params
   return (
    <>
        <li>
            
                <img className="h_[44px] pointer" src={img} alt={alt} onClick={mustDo}/>
  
        </li>
    </>
  )
}
