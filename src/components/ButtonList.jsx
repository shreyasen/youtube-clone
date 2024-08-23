import React from "react";
import Button from "./Button";
import { BUTTON_LIST } from "../constants/app.constant";

const ButtonList = () => {
  return (
    <div className="flex mt-16 fixed bg-white w-full -z-10">
      {BUTTON_LIST.map((button) => (
        <Button name={button} key={button} />
      ))}
    </div>
  );
};

export default ButtonList;
