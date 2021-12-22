import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/Admin/Post/CreatePost";
import ListPosts from "./components/Admin/Post/ListPosts";
import AppBar from "./components/AppBar/AppBar";
import Blog from "./components/Blog/Blog";
import Post from "./components/Blog/PostContent/Post";
import Footer from "./components/Footer/Footer";
import GoToTopButton from "./components/GoToTopButton/GoToTopButton";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = function () {
  return (
    <BrowserRouter>
      <AppBar />
      <div className="wrap-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/posts" >
            <Route path="" element={<ListPosts />} />
            <Route path="create" element={<CreatePost />} />
            <Route path=":id" element={<CreatePost />} />
          </Route>
        </Routes>
      </div>
      <Footer />
      <GoToTopButton />
    </BrowserRouter>
  );
};

export default App;
