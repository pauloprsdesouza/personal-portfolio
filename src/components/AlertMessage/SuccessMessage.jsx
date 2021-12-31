import React from 'react';

const SuccessMessage = function ({ message, close }) {
    function clearMessage(event) {
        event.preventDefault();

        close(null);
    }

    return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            {message}
            <button type="button" className="btn-close" onClick={clearMessage}></button>
        </div>
    )
}

export default SuccessMessage;