import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory } from "react-router";

import Experience from "./experience.jsx";

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
        browserHistory.push('/experience');
    }

    render() {
        return (
            <div id="title-container" >
                <div id="title" class={"card card-1 container " + (this.state.collapsed ? "collapsed" : "expanded")}>
                    <div id="portrait">
                        <InlineSVG src={require("./../../resources/self-portrait.svg")}/>
                    </div>
                    <div id="info" >
                        <p id="bio" >
                            this is where I would put a bio IF I HAD ONE! But really this should be a couple of lines long maybe even explaining this project and my life goals. More importantly there needs to be a clicky button because if you can't click it nobody will read it and they probably still won't read it if they can click it.
                        </p>
                    </div>
                    <div id="experience-btn"
                         class="card-1 card-1-hover"
                         onClick={this.linkExperience.bind(this)}>
                        <p>experience</p>
                    </div>
                    <div id="title-collapse-btn" class="collapse-btn-container">
                        <div class="collapse-btn" onClick={this.collapseClick.bind(this)}>
                            <InlineSVG src={require("./../../resources/collapse.svg")}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
