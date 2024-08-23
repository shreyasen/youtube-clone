import React, { useEffect, useState } from "react";
import { SEARCH_API, YOUTUBE_VIDEO_LIST_API } from "../constants/app.constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_LIST_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="grid grid-cols-3 mt-40 w-full">
      {videos.map((video) => (
        // <Link  key={video.id}>
        <VideoCard info={video} />
        // </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
