import React from "react";
import "./Feature.css";

function Feature() {
  return (
    <div className="feature">
      <div className="feature__post">
        <div className="post__details">
          <button>Featured</button>
          <h3>
            Amazon Is Offering 33,000 Tech Jobs Paying $150k, And You Should
            Take It
          </h3>
          <p>Most tech multi-millionaires were once coders working full-time</p>
        </div>
        <img
          src="https://miro.medium.com/fit/c/200/133/1*h4NOtmIQ-cVKYhLxA9K66w.jpeg"
          alt=""
        />
      </div>
      <div className="feature__author">
        <h4>Author</h4>
        <p>of the month</p>
        <img
          src="https://miro.medium.com/fit/c/100/100/1*k8zuaMA25MBA5GxIx5s6xQ.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Feature;
