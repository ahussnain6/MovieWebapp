import React from "react";
import { NavLink } from "react-router-dom";
import { url } from "../../../assets/pic";
import "../../Movie/components/style/Detail.css";
const Explain = (props) => {
  const { api, id } = props.data;
  return (
    <>
      {api == undefined || !api.id ? (
        <h1 className="ground">No Details Available at this time</h1>
      ) : (
        api && (
          <>
            <div
              className="details background"
              style={{ backgroundImage: `url(${url}/${api.poster_path})` }}
        >
            </div>
            <div className="det">
              <div className="mleft">
                {api.backdrop_path ? (
                  <img
                    src={`${url}${api.backdrop_path}`}
                    alt="image1"
                    className="img"
                  />
                ) : (
                  <img
                    src={`${url}${api.poster_path}`}
                    alt="img1"
                    className="img"
                  />
                )}
              </div>
              <div className="mright">
                <div className="one">
                  <h1 className="title font">{api.original_title}</h1>
                  {api.adult ? (
                    <h1 className="o">18+</h1>
                  ) : api.id ? (
                    <h1 className="o">12+</h1>
                  ) : null}
                </div>
                <h3 className="line">{api.tagline}</h3>
                {api.genres
                  ? api.genres
                      .slice(0, 2)
                      .map((elem) => <h5 className="h10">{elem.name},</h5>)
                  : null}
                <p className="font1">{api.overview.substring(0, 155)}</p>
                <NavLink to={`/watch/${id}`}>
                  <button className="btn">Watch Trailer</button>
                </NavLink>
                <h2 className="go font3">
                  To Get Further Details ,Visit Movie Website
                  <br />
                  <a href={api.homepage} className="tag">
                    {api.title}
                  </a>
                </h2>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default Explain;
