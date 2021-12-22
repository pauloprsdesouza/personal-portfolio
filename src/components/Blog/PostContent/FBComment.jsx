import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";

const FBComment = function ({ id }) {
  const fbComment = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.FB !== undefined) {
      window.FB.XFBML.parse();
    }
  }, [id]);

  useEffect(() => {
    setLoading(false);
  }, [fbComment])

  return (
    <div className={`card border-0 ${loading? "teste-bla" : ""}`}>
      <div className="card-body">
        <div ref={fbComment} className="fb-comments" data-href={`http://paulosouza.me/blog/${id}`} data-width="100%" data-numposts="5" />
      </div>
    </div>
  );
};

export default FBComment;
