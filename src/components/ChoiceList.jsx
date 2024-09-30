import OptionPay from "./OptionPay";
import { optionsPay } from "../constants";
import { TbMoneybag } from "react-icons/tb";
const ChoiceList = () => {
  return (
    <div className="bg-white flex justify-center items-center p-3 border-2 border-slate-200 rounded-lg">
      <TbMoneybag size={20} className="" />
      <select name="paid" className="w-32  m-0">
        {optionsPay.map((option) => (
          <OptionPay key={option.label} label={option.label} />
        ))}
      </select>
    </div>
  );
};

export default ChoiceList;
