import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

const ModalDialogConfirm = function ({ title, content, show, close, confirm }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (show) {
            var modal = window.bootstrap.Modal.getOrCreateInstance(modalRef.current);
            modal.show();
        }
    }, [show])

    return (
        <div ref={modalRef} className="modal fade" id="modalDialogConfirm" aria-labelledby="modalDialogConfirm" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalDialogConfirm">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                close(false);
                            }}>
                            Close
                        </button>
                        <button
                            className="btn btn-primary"
                            type="button"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                confirm();
                            }}>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDialogConfirm;