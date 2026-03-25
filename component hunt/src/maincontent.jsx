import VideoCard from "./videocard";

function MainContent() {
  const videos = [
    { title: "Video 1", channel: "Channel A", views: "1M" },
    { title: "Video 2", channel: "Channel B", views: "500K" }
  ];

  return (
    <div style={{ padding: "10px" }}>
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
}

export default MainContent;