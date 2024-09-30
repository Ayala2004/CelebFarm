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
      <nav >
        <ul className="flex gap-2 text-gray-400">
          <li className="text-black border-b-2 border-black  font-bold"><a href="#open">open</a></li>
          <li><a href="#closed">closed</a></li>
          <li><a href="#Draft">Draft</a></li>
        </ul>
      </nav>
      
    </section>
  );
};

export default CampaignPost;