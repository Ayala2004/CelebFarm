
const Button = ({ label, IconURL }) => {
  return (
    <button className="text-violet p-3 rounded-lg flex justify-center items-center">
      {IconURL && <IconURL />}
      {label}
    </button>
  );
};

export default Button;
