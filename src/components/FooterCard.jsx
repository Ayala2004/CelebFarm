import instagram from "../assets/images/instagram.png"
import { TbMoneybag } from "../assets/icons/index";
const FooterCard = () => {
  return (
    <ul>
      <li>
        <img src={instagram} alt="instagram icon" />
        Instagram
      </li>
      <li>
        <TbMoneybag/>
        Paid
      </li>
      <li>1h ago</li>
    </ul>
  );
}

export default FooterCard