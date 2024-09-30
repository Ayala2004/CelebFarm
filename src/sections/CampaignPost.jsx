import { TbMoneybag } from "../assets/icons/index";
import { options } from "../constants";
import ChoiceList from "../components/ChoiceList";
import PostCard from "../components/PostCard";
import { postMiniCards } from "../constants";
const CampaignPost = () => {
  return (
    <section className="bg-[#f7f6fc] p-5">
      <header
        className="flex flex-col justify-between border-b-2 border-slate-200 items-center
      md:flex-row"
      >
        <h1 className="card-title">Campaign Post</h1>
        <div className="flex flex-col gap-4 py-3 md:flex-row ">
          <ChoiceList />
          <ChoiceList />
        </div>
      </header>
      <nav className="pt-4">
        <ul className="flex gap-2 text-gray-400">
          <li className="text-black border-b-2 border-black  font-medium">
            <a className="font-semibold" href="#open">
              open
            </a>
          </li>
          <li>
            <a href="#closed">closed</a>
          </li>
          <li>
            <a href="#Draft">Draft</a>
          </li>
        </ul>
      </nav>
      <section className="bg-white flex flex-wrap justify-between p-5 ">
        <h5 className="text-wrap big-card-text max-w-[30rem]">
          Summer Sale 2024, New Product Launch - Summer 2024, Back to School
          Sale 2024
        </h5>
        <div className="flex gap-5">
          <div className="flex flex-nowrap gap-3 flex-col justify-center items-center  md:flex-row ">
            {postMiniCards.map((card)=>(
            <PostCard key={card.title} {...card}/>
          ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default CampaignPost;
