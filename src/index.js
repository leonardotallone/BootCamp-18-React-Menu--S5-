import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom'
import App from "./App.jsx"


const app = <App />
const target = document.getElementById("root");

ReactDOM.render(app, target);
