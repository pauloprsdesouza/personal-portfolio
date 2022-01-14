import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Admin/Login/Login";
import CreatePaper from "./components/Admin/Papers/CreatePaper";
import ListPapers from "./components/Admin/Papers/ListPapers";
import CreatePost from "./components/Admin/Post/CreatePost";
import ListPosts from "./components/Admin/Post/ListPosts";
import AppBar from "./components/Templates/AppBar/AppBar";
import Blog from "./components/Blog/Blog";
import Post from "./components/Blog/PostContent/Post";
import Http404 from "./components/ErrorPage/Http404";
import Footer from "./components/Templates/Footer/Footer";
import GoToTopButton from "./components/Templates/GoToTopButton/GoToTopButton";
import Home from "./components/Home/Home";
import CallPaper from "./components/Papers/CallPaper";
import Projects from "./components/Projects/Projects";
import { isAuthenticated } from "./services/Auth";
import CancelSubscribing from "./components/Blog/CancelSubscribing";
import CreatePublication from "./components/Admin/Publications/CreatePublication";
import ListPublications from "./components/Admin/Publications/ListPublications";
import Publications from "./components/Publications/Publications";

const App = function () {
  function routesAdmin() {
    return isAuthenticated() ? (
      <Route path="/admin" >
        <Route path="posts">
          <Route path="" element={<ListPosts />} />
          <Route path="create" element={<CreatePost />} />
          <Route path=":id" element={<CreatePost />} />
        </Route>
        <Route path="papers">
          <Route path="" element={<ListPapers />} />
          <Route path="create" element={<CreatePaper />} />
          <Route path=":id" element={<CreatePaper />} />
        </Route>
        <Route path="publications/">
          <Route path="" element={<ListPublications />} />
          <Route path="create" element={<CreatePublication />} />
          <Route path=":id" element={<CreatePublication />} />
        </Route>
      </Route>
    ) : null;
  }

  return (
    <BrowserRouter>
      <AppBar />
      <div className="wrap-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/papers" element={<CallPaper />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/publications" element={< Publications />} />
          <Route path="/blog/cancel/subscribing/:id" element={< CancelSubscribing />} />
          <Route path="/login" element={<Login />} />
          {routesAdmin()}
          <Route path="*" status="404" element={<Http404 />} />
        </Routes>
      </div>
      <Footer />
      <GoToTopButton />
    </BrowserRouter>
  );
};

export default App;
