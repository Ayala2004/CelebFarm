import { optionsInsta } from "../constants";
import OptionInstagram from "./OptionInstagram";
import instagram from "../assets/images/instagram.png";
const InstaChoiceList = () => {
  return (
    <div className="bg-white flex justify-center items-center p-3 border-2 border-slate-200 rounded-xl h-10">
      <img src={instagram} alt="instagram icon" className="w-4" />
      <select>
        {optionsInsta.map((option) => (
          <OptionInstagram key={option.label} {...option} />
        ))}
      </select>
    </div>
  );
};

export default InstaChoiceList;
