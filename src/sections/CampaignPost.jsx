import { TbMoneybag } from "../assets/icons/index";
import { options } from "../constants";
import ChoiceList from "../components/ChoiceList";
const CampaignPost = () => {
  return (
    <section className="bg-[#f7f6fc] p-5">
      <header
        className="flex flex-col justify-between border-b-2 border-slate-200 items-center
      md:flex-row">
        <h1 className="card-title">Campaign Post</h1>
        <div className="flex flex-col gap-4 py-3 md:flex-row ">
          <ChoiceList />
          <ChoiceList />
        </div>
      </header>
      
    </section>
  );
};

export default CampaignPost;