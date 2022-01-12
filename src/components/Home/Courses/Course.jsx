import React, { useState } from 'react';

const Course = function ({ courses }) {
    const [partialCourses, setPartialCourses] = useState(fewerCourses(4));

    function fewerCourses(total) {
        return [...courses.filter((course, index) => index < total)]
    }

    function showMoreCourses() {
        setPartialCourses([...courses]);
    }

    function showFewerCourses() {
        setPartialCourses(fewerCourses(4));
    }

    function buttonMoreOrLess() {
        var elements = courses.length - partialCourses.length;

        return (
            elements === 0 ?
                (
                    <button className="btn btn-outline-light" onClick={(event) => {
                        showFewerCourses()
                    }}>Show fewer courses</button>
                ) : (
                    <button className="btn btn-outline-light" onClick={(event) => {
                        showMoreCourses()
                    }}>Show {elements} more courses</button>)
        )
    }

    function sumCH() {
        var total = 0;
        courses.forEach((course) => {
            total += course.ch
        });

        return total;
    }

    return (
        <section className="mb-3">
            <h3 className="text-white section-title">courses.</h3>
            <ul class="list-group list-group-flush">
                {partialCourses.map((course, index) => (
                    <li key={index} class="list-group-item d-flex justify-content-between align-items-center card-education-teste text-white">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{course.name}</div>
                            <a className="link-secondary text-decoration-none" href={course.link}>See Credential</a>
                        </div>
                        <span class="badge bg-primary rounded-pill">{course.ch}h</span>
                    </li>
                ))}
                <li class="list-group-item d-flex justify-content-between align-items-center card-education-teste text-white">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Total Hours</div>
                    </div>
                    <span class="badge bg-primary rounded-pill">{sumCH()}h</span>
                </li>
            </ul>
            <div className="d-grid d-sm-block mt-2">
                {buttonMoreOrLess()}
            </div>
        </section>
    )
}

export default Course;