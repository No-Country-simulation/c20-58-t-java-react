export const CardsSubject = (params) => {
  const { img, alt } = params;
  return (
    <div>
      <img className="w-[10rem]" src={img} alt={alt} />
    </div>
  );
};
