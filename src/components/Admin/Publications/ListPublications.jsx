import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { disable } from 'workbox-navigation-preload';
import api from '../../../api/API';
import Loading from '../../Templates/Loading/Loading';
import ModalDialogConfirm from '../../Templates/Modal/ModalDialogConfirm';
import NoItems from '../../Templates/NoItems/NoItems';

const ListPublications = function () {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [publicationToDelete, setPublicationToDelete] = useState({});
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        api.get("/publications")
            .then((response) => {
                setPublications(response.data.publications);
            })
            .catch((erros) => {
                navigate("/login");
            })
            .finally(() => {
                setLoading(false);
            })
    }, [navigate]);

    function getPublicationType(type) {
        switch (type) {
            case "C":
                return <span className="badge bg-warning">Conference</span>

            case "J":
                return <span className="badge bg-secondary">Journal</span>

            default:
                break;
        }
    }

    function deletePublication() {
        const publicationsTemp = [...publications];

        publicationsTemp.forEach((item) => {
            if (publicationToDelete.id === item.id) {
                item.deleting = !item.deleting;
            }
        });

        setPublications(publicationsTemp);

        api.delete(`/publications/${publicationToDelete.id}`)
            .then((response) => {
                var index = publicationsTemp.indexOf(publicationToDelete);
                publicationsTemp.splice(index, 1);

                setPublications(publicationsTemp);
            }).catch((erros) => {

            }).finally(() => {
                publicationToDelete.deleting = false;
            });
    }

    function showLoadingOrNoItems() {
        return loading ?
            <Loading loading={loading} /> :
            publications.length === 0 ?
                <NoItems content="There are no published projects yet!" /> :
                null;
    }

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <div className="title d-flex justify-content-between align-middle mb-4">
                        <h5>Registered Publications</h5>
                        <Link className="btn btn-primary" to="create">New Publication</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Year</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {publications.map((publication) => (
                                    <tr key={publication.id}>
                                        <td className="text-nowrap">{publication.title}</td>
                                        <td>{getPublicationType(publication.type)}</td>
                                        <td className="text-nowrap">{publication.year}</td>
                                        <td className="text-nowrap">
                                            <Link className="btn btn-secondary btn-sm" to={publication.id}>Edit</Link>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm ms-2"
                                                disabled={publication.deleting}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setPublicationToDelete(publication);
                                                    setShowModal(true);
                                                }}>
                                                {!publication.deleting ? "Delete" : "Deleting..."}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {showLoadingOrNoItems()}
                </div>
            </div>
            <ModalDialogConfirm
                title="Delete Publication"
                content={`Do you mean to delete the publication ${publicationToDelete.title}`}
                show={showModal}
                close={setShowModal}
                confirm={deletePublication}
            />
        </div>
    )
}

export default ListPublications;