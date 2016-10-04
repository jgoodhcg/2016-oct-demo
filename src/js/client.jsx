require("./../sass/app.scss");

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/layout.jsx";

var metaTag=document.createElement('meta');
metaTag.name = "viewport";
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
document.getElementsByTagName('head')[0].appendChild(metaTag);

let app_container = document.createElement("div");
app_container.setAttribute("id", "app");
document.body.appendChild(app_container);

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
        </Route>
    </Router>, app);

