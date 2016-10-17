import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory } from "react-router";

require( "./../clicky.js");

export default class Index extends React.Component {
    constructor() {
        super();

}
    componentDidMount(){
        window.bannerModule();
    }

    render() {
        return (
            <div id="clicky-container">
                <div id="banner"></div>
                <div id="clicky-controls"></div>
            </div>
        );
    }
}
