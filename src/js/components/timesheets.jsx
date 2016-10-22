import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

export default class Timesheets extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="timesheets-container" class="container">
                <div id="timesheets" class="card card-1">
                    <div class="row">
                        <div class="col-12">
                            <p>This was the old thing</p>
                            <img src="/imgs/timesheet-old.png"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
