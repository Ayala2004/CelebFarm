import { optionsInsta } from "../constants";
import OptionInstagram from "./OptionInstagram";
import instagram from "../assets/images/instagram.png";
const InstaChoiceList = () => {
  return (
    <div className="bg-white flex justify-center items-center p-3 border-2 border-slate-200 rounded">
      <img src={instagram} alt="" />
      <select>
        {optionsInsta.map((option) => (
          <OptionInstagram key={option.label} {...option} />
        ))}
      </select>
    </div>
  );
};

export default InstaChoiceList;
