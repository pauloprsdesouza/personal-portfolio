import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { api } from '../../../api/API';
import FilterPostSkeleton from './FilterPostSkeleton';

const FilterPost = function ({ setSelectedCategory }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        api.get("/categories")
            .then((response) => {
                response.data.categories.unshift({ id: null, name: "All", selected: true })
                setCategories(response.data.categories);
            })
            .catch((erros) => {

            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    function selectCategory(category) {
        categories.forEach((item) => {
            if (category !== item) {
                item.selected = false;
            }
        });

        category.selected = !category.selected;
        setCategories([...categories]);
    }

    function showLoading() {
        return loading ?
            <FilterPostSkeleton /> :
            (
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className='mb-4'>Topics</h5>
                        {
                            categories.map((category) => (
                                <button key={category.id} className={`btn btn-sm me-2 ${category.selected ? "btn-primary" : " btn-secondary"}`} onClick={() => {
                                    setSelectedCategory(category);
                                    selectCategory(category);
                                }}>{category.name}</button>
                            ))
                        }
                    </div>
                </div>
            )

    }

    return (
        <>
            {showLoading()}
        </>
    )
}

export default FilterPost;