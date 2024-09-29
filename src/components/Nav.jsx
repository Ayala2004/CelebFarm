import React from "react";

const Nav = ({ href, lable, Icon }) => {
  console.log(href);
  return (
    <div className="p-5 text-sm text-nowrap hover:text-[#643869] hover:bg-white rounded-md hover:font-semibold 
    lg:flex lg:items-center lg:gap-2 ">
      <Icon className="size-8 hidden xl:block" />
      <a className="" href={href}>
        {lable}
      </a>
    </div>
  );
};

export default Nav;
