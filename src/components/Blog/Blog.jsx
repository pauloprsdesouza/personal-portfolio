import React, { useEffect, useState } from "react";
import PostCard from "./PostCard/PostCard"
import api from "../../api/API";
import Subscribe from "./Subscribe";
import HorizontalCardSkeleton from "../Templates/Skeleton/HorizontalCardSkeleton";
import NoItems from "../Templates/NoItems/NoItems";
import PostFilter from "./FilterPost/PostFilter";

const Blog = function () {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    search();
  }, []);

  function search(filterParams) {
    setLoading(true);

    api.get("/posts/published", { params: filterParams })
      .then((response) => {
        setPosts(response.data.posts);
      }).catch(() => {

      }).finally(() => {
        setLoading(false);
      });
  }

  function showContent() {
    return loading ?
      <HorizontalCardSkeleton /> : (
        posts.length === 0 ?
          <NoItems content="There are no published posts yet!" /> :
          <>
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />)
            )}
            <Subscribe />
          </>
      );
  }

  return (
    <div className="container mt-3">
      <div className="card card-education-teste mt-3 mb-3 shadow">
        <div className="card-body">
          <h1 className="card-title text-white">Blog</h1>
          <p className="card-text text-white">Here, you will find posts about many areas such as software development, productivity, etc.</p>
        </div>
      </div>
      <PostFilter search={search} />

      {showContent()}
    </div>
  );
};

export default Blog;
