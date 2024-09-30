import OptionPay from "./OptionPay";
import { options } from "../constants";

const ChoiceList = () => {
  return (
    <select
      name="paid"
      id="paid"
      className="w-32 border-2 border-slate-200 rounded m-0"
    >
      {options.map((option) => (
        <OptionPay key={option.label} {...option} />
      ))}
    </select>
  );
};

export default ChoiceList;
