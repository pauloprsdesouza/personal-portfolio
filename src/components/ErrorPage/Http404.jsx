import React from 'react';
import { Link } from 'react-router-dom';

const Http404 = function () {
    return (
        <div className="container mt-3">
            <div className="card mb-4">
                <div className="card-body d-flex flex-column align-content-center align-items-center">

                    <h1 className="card-title mb-4">Ops!</h1>
                    <h5 className="card-subtitle mb-3">404 - Page Not Found</h5>
                    <h6 className="mb-3">Sorry, an error has occured, Requested page not found!</h6>
                    <Link className="btn btn-primary" to="/">Go to About Page</Link>

                </div>
            </div>
        </div>
    )
}

export default Http404;