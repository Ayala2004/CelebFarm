import { logo } from "../assets/icons";
import { navLinks } from "../constants";
import Nav from "../components/Nav";
import { IoSettingsOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <>
      <div
        className="text-violet
        lg:flex lg:flex-col h-screen"

      >
        <nav>
          <h1 className="p-3 border-b-2 border-slate-300 flex justify-between">
            <img src={logo}></img>
            <section className="hover:bg-white   hover:text-[#643869] rounded-full flex justify-center items-center w-8 h-8 lg:hidden">
              <IoSettingsOutline className="size-7 lg:hidden " />
            </section>
          </h1>
          <ul className="flex flex-col">
            <li className="flex p-3 flex-wrap justify-center items-start  lg:items-start lg:justify-start lg:flex-col  ">
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
