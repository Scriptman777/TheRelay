import React from "react"
import ReactDOM from "react-dom";
import App from "./App"
import Footer from "./Footer"
import './index.css'

// Render the app inside of the root div
ReactDOM.render([<App key="content" />, <Footer key="footer" />], document.getElementById("root"))