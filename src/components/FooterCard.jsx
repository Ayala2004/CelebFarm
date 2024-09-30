import instagram from "../assets/images/instagram.png"
import { TbMoneybag } from "../assets/icons/index";
const FooterCard = () => {
  return (
    <ul className="flex gap-3 list-disc">
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
  );
}

export default FooterCard