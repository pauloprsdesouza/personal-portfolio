import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Blog from './components/Blog/Blog';
import Post from './components/Blog/Post';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Post />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
