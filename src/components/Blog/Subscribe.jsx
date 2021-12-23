import React from 'react';
import { useState } from 'react/cjs/react.development';
import { api } from '../../api/API';
import Modal from '../Modal/Modal';
import "./style.css"

const Subscribe = function () {
    const formSubscribe = React.createRef();
    const [isFormValid, setIsFormValid] = useState(false);
    const [email, setEmail] = useState("");
    const [subscribing, setSubscribing] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function validate(event) {
        event.preventDefault();
        setSubscribing(true);

        window.grecaptcha.ready(function () {
            window.grecaptcha.execute('6LfYpbodAAAAAL2tw6lzhwgIueB15G8e3hx6N7RF', { action: 'submit' }).then(function (token) {
                toSubscribe();
            });
        });
    }

    function toSubscribe() {
        api.post("/subscribers", {
            email
        }).then((response) => {
            setEmail("");
            setShowModal(true);
        }).catch((error) => {

        }).finally(() => {
            setSubscribing(false);
        });
    }

    function validateForm() {
        setIsFormValid(formSubscribe.current.checkValidity());
    }

    function textSubscribing() {
        return subscribing ? "Subscribing..." : "Subscribe";
    }

    return (
        <>
            <form
                ref={formSubscribe}
                noValidate
                onSubmit={validate}
                className={`needs-validation ${isFormValid? "was-validated" : ""}`}
                onChange={validateForm}>
                <div className="card card-education-teste">
                    <div className="card-body">
                        <h4 className="card-title text-white">Subscribe to receive hints and articles published weekly</h4>
                        <h6 className="card-subtitle text-white mb-3">Don't worry, I don't like spam too</h6>
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="email"
                                required
                                value={email}
                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} />
                            <button
                                type="submit"
                                className="btn btn-outline-light"
                                disabled={!isFormValid}>
                                {textSubscribing()}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <Modal title="Congratulations" content="Thanks for subscribing!" show={showModal} close={setShowModal} />
        </>
    )
}

export default Subscribe;