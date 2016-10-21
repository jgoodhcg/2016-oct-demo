import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

export default class Activities extends React.Component {
    constructor() {
        super();

        this.state = {expanded: null};
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
                    <div class="card card-1 col-6-sm col-3 game">
                        <Link to="/clicky" >
                            <InlineSVG src={require("./../../resources/clicky.svg")}/>
                            <p>clicky thing</p>
                        </Link>
                    </div>
                    <div id="timesheets" class="card card-1 col-6-sm col-3 data"
                        onClick={this.expansion.bind(this)}>
                        <span class="soon" data-activity="timesheets" >coming soon</span>
                        <Link to="/" >
                            <InlineSVG src={require("./../../resources/timesheets.svg")}/>
                            <p>timesheets</p>
                        </Link>
                    </div>
                    <div id="calories" class="card card-1 col-6-sm col-3 data "
                        onClick={this.expansion.bind(this)}>
                        <span class="soon" data-activity="calories" >coming soon</span>
                        <Link to="/" >
                            <InlineSVG src={require("./../../resources/calories.svg")}/>
                            <p>calories</p>
                        </Link>
                    </div>
                    <div id="fitness" class="card card-1 col-6-sm col-3 data "
                        onClick={this.expansion.bind(this)}>
                        <span class="soon" data-activity="fitness" >coming soon</span>
                        <Link to="/" >
                            <InlineSVG src={require("./../../resources/fitness.svg")}/>
                            <p>fitness</p>
                        </Link>
                    </div>
                    <div id="fed" class="card card-1 col-6-sm col-3 data "
                        onClick={this.expansion.bind(this)}>
                        <span class="soon" data-activity="fed" >coming soon</span>
                        <Link to="/" >
                            <InlineSVG src={require("./../../resources/government.svg")}/>
                            <p>fed api</p>
                        </Link>
                    </div>
                    <div id="timetracker" class="card card-1 col-6-sm col-3 software "
                        onClick={this.expansion.bind(this)}>
                        <span class="soon" data-activity="timetracker" >coming soon</span>
                        <Link to="/" >
                            <InlineSVG src={require("./../../resources/timetracking.svg")}/>
                            <p>timetracker</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

