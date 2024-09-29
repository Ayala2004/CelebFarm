import { logo } from "../assets/icons";
import { navLinks } from "../constants";
import Nav from "../components/Nav";
import { IoSettingsOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <>
      <div
        className="bg-[#643869] text-white 
        lg:flex lg:flex-col"
      >
        <h1 className="p-3">
          <img src={logo}></img>
        </h1>
        <div className="flex p-3 flex-wrap xl:flex-col ">
          {navLinks.map((link, index) => (
            <Nav key={index} {...link} />
          ))}
          <footer>


          </footer>
        </div>
      </div>
    </>
  );
};

export default NavBar;
