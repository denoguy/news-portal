import React from "react";
import "./Subscribe.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="form">
        <h4>Subscribe to Newsletter</h4>
        <div className="subscribe__form">
          <input type="email" placeholder="Enter mail" />
          <MailOutlineIcon />
        </div>
      </div>
      <div className="subscribe__post">
        <img
          src="https://miro.medium.com/fit/c/100/100/0*Rq4B8rRHdoIYz1dY"
          alt=""
        />
        <div className="post__details">
          <div className="post__number">
            <VisibilityOutlinedIcon />
            <p>12,000</p>
          </div>
          <h3>State Management in React using the Context API and Hooks</h3>
        </div>
      </div>
      <div className="subscribe__post">
        <img
          src="https://miro.medium.com/fit/c/100/100/1*3HtZWZUPg21KNKLEaRQpzw.jpeg"
          alt=""
        />
        <div className="post__details">
          <div className="post__number">
            <VisibilityOutlinedIcon />
            <p>50,000</p>
          </div>
          <h3>You Don’t Need College Anymore, Says Google</h3>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
