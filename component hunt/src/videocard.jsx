function VideoCard({ video }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{video.title}</h3>
      <p>{video.channel}</p>
      <p>{video.views} views</p>
    </div>
  );
}

export default VideoCard;