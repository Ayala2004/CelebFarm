import { postMiniCardsFirst } from "../constants";
import WhiteSlide from "../components/WhiteSlide";
import Choice from "../components/Choice";
const CampaignPost = () => {
  return (
    <section className="bg-[#f7f6fc] p-5 border-2 min-h-[350px] border-gray-200 m-10 rounded-2xl">
      <Choice key={"Campaign Post"} title={"Campaign Post"} />
      <div className="mt-2">
        <nav>
          <ul className="flex gap-2 text-gray-400 ">
            <li className="text-black border-b-2 border-black  font-medium">
              <a className="font-semibold" href="#open">
                open
              </a>
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-black">
              <a href="#closed">closed</a>
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-black">
              <a href="#Draft">Draft</a>
            </li>
          </ul>
        </nav>
        <div>
          <WhiteSlide
            bodyText={
              "Summer Sale 2024, New Product Launch - Summer 2024, Back to School Sale 2024"
            }
            postMiniCard={postMiniCardsFirst}
          />
        </div>
      </div>
      <footer>
        <a
          href="#view all"
          className="text-sm text-slate-400 absolute py-10 px-3"
        >
          view All
        </a>
      </footer>
    </section>
  );
};
export default CampaignPost;
