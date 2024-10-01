import ActiveCard from "../components/ActiveCard";
import Choice from "../components/Choice";
import WhiteSlide from "../components/WhiteSlide";
import { postMiniCardsSecond, postMiniCardsThird } from "../constants";
import people from "../assets/images/people.jpg";
import computer from "../assets/images/computer.jpg";
import girl from "../assets/images/girl.avif";
import profile1 from "../assets/images/profile1.avif";
import profile2 from "../assets/images/profile2.avif";
import profile3 from "../assets/images/profile3.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const ActiveCampaign = () => {
  return (
    <section className="bg-white p-[10px] m-10 border-2 border-gray-200 rounded-2xl h-fit">
      <div className="border-hidden">
        <Choice key={"Active Campaign"} title={"Active Campaign"} />
      </div>
      <section className="bg-[#f7f6fc] px-2  py-2 rounded-2xl border-2 border-gray-200">
        <div className="mt-2 ">
          <div>
            <WhiteSlide
              bodyText={
                "Back to School Sale 2024 - Students and Reachers Get 20% Off"
              }
              postMiniCard={postMiniCardsSecond}
            />
          </div>
          <div className="bg-[#f7f6fc] p-5 rounded-2xl lg:flex lg:flex-row lg:justify-between">
            <ActiveCard
              imgPost={people}
              imgProfil={profile1}
              status={"Pending Activation"}
              time={" "}
              title={"Post(Photo)"}
              date={""}
              name={"Darlene Robertson"}
              buttonText={"Activate"}
            />
            <ActiveCard
              imgPost={computer}
              imgProfil={profile2}
              status={"Live"}
              time={"1hr"}
              title={"Post(Photo)"}
              date={"Posted on: Oct 20,2022"}
              name={"Darrell Steward"}
              buttonText={"Pay"}
            />
            <ActiveCard
              imgPost={girl}
              imgProfil={profile3}
              status={"For review"}
              time={"1hr"}
              title={"Post(Photo)"}
              date={"Due: Oct 20,2022"}
              name={"Robert Fox"}
              buttonText={"Aporove"}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f7f6fc] px-2  py-2 rounded-2xl  mt-2 h-fit border-2 border-gray-200">
        <section className="">
          <WhiteSlide
            bodyText={
              "10,000$ Google Serch Campaign - Brand Terms, Millennial Mom, Luxury Goods Buyers Campaign"
            }
            postMiniCard={postMiniCardsThird}
          />
        </section>

        {/* <button>
          <FaArrowRightLong />
        </button> */}
      </section>
    </section>
  );
};

export default ActiveCampaign;
