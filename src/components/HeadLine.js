import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeadLine.css";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";

function HeadLine() {
  return (
    <div className="headLine">
      <div className="headLine__recent">
        <img
          src="https://miro.medium.com/fit/c/200/133/0*nZuRT2WLY2ykH_GL.jpg"
          alt=""
        />
        <div className="recent__details">
          <h5>Coding</h5>
          <h3>10 security tips for frontend developers</h3>
          <div className="recent__details__user">
            <Avatar src="https://miro.medium.com/fit/c/96/96/2*pAtzAXxOrEOAFiHBD4Hwhg.jpeg" />
            <h4>Konstantin Lebedev</h4>
          </div>
          <p>Jul 13 2019</p>
        </div>
      </div>
      <div className="headLine__calendar">
        <div className="calendar__day">
          <DateRangeOutlinedIcon />
          <div className="calendar__day-details">
            <h4>Tuesday Capsule</h4>
            <p className="update">Get update on fly</p>
            <p className="brief">
              Brief me <ArrowRightAltOutlinedIcon />
            </p>
          </div>
        </div>
        <div className="calendr__weather">
          <h4>Kathmandu, Nepal</h4>
          <div className="weather__details">
            <CloudOutlinedIcon />
            <div className="weather__range">
              <h3>28 c</h3>
              <p>Cloudy day chances of rain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadLine;
