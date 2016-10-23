import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

import Activity from "./activity.jsx";

export default class TimeTracker extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="timetracker-container" class="container">
                <div class="card card-1 col-12">
                    <div class="row">
                        <div class="col-12">
                            <Activity id="timetracker"
                                      soon={true}
                                      route="/timetracker"
                                      resource="timetracking"
                                      classes="app activity card card-1 col-6-sm col-4"
                                      name="timetracker">
                            </Activity>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>
                                Currently under development. An app to visualize and track tasks in a novel way.<br/>
                                The stack is<br/>
                                <a href="https://github.com/Day8/re-frame">reframe,</a><br/>
                                <a href="http://reagent-project.github.io/">reagent,</a><br/>
                                <a href="https://github.com/clojure/clojurescript">clojurescript,</a><br/>
                                <a href="https://github.com/bhauman/lein-figwheel">figwheel,</a><br/>
                                <a href="http://www.luminusweb.net/">luminus,</a><br/>
                                <a href="http://clojure.org/">clojure,</a><br/>
                                <a href="https://www.postgresql.org/">postgres,</a><br/>
                                <a href="https://www.vagrantup.com/">vagrant,</a><br/>
                                <br/>
                                This is a current mock up.<br/>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <img src="/imgs/timetracker.png"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
