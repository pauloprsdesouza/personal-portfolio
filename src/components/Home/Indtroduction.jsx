import React from 'react';

function Introduction() {
    return (
        <div className="card mb-2 card-shadow border-0">
            <div className="card-body">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">
                        <a className="btn btn-outline-primary" href="https://personal-portfolio-files.s3.amazonaws.com/img/profile-contact.vcf" download="contact.vcf">Save Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;