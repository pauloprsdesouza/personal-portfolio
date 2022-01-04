import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../api/API';

const CancelSubscribing = function () {
    const { id } = useParams()

    useEffect(() => {
        api.delete(`/subscribers/${id}`)
            .then((response) => {

            }).catch((errors) => {

            }).finally(() => {

            });
    }, [id]);

    return (
        <div className="container">
            <div className="card mt-3">
                <div className="card-body d-flex flex-column align-content-center align-items-center">
                    <h3 className="card-title mb-4">Cancel Subscription</h3>
                    <Link className="btn btn-primary mb-4" to="/">Go to About Page</Link>
                    <p className="card-text">Your subscription was cancelled!</p>
                </div>
            </div>
        </div>
    )
}

export default CancelSubscribing;