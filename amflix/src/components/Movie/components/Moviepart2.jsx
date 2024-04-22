import "./style/Part2.css";
import { NavLink } from "react-router-dom";
import { img, url } from "../../../assets/pic";
const Moviepart2 = (props) => {
  return (
    <>
      <h1 className="heading">Top Now Playing Series & Movies</h1>
      <div className="main">
        <div className="popular2">
          {props.data.map((curElem, index) => {
            return (
              <>
                {" "}
                <NavLink to={`/movie/${curElem.id}`} key={index}>
                  {curElem.poster_path ? (
                    <div
                      className="box2 bg"
                      style={{
                        backgroundImage: `url(${url}/${curElem.poster_path})`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="box2 bg"
                      style={{
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  )}
                </NavLink>
              </>
            );
          })}{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Moviepart2;
