import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Admin/Login/Login";
import CreatePaper from "./components/Admin/Papers/CreatePaper";
import ListPapers from "./components/Admin/Papers/ListPapers";
import CreatePost from "./components/Admin/Post/CreatePost";
import ListPosts from "./components/Admin/Post/ListPosts";
import CreateProject from "./components/Admin/Projects/CreateProject";
import ListProjects from "./components/Admin/Projects/ListProjects";
import AppBar from "./components/AppBar/AppBar";
import Blog from "./components/Blog/Blog";
import Post from "./components/Blog/PostContent/Post";
import Http404 from "./components/ErrorPage/Http404";
import Footer from "./components/Footer/Footer";
import GoToTopButton from "./components/GoToTopButton/GoToTopButton";
import Home from "./components/Home/Home";
import CallPaper from "./components/Papers/CallPaper";
import Projects from "./components/Projects/Projects";
import { isAuthenticated } from "./services/Auth";

const App = function () {
  function routesAdmin() {
    return isAuthenticated() ? (
      <Route path="/admin" >
        <Route path="posts/">
          <Route path="" element={<ListPosts />} />
          <Route path="create" element={<CreatePost />} />
          <Route path=":id" element={<CreatePost />} />
        </Route>
        <Route path="papers">
          <Route path="" element={<ListPapers />} />
          <Route path="create" element={<CreatePaper />} />
          <Route path=":id" element={<CreatePaper />} />
        </Route>
        <Route path="projects/">
          <Route path="" element={<ListProjects />} />
          <Route path="create" element={<CreateProject />} />
          <Route path=":id" element={<CreateProject />} />
        </Route>
      </Route>
    ) : "";
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
