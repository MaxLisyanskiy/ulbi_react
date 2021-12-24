import React from 'react';
import './styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/about" element={<About/>}/>
                <Route
                    path="*"
                    element={<Error/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

