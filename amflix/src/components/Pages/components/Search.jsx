import React, { useEffect, useState } from "react";
import "./style/Search.css";
import { img, url } from "../../../assets/pic";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchlist } from "../../../store/MovieSlice";
const Search = () => {
  const { q } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie.list);
  const [list, setList] = useState();
  useEffect(() => {
    dispatch(fetchlist(q));
  }, [q]);
  useEffect(() => {
    setList(data);
  }, [data]);
  return (
    <>
      <div className="box">
        {!list || list.length < 1
          ? "No Search Results Available"
          : list.map((curElem, index) => {
              return (
                <NavLink className="a" to={`/movie/${curElem.id}`} key={index}>
                  {curElem.poster_path ? (
                    <div
                      className="b backi"
                      style={{
                        backgroundImage: `url(${url}/${curElem.poster_path})`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="b backi"
                      style={{
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  )}
                </NavLink>
              );
            })}
      </div>
    </>
  );
};
export default Search;
