import React from 'react';

const Course = function ({ courses }) {

    function sumCH() {
        var total = 0;
        courses.forEach((course) => {
            total += course.ch
        });

        return total;
    }

    return (
        <section className="mb-5">
            <h3 className="text-white section-title">courses.</h3>
            <ul class="list-group list-group-flush">
                {courses.map((course, index) => (
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
        </section>
    )
}

export default Course;