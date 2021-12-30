import React from "react";
import "./style.css"

const VerticalCardSkeleton = function () {
  return (
    <div className="post-card skeleton card">
        <div className="hide-text hide-text-lg card-img-top hide-text-img-top">&nbsp;</div>
      <div className="card-body"> 
        <div className="hide-text hide-text-lg mb-2">&nbsp;</div>
        <div className="hide-text hide-text-lg mb-2">&nbsp;</div>
        <div className="hide-text hide-text-lg mb-2">&nbsp;</div>
        <div className="hide-text hide-text-md">&nbsp;</div>
      </div>
    </div>
  );
};

export default VerticalCardSkeleton;
