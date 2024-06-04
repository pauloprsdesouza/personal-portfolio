import React from "react";

const ContactSection: React.FC = () => {
    return (
        <div className="text-center my-5" id="contact">
            <span className="lead">Get in Touch</span>
            <h1 className="mb-5">Contact Me</h1>

            <div className="card w-25 ms-auto me-auto rounded-4">
                <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="d-flex m-2 align-items-center">
                            <i className="fa-solid fa-envelope fa-2x me-2"></i>
                            <h5><a href="mailto:paulo.prsdesouza@gmail.com" className="text-dark text-decoration-none">paulo.prsdesouza@gmail.com</a></h5>
                        </div>
                        <div className="d-flex m-2 align-items-center">
                            <i className="fa-brands fa-linkedin fa-2x me-2"></i>
                            <h5><a href="" target="_blank" className="text-dark text-decoration-none">LinkedIn</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;