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
                                      classes="data activity card card-1 col-6-sm col-4"
                                      name="fitness">
                            </Activity>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h2>old visualization</h2>
                            <p>In 2015 I used google sheets to track all my excercise. I then used that data to make my first d3 visualization. Below is a screenshot of the spreadsheet and the d3 visualization. <a href="https://github.com/jgoodhcg/2016-feb-demo/blob/master/resources/public/js/excr.js">Here</a> is the source code</p>
                            <img src="/imgs/fitness-old-sheet.png"/>
                            <img src="/imgs/fitness-old.png"/>
                       </div>
                    </div>
                </div>
                <div class="card card-1 col-12">
                    <div class="row">
                        <div class="col-12">
                            <h2>new visualization</h2>
                            <p>I started keeping track of 2016 with a slightly revized spreadsheet. I'll port this to a database when I get around to making a decent data entry app.</p>
                            <img src="/imgs/fitness-sheet.png"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
