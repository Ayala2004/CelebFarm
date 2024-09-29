import React from "react";
import HeaderButton from "../components/HeaderButton";
import { LuPlus } from "../assets/icons/index";
import Button from "../components/Button";
const Header = () => {
  return (
    <div>
      <Button label="Post A Compaign" IconURL={LuPlus} />
      {/* <HeaderButton /> */}
      {/* <div>{headButIcon.map((alert, index)=>
      (
        <HeaderButton icon={alert.icon}/>
      )
      )}</div> */}
    </div>
  );
};

export default Header;
