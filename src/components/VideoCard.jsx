import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const showSidebar = useSelector((store) => store.app.showMenu);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className={` ${!showSidebar ? "w-96" : "w-80"} mb-8`}>
      <Link to={`watch?v=${info.id}`}>
        <img
          alt="video"
          src={showSidebar ? thumbnails.medium.url : thumbnails.medium.url}
          height={
            showSidebar ? thumbnails.medium.height : thumbnails.high.height
          }
          width={showSidebar ? thumbnails.medium.width : thumbnails.high.width}
          className="rounded-lg relative -z-20"
        />
        <div className="relative -z-20">
          <h2 className="font-semibold truncate-lines">{title}</h2>
          <div>{channelTitle}</div>
          <div>{statistics.viewCount} views</div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
