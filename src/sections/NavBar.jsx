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
        <nav>
          <h1 className="p-3 border-b-2 border-slate-300 flex justify-between">
            <img src={logo}></img>
            <section className="hover:bg-white hover:text-[#643869] rounded-full flex justify-center items-center w-8 h-8">
              <IoSettingsOutline className="size-7 lg:hidden" />
            </section>
          </h1>
          <ul className="flex flex-col justify-between">
            <li className="flex p-3 flex-wrap lg:flex-col ">
              {navLinks.map((link, index) => (
                <Nav key={index} {...link} />
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
