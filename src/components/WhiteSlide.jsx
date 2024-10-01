import { TbMoneybag } from "../assets/icons/index";
import PostCard from "../components/PostCard";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import instagram from "../assets/images/instagram.png";
const WhiteSlide = ({ bodyText, postMiniCard }) => {
  return (
    <section className="bg-[#f7f6fc] mt-2">
      <section className="bg-white rounded-xl h-fit  p-5 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex justify-between">
            <h5 className="text-wrap font-bold md:big-card-text sm:pr-0 max-w-[30rem] text-sm lg:text-lg">
              {bodyText}
            </h5>
            <div className="mb-auto block md:hidden">
              <PiDotsThreeOutlineDuotone size={20} className="justify-start" />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="flex gap-3 flex-col sm:flex-row justify-end items-center py-3">
                {postMiniCard.map((card) => (
                  <PostCard key={card.title} {...card} />
                ))}
              </div>
            </div>
            <div className="mb-auto hidden md:block">
              <PiDotsThreeOutlineDuotone size={20} className="justify-start" />
            </div>
          </div>
        </div>
        <footer className="absolute mb-auto mt-auto text-sm text-slate-500 justify-start ">
          <ul className="flex gap-3 list-disc list-inside ">
            <li className="flex gap-1 justify-center items-center">
              <img src={instagram} alt="instagram icon" className="w-4 h-4" />
              Instagram
            </li>
            <li className="flex gap-1 justify-center items-center">
              <TbMoneybag className="w-5 h-5 text-black" />
              Paid
            </li>
            <li className="flex gap-1 justify-center items-center">1h ago</li>
          </ul>
        </footer>
        <div></div>
      </section>
    </section>
  );
};

export default WhiteSlide;
