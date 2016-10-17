import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

export default class Skill extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <svg class="skill" width="100%" height="100%" viewBox="0 0 100 12">
                <rect x="0"  y="0" width="16" height="10" rx="4" ry="4"/>
                <rect x="21" y="0" width="16" height="10" rx="4" ry="4"/>
                <rect x="42" y="0" width="16" height="10" rx="4" ry="4"/>
                <rect x="63" y="0" width="16" height="10" rx="4" ry="4"/>
                <rect x="84" y="0" width="16" height="10" rx="4" ry="4"/>
            </svg>
        );
    }
}
