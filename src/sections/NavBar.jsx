import { logo } from "../assets/icons";
import { navLinks } from "../constants";
import Nav from "../components/Nav";
import { IoSettingsOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <section>
      <div
        className="text-violet h-full rounded
         lg:flex-col lg:sticky "
      >
        <nav className=" h-full flex flex-col justify-between ">
          <div>
            <div>
              <h1 className="p-3 border-b-2 border-slate-300 flex justify-between">
                <img src={logo}></img>
                <section className="hover:bg-white   hover:text-[#643869] rounded-full flex justify-center items-center w-8 h-8 lg:hidden">
                  <IoSettingsOutline className="size-7 lg:hidden  " />
                </section>
              </h1>
            </div>
            <ul className="flex flex-col ">
              <li>
                <div className="flex p-3 flex-1 flex-wrap justify-center items-start  lg:items-start lg:justify-start lg:flex-col  ">
                  {navLinks.map((link, index) => (
                    <Nav key={index} {...link} />
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <div>
            <section className="hidden w-[90%] border-t-2 border-slate-200 py-4 text-3xl text-nowrap hover:text-[#643869] hover:bg-white hover:font-semibold lg:flex  gap-2 items-center mx-auto justify-center">
              <span>
                <IoSettingsOutline />
              </span>
              <span className="text-sm">Setting</span>
            </section>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
