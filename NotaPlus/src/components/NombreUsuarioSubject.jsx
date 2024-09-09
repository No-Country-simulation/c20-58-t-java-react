const NombreUsuario = (params) => {
  const { name, img, alt, text } = params;
  return (
    <div className="max-w-3xl w-full flex align-middle">
      <div>
        <img className="rounded-[100%] w-[4rem] h-[3.5rem]" src={img} alt={alt} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-left text-white font-bold text-[20px] pb-2 relative left-1">
          {name}
        </h2>
        <p className="relative bottom-2 left-1 text-[#64B2FA]">{text}</p>
      </div>
    </div>
  );
};

export default NombreUsuario;
