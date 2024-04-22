import React from "react";
import { NavLink } from "react-router-dom";
import "../../Movie/components/style/Detail.css";
import { url } from "../../../assets/pic";
import { img } from "../../../assets/pic";
const Similar = (props) => {
  let smi = props.data;
  return (
    <>
      <h1 className="io impo">Related Movies and TV Shows</h1>
      <div className="uio inner">
        <div className="popular0">
          {smi == undefined || smi.length < 1 ? (
            <h1 className="unique">NO Similar Movie Available</h1>
          ) : (
            smi.length > 1 &&
            smi.slice(0, 5).map((curElem, index) => {
              return (
                <NavLink
                  to={`/movie/${curElem.id}`}
                  key={index}
                  onClick={() => {
                    window.scrollTo({ top: 10, behavior: "smooth" });
                  }}
                >
                  {curElem.poster_path ? (
                    <div
                      className="box10 background"
                      style={{
                        backgroundImage: `url(${url}${curElem.poster_path})`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="box10 background"
                      style={{
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  )}
                </NavLink>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Similar;
