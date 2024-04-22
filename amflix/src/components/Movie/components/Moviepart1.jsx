import { NavLink } from "react-router-dom";
import "./style/Part1.css";
import { img, url } from "../../../assets/pic";
const Moviepart1 = (props) => {
  const movie = props.data;
  return (
    <>
      <h1 className="head">Top Popular Series & Movies</h1>
      <div className="main">
        <div className="popular">
          {movie &&
            movie.map((curElem, index) => {
              return (
                <>
                  <NavLink to={`/movie/${curElem.id}`} key={index}>
                    {curElem.poster_path ? (
                      <div
                        className="box1 full"
                        style={{
                          backgroundImage: `url(${url}/${curElem.poster_path})`,
                        }}
                      ></div>
                    ) : (
                      <div
                        className="box1 full"
                        style={{ backgroundImage: `url(${img})` }}
                      ></div>
                    )}
                  </NavLink>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Moviepart1;
