import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_BY_ID_API } from "../constants/app.constant";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [videoDetails, setVideoDetails] = useState();

  useEffect(() => {
    dispatch(hideMenu());
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_BY_ID_API + `&id=${videoId}`);
    const jsonData = await data.json();
    console.log(jsonData);
    setVideoDetails(jsonData.items[0]);
  };

  return (
    <div className="mt-20 ml-28 col-span-9">
      <div className="flex flex-row">
        <div>
          <iframe
            width="750"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          />
          <h1 className="font-bold text-xl pt-4">
            {videoDetails?.snippet.title}
          </h1>
          <div className="flex">
            <div className="font-semibold">
              {videoDetails?.snippet.channelTitle}
            </div>
            <button className="bg-slate-950 text-white rounded-3xl px-4 py-2 text-sm font-semibold">
              Subscribe
            </button>
          </div>

          <div className="bg-gray-200 rounded-lg p-4">
            <span className="font-semibold">
              {videoDetails?.statistics.viewCount} views{" "}
            </span>
            {videoDetails?.snippet.tags.map((tag, i) => (
              <span>#{tag} </span>
            ))}
            <div>{videoDetails?.snippet.description}</div>
          </div>
        </div>

        <div>test</div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
