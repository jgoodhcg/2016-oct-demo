import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

export default class Activities extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div id="activities" class="card card-1" >
                <div class="row">
                    <div class="card card-1 col-6-sm col-4 game">
                        <Link to="/clicky" >
                            <InlineSVG src={require("./../../resources/clicky.svg")}/>
                            <p>clicky thing</p>
                        </Link>
                    </div>
                    <div class="card card-1 col-6-sm col-4 data">
                        <span class="soon">coming soon</span>
                        <Link to="/" >
                            <InlineSVG src={require("./../../resources/timesheets.svg")}/>
                            <p>timesheets</p>
                        </Link>
                    </div>
                    <div class="card card-1 col-6-sm col-4 data soon">content</div>
                    <div class="card card-1 col-6-sm col-4 data soon">content</div>
                    <div class="card card-1 col-6-sm col-4 software soon">content</div>
                    <div class="card card-1 col-6-sm col-4 software soon">content</div>
                    <div class="card card-1 col-6-sm col-4 software soon">content</div>
                </div>
            </div>
        );
    }
}

