import { postMiniCardsFirst } from "../constants";
import WhiteSlide from "../components/WhiteSlide";
import Choice from "../components/Choice";
const CampaignPost = () => {
  return (
    <section className="bg-[#f7f6fc] p-5">
      <Choice key={"Campaign Post"} title={"Campaign Post"} />
      <div>
        <WhiteSlide
          bodyText={
            "Summer Sale 2024, New Product Launch - Summer 2024, Back to School Sale 2024"
          }
          postMiniCard={postMiniCardsFirst}
        />
      </div>
      <footer className="text-sm text-slate-400">
        <a href="">view All</a>
      </footer>
    </section>
  );
};
export default CampaignPost;
