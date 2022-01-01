import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../api/API';
import Loading from '../../Templates/Loading/Loading';
import ModalDialogConfirm from '../../Templates/Modal/ModalDialogConfirm';
import NoItems from '../../Templates/NoItems/NoItems';

const ListPapers = function () {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paperToDelete, setPaperToDelete] = useState({});
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        api.get("/papers")
            .then((response) => {
                setPapers(response.data.papers);
            })
            .catch((erros) => {
                navigate("/admin/login");
            })
            .finally(() => {
                setLoading(false);
            })
    }, [navigate]);

    function getType(type) {
        switch (type) {
            case "J":
                return <span className="badge bg-warning">Journal</span>

            case "C":
                return <span className="badge bg-secondary">Conference</span>

            default:
                break;
        }
    }

    function deletePaper() {
        const papersTemp = [...papers];

        papersTemp.forEach((item) => {
            if (paperToDelete.id === item.id) {
                item.deleting = !item.deleting;
            }
        });

        setPapers(papersTemp);

        api.delete(`/papers/${paperToDelete.id}`)
            .then((response) => {
                updatePaperByResponse(response.data);
            }).catch((erros) => {

            }).finally(() => {
                paperToDelete.deleting = false;
            });
    }

    function updatePaperByResponse(paperResponse) {
        const papersTemp = [...papers];

        papersTemp.forEach((paper) => {
            if (paperResponse.id === paper.id) {
                paper.status = paperResponse.status;
            }
        });

        setPapers(papersTemp);
    }

    function showLoadingOrNoItems() {
        return loading ?
            <Loading loading={loading} /> :
            papers.length === 0 ?
                <NoItems content="There are no published papers yet!" /> :
                null;
    }


    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <div className="title d-flex justify-content-between align-middle mb-4">
                        <h5>Registered Papers</h5>
                        <Link className="btn btn-primary" to="create">New Paper</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Deadline</th>
                                <th>Price</th>
                                <th>Qualis</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {papers.map((paper) => (
                                <tr key={paper.id}>
                                    <td>{paper.title}</td>
                                    <td>{getType(paper.type)}</td>
                                    <td>{paper.submissionDeadline}</td>
                                    <td>{paper.price}</td>
                                    <td>{paper.qualis}</td>
                                    <td>
                                        <Link className="btn btn-secondary btn-sm" to={paper.id}>Edit</Link>
                                        <button type="button" className="btn btn-danger btn-sm ms-2" onClick={(event) => {
                                            event.preventDefault();
                                            setPaperToDelete(paper);
                                            setShowModal(true);
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {showLoadingOrNoItems()}
                </div>
            </div>
            <ModalDialogConfirm
                title="Delete Paper"
                content={`Do you mean to delete the paper ${paperToDelete.title}`}
                show={showModal}
                close={setShowModal}
                confirm={deletePaper}
            />
        </div>
    )
}

export default ListPapers;