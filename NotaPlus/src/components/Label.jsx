const Label = (params) => {
  const {para, title} = params 
  return (
    <label
      htmlFor={para}
      className="w-full text-left text-white font-bold font-sans pt-9"
    >
      {title}
    </label>
  );
};

export default Label;
