import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import "./style/Watch.css";
import Footer from "../../Layout/components/Footer";
import { fetchtrailer } from "../../../store/MovieSlice";
import { arr } from "../../../assets/pic";
const Watch = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState([]);
  const [video, setVideo] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie.trailer);
  useEffect(() => {
    dispatch(fetchtrailer(id));
  }, [id]);
  useEffect(() => {
    setTrailer(data);
  }, [data]);
  const getkey = (e) => {
    setVideo(e);
  };
  if (trailer == undefined || trailer.length < 1) {
    return <h1 className="error">NO VIDEO AVAILABLE</h1>;
  }
  if (trailer.length == 1) {
    return (
      <Youtube
        className="you"
        videoId={trailer[0].key}
        opts={{
          width: "95%",
          height: "75%",
          playerVars: {
            autoplay: 0,
            controls: 1,
            cc_load_policy: 1,
            fs: 1,
            rel: 1,
            showinfo: 1,
            modestbranding: 1,
          },
        }}
      />
    );
  }
  return (
    <>
      <div className="sid">
        <h1 className="popi">First Select the Video you want to Watch </h1>
        {trailer.length > 1 && (
          <div className="youtube">
            <Youtube
              className="you"
              videoId={video}
              opts={{
                width: "95%",
                height: "74%",
                playerVars: {
                  autoplay: 0,
                  controls: 1,
                  cc_load_policy: 1,
                  fs: 1,
                  rel: 1,
                  showinfo: 1,
                  modestbranding: 1,
                },
              }}
            />

            <div className="sq">
              {trailer.map((curElem, index) => {
                return (
                  <>
                    <span
                      className="bo"
                      key={index}
                      onClick={() => {
                        getkey(curElem.key);
                        window.scrollTo({ top: 5, behavior: "smooth" });
                      }}
                    >
                      <h3 className="name">
                        {curElem.name.substring(0, 54)}...
                      </h3>
                      <h6 className="size">{curElem.size}p</h6>
                      <img src={arr} alt="" className="img" />
                    </span>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Watch;
