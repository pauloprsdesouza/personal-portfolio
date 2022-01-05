import React from 'react';
import SendEmail from './SendEmail';

const Contact = function () {
    return (
        <div className="card background-contact shadow">
            <div className="card-body">
                <div className="row justify-content-center pt-lg-5 px-lg-5">
                    <div className="col-lg-7">
                        <h1 className="card-title background-contact-title text-white">Where do we start</h1>
                        <h4 className="lead card-subtitle text-white mb-4">
                            Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals.
                        </h4>
                        <SendEmail />
                    </div>
                    <div className="col-lg-3 text-lg-end text-center">
                        <img src="https://personal-portfolio-files.s3.amazonaws.com/img/rocket-contact.png" className="image-fluid img-rocket-contact align-middle" width="130" alt="Rocket Contact"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;