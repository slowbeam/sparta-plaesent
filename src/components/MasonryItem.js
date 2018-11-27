import React from "react";

const MasonryItem = props => (
  <div className="masonry-item">
    <img className="masonry-img" alt="temp" src={props.url} />
    <div className="masonry-item-date">{props.date}</div>
    <div className="masonry-item-title">{props.title}</div>
    <div className="masonry-item-presented">
      Presented by&nbsp;
      <span className="presenter-text">LOREM IPSUM</span>
    </div>
  </div>
);

export default MasonryItem;
