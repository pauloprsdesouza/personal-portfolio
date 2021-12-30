import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { api } from '../../api/API';
import HorizontalCardSkeleton from '../Skeleton/HorizontalCardSkeleton';
import PaperCard from './PaperCard';
import PaperFilter from './PaperFilter';

const CallPaper = function () {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        search({ title: "", submissionDeadline: "", qualis: "", type: "" });
    }, []);

    function search(filterParams) {
        setLoading(true);

        api.get("/papers",
            {
                params:
                {
                    title: filterParams.title,
                    submissionDeadline: filterParams.submissionDeadline,
                    qualis: filterParams.qualis,
                    type: filterParams.type
                }
            })
            .then((response) => {
                setPapers(response.data.papers);
            })
            .catch((erros) => {

            })
            .finally(() => {
                setLoading(false);
            })
    }

    function showLoading() {
        return loading ? <HorizontalCardSkeleton /> : (
            papers.map((paper) => (
                <PaperCard paper={paper} key={paper.id} />
            ))
        )
    }

    return (
        <div className="container">
            <div className="card card-education-teste mt-3 mb-3 shadow">
                <div className="card-body">
                    <h1 className="card-title">Recommender Systems</h1>
                    <h6 className="card-subtitle mb-3">Journals and Conferences</h6>
                    <p className="card-text">Here, you will find the most important journals and conferences on recommender systems area.</p>
                </div>
            </div>
            <PaperFilter search={search} />
            {showLoading()}
        </div>
    )
}

export default CallPaper;