import React, { useState } from 'react';
import "./style.css"

function GoToTopButton() {
    const [showButton, setShowButton] = useState(false);

    window.onscroll = () => { scrollFunction() };

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
                <button className="btn btn-primary float-button-go-to-top" onClick={topFunction}>Para o Topo&nbsp;<i className="fas fa-chevron-up"></i></button>
            )
        }
    }

    return (
        <div>
            {createButton()}
        </div>
    )
}

export default GoToTopButton;