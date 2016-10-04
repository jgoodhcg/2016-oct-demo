require("./../css/app.css");
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/layout";


let app_container = document.createElement("div");
app_container.setAttribute("id", "app");
document.body.appendChild(app_container);

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
        <Route path="archives(/:article)" name="archives" component={Archives}></Route>
        <Route path="settings" name="settings" component={Settings}></Route>
      </Route>
    </Router>, app);
