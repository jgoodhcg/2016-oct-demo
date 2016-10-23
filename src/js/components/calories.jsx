import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

import Activity from "./activity.jsx";

export default class Calories extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="timetracker-container" class="container">
                <div class="card card-1 col-12">
                    <div class="row">
                        <div class="col-12">
                            <Activity id="calories"
                                      soon={true}
                                      route="/calories"
                                      resource="calories"
                                      classes="data activity card card-1 col-6-sm col-4"
                                      name="calories">
                            </Activity>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>
                                I've been keeping a strict <a href="https://www.myfitnesspal.com/">
                                    myfitnesspal
                                </a> log for (as of 2016/10/23) 257 days. When it reaches 365
                                I'll <a href="http://quantifiedself.com/2015/01/access-export-myfitnesspal-data/">
                                    export the data
                                </a> and build some reports and visualizations.
                            </p>
                            <p>
                                Some thoughts for visualizations include a stacked chart of servings of food groups with easily recognizable symbols, and calories per day over time.
                            </p>
                       </div>
                    </div>
               </div>
            </div>
        );
    }
}
