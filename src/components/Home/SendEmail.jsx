import React from 'react';
import { useState } from 'react/cjs/react.development';
import { api } from '../../api/API';

const SendEmail = function () {
    const formContact = React.createRef();
    const [isFormValid, setIsFormValid] = useState(false);
    const [from, setFrom] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [sending, setSending] = useState(false);

    function validate(event) {
        event.preventDefault();
        window.grecaptcha.ready(function () {
            window.grecaptcha.execute('6LfYpbodAAAAAL2tw6lzhwgIueB15G8e3hx6N7RF', { action: 'submit' }).then(function (token) {
                send();
            });
        });
    }

    function validateForm() {
        setIsFormValid(formContact.current.checkValidity());
    }

    function send() {
        setSending(true);

        api.post("/contacts", {
            from,
            subject,
            content
        }).then((response) => {

        }).catch(() => {

        }).finally(() => {
            setSending(false);
        });
    }

    function isSending() {
        return sending ? "Sending..." : "Send";
    }

    return (
        <form
            ref={formContact}
            onSubmit={validate}
            className="needs-validation was-validated"
            onChange={validateForm}
            noValidate>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="email"
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    placeholder="From"
                    onChange={(event) => {
                        setFrom(event.target.value);
                    }} />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    required
                    placeholder="Subject"
                    onChange={(event) => {
                        setSubject(event.target.value);
                    }} />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    required
                    rows="4"
                    placeholder="Hi Paulo, how are you doing? I would like to contact you for..."
                    onChange={(event) => {
                        setContent(event.target.value);
                    }} />
            </div>
            <button
                className="btn btn-light"
                disabled={!isFormValid || sending}>
                <i className="far fa-paper-plane"></i>
                {isSending()}
            </button>
        </form>
    )
}

export default SendEmail;