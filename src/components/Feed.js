import React from "react";
import "./Feed.css";
import Header from "./Header";
import HeadLine from "./HeadLine";
import Subscribe from "./Subscribe";
import Feature from "./Feature";

function Feed() {
  return (
    <div className="feed">
      <Header />
      <HeadLine />
      <Subscribe />
      <Feature />
    </div>
  );
}

export default Feed;
