import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Header from "./Header";

function MyApp() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default MyApp;

if (document.getElementById("app")) {
    ReactDOM.render(<MyApp />, document.getElementById("app"));
}
