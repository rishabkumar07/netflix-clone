import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({id}) => {
  useMovieTrailer(id);
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen">
      <iframe  className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?autoplay=1&controls=0&disablekb=1&loop=1&modestbranding=1&mute=1&vq=hd1080"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground;