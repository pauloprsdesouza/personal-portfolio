import React, { useRef, useState } from 'react';
import api from '../../api/API';
import ModalDialogInfo from '../Templates/Modal/ModalDialogInfo';
import "./style.css"

const Subscribe = function () {
    const formSubscribe = useRef();
    const [isFormValid, setIsFormValid] = useState(false);
    const [email, setEmail] = useState("");
    const [subscribing, setSubscribing] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function validate(event) {
        event.preventDefault();
        setSubscribing(true);

        window.grecaptcha.ready(function () {
            window.grecaptcha.execute(process.env.REACT_APP_ID_RECAPTCHA, { action: 'submit' }).then(function (token) {
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
                className={`needs-validation ${isFormValid ? "was-validated" : ""}`}
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
            <ModalDialogInfo title="Congratulations" content="Thanks for subscribing!" show={showModal} close={setShowModal} />
        </>
    )
}

export default Subscribe;