import React from "react";

const Nav = ({ href, label, Icon }) => {
  console.log(href);
  return (
    <div
      className="p-5 text-sm text-nowrap hover:text-[#643869] hover:bg-white rounded-md hover:font-semibold 
    lg:flex lg:items-center lg:gap-2 "
    >
      <Icon className="size-8 hidden lg:block" />
      <a className="" href={href}>
        {label}
      </a>
    </div>
  );
};

export default Nav;
