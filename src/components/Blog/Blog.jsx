import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import PostCardSkeleton from "./PostCard/PostCardSkeleton";
import PostCard from "./PostCard/PostCard"
import FilterPost from "./FilterPost/FilterPost";
import { api } from "../../api/API";
import Subscribe from "./Subscribe";

const Blog = function () {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    setLoading(true);

    api.get("/posts/published", { params: { categoryId: selectedCategory.id } })
      .then((response) => {
        setPosts(response.data.posts);
      }).catch(() => {

      }).finally(() => {
        setLoading(false);
      });
  }, [selectedCategory]);

  function showLoading() {
    return loading
      ?
      <PostCardSkeleton />
      : (
        <>
          {posts.map((post) => (<PostCard post={post} key={post.id} />))}
          <Subscribe />
        </>
      );
  }

  return (
    <div className="container mt-3">
      <FilterPost setSelectedCategory={setSelectedCategory} />

      {showLoading()}

    </div>
  );
};

export default Blog;
