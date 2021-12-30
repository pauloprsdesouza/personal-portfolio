import React from "react";
import "./style.css";

const HorizontalCardSkeleton = function () {
  return (
    <div className="post-card skeleton card border-0 mb-3">
      <div className="row gx-0">
        <div className="col-md-2 hide-text" />
        <div className="post-details col-md-10">
          <div className=" card-body">
            <div className="d-flex justify-content-between mb-3">
              <div className="hide-text hide-text-md">&nbsp;</div>
              <div className="hide-text hide-text-md">&nbsp;</div>
            </div>
            <div className="mb-3 hide-text hide-text-lg">&nbsp;</div>
            <div className="hide-text hide-text-lg">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardSkeleton;
