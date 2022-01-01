import React from 'react';

const DangerMessage = function ({ errors, close }) {
    function clearErrors(event) {
        event.preventDefault();

        close([]);
    }

    return (
        <>
            {errors.map((error, index) => (
                <div key={index} className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" onClick={clearErrors}></button>
                </div>
            ))}
        </>
    )
}

export default DangerMessage;