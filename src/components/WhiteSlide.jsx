import { TbMoneybag } from "../assets/icons/index";
import PostCard from "../components/PostCard";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import instagram from "../assets/images/instagram.png";
const WhiteSlide = ({ bodyText, postMiniCard }) => {
  return (
    <section className="bg-[#f7f6fc] p-5">
      <nav className="pt-4">
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
      <section className="bg-white rounded-xl  p-5 md:h-32 ">
        <div className="flex justify-between">
          <h5 className="text-wrap font-bold md:big-card-text sm:pr-0 max-w-[30rem] text-sm lg:text-lg">
            {bodyText}
          </h5>
          <div className="flex gap-5">
            <div>
              <div className="flex gap-3 flex-col sm:flex-row justify-end items-center pt-2">
                {postMiniCard.map((card) => (
                  <PostCard key={card.title} {...card} />
                ))}
              </div>
            </div>
            <div className="mb-auto pl-2">
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
