import React from "react";
import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/hi">HI</Link>
                <Link to="/about" className="right">ABOUT</Link>

            </nav>
            <Routes>
                <Route exact path="/" element={ <Home /> } errorElement={ <h1>This page is dead haha</h1> } />
                <Route path="/hi" element={<h1>hi hi</h1>} />
                <Route path="/about" element={ <About /> } />
                <Route element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App