require("./../sass/app.scss");

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";

import Layout from "./components/layout.jsx";
import Index from "./components/index.jsx";
import Experience from "./components/experience.jsx";
import Clicky from "./components/clicky-comp.jsx";
import Timesheets from "./components/timesheets.jsx";
import Timetracker from "./components/timetracker.jsx";
import Calories from "./components/calories.jsx";
import Fitness from "./components/fitness.jsx";

var metaTag=document.createElement('meta');
metaTag.name = "viewport";
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
document.getElementsByTagName('head')[0].appendChild(metaTag);

let app_element = document.createElement("div");
app_element.setAttribute("id", "app");
document.body.appendChild(app_element);

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Index}></IndexRoute>
            <Route path="experience" name="experience" component={Experience}></Route>
            <Route path="clicky" name="clicky" component={Clicky}></Route>
            <Route path="timesheets" name="timesheets" component={Timesheets}></Route>
            <Route path="timetracker" name="timetracker" component={Timetracker}></Route>
            <Route path="calories" name="calories" component={Calories}></Route>
            <Route path="fitness" name="fitness" component={Fitness}></Route>
        </Route>
    </Router>, app);

