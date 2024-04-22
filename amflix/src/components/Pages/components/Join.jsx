import React from "react";
import "./style/Join.css";
import Footer from "../../Layout/components/Footer";
import { dt } from "../../../assets/Data";
const Join = () => {
  const title = "Choose the Plan that's right for you.";
  return (
    <><div className="join">
        <h1 className="plan">{title}</h1>
        <div className="boxes">
          {dt.map((curElem) => {
            return (
              <><div className="boxe1">
                  <span className="he1">{curElem.screen}</span>
                  <div className="pr">
                    <h3>Monthly price</h3>
                    <span className="price">{curElem.price} USD</span>
                  </div>
                  <span className="qua">
                    <h3 className="e2">Sound and Video Quality</h3>
                    <h2 className="e3">{curElem.quality}</h2>
                  </span>
                  <span className="inc">
                    <h3>Spatial audio</h3>
                    <h2>{curElem.audio}</h2>
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Join;
