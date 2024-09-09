const Label = (params) => {
  const {para, title} = params 
  return (
    <label
      htmlFor={para}
      className="w-full text-left text-white font-bold font-sans pt-2"
    >
      {title}
    </label>
  );
};

export default Label;
