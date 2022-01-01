import React, { useState } from "react";
import "./style.css";

const GoToTopButton = function () {
  const [showButton, setShowButton] = useState(false);

  window.onscroll = () => { scrollFunction(); };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function createButton() {
    if (showButton) {
      return (
        <button type="button" className="btn btn-primary float-button-go-to-top" onClick={topFunction}><i className="fas fa-chevron-up" /></button>
      );
    }
  }

  return (
    <div>
      {createButton()}
    </div>
  );
};

export default GoToTopButton;
