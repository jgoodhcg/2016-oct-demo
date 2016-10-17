import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

import Activities from "./activities.jsx";

export default class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            collapsed: false,
            linking: false
        };
    }

    collapseClick(e){
        this.setState(Object.assign(this.state, {collapsed: !this.state.collapsed}));
    }

    linkExperience(){
        hashHistory.push('/experience');
    }

    render() {
        return (
            <div>
                <div id="title-container" >
                    <div id="title" class={"card card-1 " + (this.state.collapsed ? "collapsed" : "expanded")}>
                        <div id="portrait" >
                            <InlineSVG src={require("./../../resources/self-portrait.svg")}/>
                        </div>
                        <div id="info" >
                            <p id="bio" >
                                this is where I would put a bio IF I HAD ONE! But really this should be a couple of lines long maybe even explaining this project and my life goals. More importantly there needs to be a clicky button because if you can't click it nobody will read it and they probably still won't read it if they can click it.
                            </p>
                        </div>
                        <div id="experience-btn"
                             class="card-1 card-1-hover link-btn">
                            <Link to="/experience">experience</Link>
                        </div>
                        <div id="title-collapse-btn"
                             class={"collapse-btn-container " + (this.state.collapsed ? "collapsed" : "")}>
                            <div class="collapse-btn" onClick={this.collapseClick.bind(this)}>
                                <InlineSVG src={require("./../../resources/collapse.svg")}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="activities-container">
                    <Activities/>
                </div>
                <div id="footer">
                    <p>Relevant as of Oct 2016</p>
                </div>
            </div>
        );
    }
}
