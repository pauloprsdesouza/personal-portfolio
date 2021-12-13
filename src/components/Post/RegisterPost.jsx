import React from 'react';
import { useState } from 'react/cjs/react.development';
import PostContent from './PostContent';
import PostPreview from './PostPreview';


function RegisterPost() {
    const [content, setContent] = useState();

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-title mb-4"><h1>New Post</h1></div>
                    <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Post</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Preview</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <PostContent />
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <PostPreview postContent={content} />
                        </div>
                    </div>
                </div>
                <div className="card-footer text-end">
                    <button className="btn btn-primary">Save</button>
                </div>
            </div>
        </>
    )
}

export default RegisterPost;