import React, { useEffect } from "react";
import {
  fetchMoviespopular,
  fetchMoviesnow,
  fetchMoviestop,
  fetchMoviesup,
} from "../../../store/MovieSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../../store/MovieSlice.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../Layout/components/Footer.jsx";
import "./style/Show.css";
import { url } from "../../../assets/pic.js";
import { load1 } from "../../../assets/pic.js";
import Movies from "./Movies.jsx";
const Show = () => {
  const dispatch = useDispatch();
  const {
    data: status,
    datapo,
    datanow,
    datatop,
    datanup,
  } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(fetchMoviespopular());
    dispatch(fetchMoviesup());
    dispatch(fetchMoviestop());
    dispatch(fetchMoviesnow());
  }, []);
  if (status === STATUS.LOADING) {
    return (
      <img
        src={`${load1}`}
        style={{ width: "100px", height: "100px", margin: "20vw 40vw" }}
      />
    );
  }
  if (status === STATUS.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <>
      <div className="carousel1">
        <Carousel fade controls={false} indicators={false}>
          {datanup.map((curElem) => {
            return (
              <Carousel.Item interval={1800}>
                <img
                  className="imgpo"
                  src={`${url}/${curElem.poster_path}`}
                  alt="Image One"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <Movies data={{ datapo, datanow, datatop, datanup }} />
      <Footer />
    </>
  );
};
export default Show;
