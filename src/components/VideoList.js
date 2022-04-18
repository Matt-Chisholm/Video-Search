import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos }) {
  const renderVideos = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderVideos}</div>;
}
