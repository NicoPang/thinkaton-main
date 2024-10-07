import React from "react";
import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/posts">POSTS</Link>
                <Link to="/about" className="right">ABOUT</Link>

            </nav>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/posts" element={ <Posts /> } />
                <Route path="/posts/:postid" element={ <Post /> } />
                <Route path="/about" element={ <About /> } />
                <Route element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App