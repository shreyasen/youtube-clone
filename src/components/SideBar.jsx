import React from "react";

const SideBar = () => {
  return (
    <div className="col-span-2 p-5 h-screen overflow-hidden hover:overflow-y-auto scrollbar fixed w-52 mt-14">
      <div className="border-b border-b-gray-300">
        <ul>
          <li>Home</li>
          <li className="pt-2">Shorts</li>
          <li className="pt-2 pb-4">Subscriptions</li>
        </ul>
      </div>
      <div className="border-b border-b-gray-300">
        <h2 className="font-bold pt-4">You</h2>
        <ul>
          <li className="pt-2">Your Channel</li>
          <li className="pt-2">History</li>
          <li className="pt-2">Your Videos</li>
          <li className="pt-2 pb-4">Watch Later</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold pt-4">Explore</h2>
        <ul>
          <li className="pt-2">Trending</li>
          <li className="pt-2">Shopping</li>
          <li className="pt-2">Music</li>
          <li className="pt-2">Films</li>
          <li className="pt-2">Live</li>
          <li className="pt-2">Gaming</li>
          <li className="pt-2">News</li>
          <li className="pt-2">Sport</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
