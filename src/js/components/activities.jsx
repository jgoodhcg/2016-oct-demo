import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

import Activity from "./activity.jsx";

export default class Activities extends React.Component {
    constructor() {
        super();

        this.state = {
            activities: [
                {
                    id: "clicky", resource: "clicky", name: "clicky",
                    category: "game", route: "/clicky", soon: false
                },
                {
                    id: "timesheets", resource: "timesheets", name: "timesheets",
                    category: "data", route: "/timesheets", soon: false,
                },
                {
                    id: "calories", resource: "calories", name: "calories",
                    category: "data", route: "/", soon: true,
                },
                {
                    id: "fitness", resource: "fitness", name: "fitness",
                    category: "data", route: "/", soon: true,
                },
                {
                    id: "fed", resource: "government", name: "fed api",
                    category: "data", route: "/", soon: true,
                },
                {
                    id: "timetracker", resource: "timetracking", name: "timetracker",
                    category: "app", route: "/timetracker", soon: false,
                },
            ]};
    }

    expansion(e){
        this.setState(Object.assign(
            this.state, {expanded: e.target.getAttribute("data-activity")}));
        console.log(this.state);
    }

    render(){
        return (
            <div id="activities" class="card card-1" >
                <div class="row">
                    {this.state.activities.map((activity, i, activities) => {
                         return (
                             <Activity id={activity.id}
                                       classes={activity.category +" activity card card-1 col-6-sm col-2"}
                                       key={i}
                                       soon={activity.soon}
                                       route={activity.route}
                                       resource={activity.resource}
                                       name={activity.name}>
                             </Activity>
                         );
                     })}
                </div>
            </div>
        );
    }
}

