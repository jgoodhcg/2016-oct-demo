import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

import Activity from "./activity.jsx";

export default class Timesheets extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="timesheets-container" class="container">
                <div class="card card-1 col-12">
                    <div class="row">
                        <div class="col-12">
                            <Activity id="timesheets"
                                      soon={true}
                                      route="/timesheets"
                                      resource="timesheets"
                                      classes="data activity card card-1 col-6-sm col-4"
                                      name="timesheets">
                            </Activity>
                            <h2>old visualization</h2>
                            <p>Below is a screenshot of an old d3 visualization of some timesheet data I did.</p>
                            <img src="/imgs/timesheet-old.png"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>It used data from a simple <a
                                                              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi58sK3hO_PAhVhjlQKHfLTCtMQFgggMAA&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.rauscha.apps.timesheet%26hl%3Den&usg=AFQjCNFTyef197rG1hRBEqySa-JPzWA-HQ&sig2=YZ6e11oAaACMFuJVtf6Zig">timesheets app</a>
                                . The app exported exported into a csv that looks something like this.</p>
                            <div class="code">
                                <code>
                                    Number,Date,Start time,End time,Project,Description,Breaks,Breaks Description
                                    1,3/10/2015,12:26 PM,1:52 PM,cs375,Tries to get through this stupid lab,,
                                    2,3/10/2015,6:10 PM,7:17 PM,cs375,Getting super stuck on lab6,,
                                    3,3/12/2015,12:02 PM,12:50 PM,cs375,Lab 6,,
                                    4,3/12/2015,3:14 PM,4:10 PM,cs375,Finished lab6,,
                                    5,3/18/2015,2:39 PM,3:15 PM,cs375,Lab7,,
                                    6,3/19/2015,11:31 AM,1:00 PM,cs375,Lab7,,
                                </code>
                            </div>
                                <p>
                                    The source code for this old visualization can be found <a href="https://github.com/jgoodhcg/2016-feb-demo/blob/master/resources/public/js/timesheet.js">here</a>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
