import React from 'react';
import "./style/Show.css";
import Moviepart1 from "./Moviepart1.jsx";
import Moviepart2 from "./Moviepart2.jsx";
import Moviepart3 from "./Moviepart3.jsx";
import Moviepart4 from "./Moviepart4.jsx";
const Movies = (props) => {
    const {datanow,datapo,datatop,datanup} = props.data; 
  return (
    <>
    <div className="movies">
      <Moviepart2 data={datanup} />
      <Moviepart3 data={datatop} />
      <Moviepart1 data={datapo} />
      <Moviepart4 data={datanow} />
    </div>
    </>
  )
}

export default Movies;