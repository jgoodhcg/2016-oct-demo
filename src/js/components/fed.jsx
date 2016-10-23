import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

import Activity from "./activity.jsx";

export default class Fed extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="timetracker-container" class="container">
                <div class="card card-1 col-12">
                    <div class="row">
                        <div class="col-12">
                            <Activity id="fed"
                                      soon={true}
                                      route="/fed"
                                      resource="government"
                                      classes="data activity card card-1 col-6-sm col-4"
                                      name="fed api">
                            </Activity>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>I would like to use <a href="https://www.govtrack.us/developers/api">this api</a> to
                            build a an app that makes it easy to track your representation in congress and how they vote on issues you follow.</p>
                       </div>
                    </div>
               </div>
            </div>
        );
    }
}
