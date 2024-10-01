import ChoiceList from "./ChoiceList";
import InstaChoiceList from "./InstaChoiceList";
const Choice = ({ title }) => {
  return (
    <header
      className={`flex flex-col justify-between  items-center
      md:flex-row ${
        title === "Campaign Post" ? "border-b-2 border-slate-200" : ""
      }`}
    >
      <h1 className="card-title">{title}</h1>
      <div className="flex flex-col gap-4 py-3 md:flex-row ">
        <ChoiceList />
        <InstaChoiceList />
      </div>
    </header>
  );
};

export default Choice;
