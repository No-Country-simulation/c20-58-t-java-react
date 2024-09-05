const Label = (params) => {
  const {para, title} = params 
  return (
    <label
      htmlFor={para}
      className="w-full text-left text-white font-bold font-secondary px-2 py-4 mt-2"
    >
      {title}
    </label>
  );
};

export default Label;
