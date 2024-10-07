import { TbMoneybag } from "../assets/icons/index";
import PostCard from "../components/PostCard";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import instagram from "../assets/images/instagram.png";
const WhiteSlide = ({ bodyText, postMiniCard }) => {
  return (
    <section className="bg-[#f7f6fc] mt-2 relative">
      <section className="bg-white rounded-xl h-fit  p-5 ">
        <div className="flex flex-col md:flex-row lg:justify-between">
          <div className="flex justify-between">
            <h5 className="text-wrap font-bold md:big-card-text sm:pr-0 max-w-[30rem] text-sm lg:text-lg">
              {bodyText}
            </h5>
            <div className="mb-auto block md:hidden cursor-pointer">
              <PiDotsThreeOutlineDuotone size={20} className="justify-start" />
            </div>
          </div>
          <div className="flex gap-5 justify-center">
            <div>
              <div className="flex gap-3 flex-col justify-center sm:flex-row md:justify-end items-center py-3">
                {postMiniCard.map((card) => (
                  <PostCard key={card.title} {...card} />
                ))}
              </div>
            </div>
            <div className="mb-auto hidden lg:block cursor-pointer">
              <PiDotsThreeOutlineDuotone size={20} className="justify-start" />
            </div>
          </div>
        </div>
        <footer className=" mb-auto mt-auto text-sm text-slate-500 justify-start px-2 ">
          <ul className="flex list-disc gap-5">
            <li className="  justify-center items-center  list-item">
              <img
                src={instagram}
                alt="instagram icon"
                className="w-4 h-4 inline-block"
              />
              <span className="pl-1">Instagram</span>
            </li>
            <li className=" justify-center items-center list-item ">
              <TbMoneybag className="w-5 h-5 text-black inline-block" />
              Paid
            </li>
            <li className=" justify-center items-center list-item">1h ago</li>
          </ul>
        </footer>
        <div></div>
      </section>
    </section>
  );
};

export default WhiteSlide;
