require("./../sass/simple-grid.scss");
require("./../sass/app.scss");

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/layout.jsx";

let app_container = document.createElement("div");
app_container.setAttribute("id", "app");
document.body.appendChild(app_container);

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
        </Route>
    </Router>, app);

