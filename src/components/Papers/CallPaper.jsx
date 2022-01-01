import React, { useEffect, useState } from 'react';
import api from '../../api/API';
import NoItems from '../Templates/NoItems/NoItems';
import HorizontalCardSkeleton from '../Templates/Skeleton/HorizontalCardSkeleton';
import PaperCard from './PaperCard';
import PaperFilter from './PaperFilter';

const CallPaper = function () {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        search({
            title: "",
            submissionDeadline: "",
            qualis: "",
            type: ""
        });
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

    function showContent() {
        return loading ?
            <HorizontalCardSkeleton /> : (
                papers.length === 0 ?
                    <NoItems content="There are no published papers yet!" /> :
                    papers.map((paper) => (
                        <PaperCard paper={paper} key={paper.id} />
                    ))
            )
    }

    return (
        <div className="container">
            <div className="card card-education-teste mt-3 mb-3 shadow">
                <div className="card-body">
                    <h1 className="card-title text-white">Recommender Systems</h1>
                    <h6 className="card-subtitle mb-3 text-white">Journals and Conferences</h6>
                    <p className="card-text text-white">Here, you will find the most important journals and conferences on recommender systems area.</p>
                </div>
            </div>
            <PaperFilter search={search} />
            {showContent()}
        </div>
    )
}

export default CallPaper;