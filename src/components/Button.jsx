
const Button = ({ label, IconURL }) => {
  return (
    <button className={`text-violet p-3 rounded-lg flex justify-center items-center
      ${IconURL
        ?"w-48"
        :"w-32"
      }`
    }>
      {IconURL && <IconURL />}
      {label}
    </button>
  );
};

export default Button;
