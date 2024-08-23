import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const showSidebar = useSelector((store) => store.app.showMenu);
  return (
    <div
      className={` ${
        showSidebar ? "ml-56 col-span-10" : "pl-5 col-span-12"
      } w-full`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
