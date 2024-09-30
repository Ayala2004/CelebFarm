import React from "react";
import { LuPlus } from "../assets/icons/index";
import Button from "../components/Button";
import HeaderButton from "../components/HeaderButton";
import { headerIcon } from "../constants";
const Header = () => {
  return (
    <div className="flex justify-between p-4 border-b-2  flex-wrap box-border flex-col items-center md:flex-row md:items-center  ">
      <h1 className="text-3xl font-semibold pb-2">Campaign Management</h1>
      <div className="flex  justify-center items-center flex-col-reverse  lg:flex-row ">
        <div className="pr-6">
          <Button label="Post A Compaign" IconURL={LuPlus} />
        </div>
        <div className="flex flex-1 items-center justify-center pr-3">
          {headerIcon.map((iconHead) => (
            <HeaderButton key={iconHead.href} {...iconHead} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
