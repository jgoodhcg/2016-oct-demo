import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

export default class Skill extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <svg width="100%" height="100%" viewBox="0 0 120 120">
                <rect x="0" y="0" width="120" height="120" rx="15" ry="15"/>
            </svg>
        );
    }
}
