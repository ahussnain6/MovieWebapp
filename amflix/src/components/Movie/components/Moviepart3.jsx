import React from "react";
import "./style/Part3.css";
import { NavLink } from "react-router-dom";
import { img, url } from "../../../assets/pic";
const Moviepart3 = (props) => {
  return (
    <>
      <h1 className="headin">Top Trending Series & Movies</h1>
      <div className="main">
        <div className="popular3">
          {props.data.map((curElem, index) => {
            return (
              <>
                <NavLink to={`/movie/${curElem.id}`} key={index}>
                  {curElem.poster_path ? (
                    <div
                      className="box3 back"
                      style={{
                        backgroundImage: `url(${url}/${curElem.poster_path})`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="box3 back"
                      style={{
                        backgroundImage: `url(${img})`,
                      }}
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

export default Moviepart3;
