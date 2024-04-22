import React from "react";
import "./style/Part4.css";
import { NavLink } from "react-router-dom";
import { img, url } from "../../../assets/pic";
const Moviepart4 = (props) => {
  return (
    <>
      <h1 className="ucome">Top UpComing Series & Movies</h1>
      <div className="main">
        <div className="popular4">
          {props.data.map((curElem, index) => {
            return (
              <>
                <NavLink to={`/movie/${curElem.id}`} key={index}>
                  {curElem.poster_path ? (
                    <div
                      className="box4 bgi"
                      key={index}
                      style={{
                        backgroundImage: `url(${url}/${curElem.poster_path})`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="box4 bgi"
                      key={index}
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

export default Moviepart4;
