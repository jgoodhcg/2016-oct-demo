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
            <div id="index-container">
                <div id="title-container" >
                    <div id="title" class={"card card-1 " + (this.state.collapsed ? "collapsed" : "expanded")}>
                        <div id="portrait" >
                            <InlineSVG src={require("./../../resources/justin.svg")}/>
                        </div>
                        <div id="info" >
                            <p id="bio" >
                                My name is Justin and I like to make things. This site is one of those things. As of now this site is an experiment with React, Webpack, and SVG. It is a SPA with no back end, every asset is compiled with webpack, and all images are svg. Below is a link to my 'resume'. Below that is a catalog of some of my projects.
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
            </div>
        );
    }
}
