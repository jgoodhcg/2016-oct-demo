import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

import Activity from "./activity.jsx";

export default class Fitness extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="timetracker-container" class="container">
                <div class="card card-1 col-12">
                    <div class="row">
                        <div class="col-12">
                            <Activity id="fitness"
                                      soon={true}
                                      route="/fitness"
                                      resource="fitness"
                                      classes="app activity card card-1 col-6-sm col-4"
                                      name="fitness">
                            </Activity>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>Content Here</p>
                       </div>
                    </div>
               </div>
            </div>
        );
    }
}
