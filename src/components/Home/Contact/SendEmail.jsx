import React from 'react';
import { useState } from 'react/cjs/react.development';
import { api } from '../../../api/API';
import Modal from '../../Modal/Modal';

const SendEmail = function () {
    const formContact = React.createRef();
    const [isFormValid, setIsFormValid] = useState(false);
    const [from, setFrom] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [sending, setSending] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function validate(event) {
        event.preventDefault();
        setSending(true);

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
        api.post("/contacts", {
            from,
            subject,
            content
        }).then((response) => {
            setSubject("");
            setFrom("");
            setContent("");
            setShowModal(true);
        }).catch(() => {

        }).finally(() => {
            setSending(false);
        });
    }

    function isSending() {
        return sending ? "Sending..." : "Send";
    }

    return (
        <>
            <form
                ref={formContact}
                onSubmit={validate}
                className={`needs-validation ${isFormValid ? "was-validated" : ""}`}
                onChange={validateForm}
                noValidate>
                <div className="mb-3">
                    <input
                        className="form-control"
                        value={from}
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
                        value={subject}
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
                        value={content}
                        required
                        rows="4"
                        placeholder="Hi Paulo, how are you doing? I would like to contact you for..."
                        onChange={(event) => {
                            setContent(event.target.value);
                        }} />
                </div>
                <button
                    className="btn btn-light"
                    type="submit"
                    disabled={!isFormValid || sending}>
                    <i className="far fa-paper-plane"></i>&nbsp;
                    {isSending()}
                </button>
            </form>
            <Modal title="Thanks for your contact" content="I'll contact you coming soon!" show={showModal} close={setShowModal} />
        </>
    )
}

export default SendEmail;