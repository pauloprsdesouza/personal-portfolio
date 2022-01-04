import React, { useEffect, useState } from 'react';
import api from '../../api/API';
import NoItems from '../Templates/NoItems/NoItems';
import HorizontalCardSkeleton from '../Templates/Skeleton/HorizontalCardSkeleton';
import PublicationCard from './PublicationCard';

const Publications = function () {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/publications")
            .then((response) => {
                setPublications(response.data.publications);
            }).catch((error) => {

            }).finally(() => {
                setLoading(false);
            });
    });

    function showLoading() {
        return loading ?
            <HorizontalCardSkeleton /> : (
                publications.length === 0 ?
                    <NoItems content="It was not possible to find publications for this search." /> :
                    publications.map((publication) => (
                        <PublicationCard key={publication.id} project={publication} />
                    ))
            )
    }

    return (
        <div className="container">
            <div className="card card-education-teste mt-3 mb-3 shadow">
                <div className="card-body">
                    <h1 className="card-title text-white">Publications</h1>
                    <p className="card-text text-white">Here, you will find my publications a long of the yars.</p>
                </div>
            </div>

            {showLoading()}
        </div>
    )
}

export default Publications;