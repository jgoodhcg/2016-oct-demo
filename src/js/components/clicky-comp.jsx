import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

require( "./../clicky.js");

export default class Index extends React.Component {
    constructor() {
        super();

        this.state = {bannerModule : null};

}
    componentDidMount(){
        this.setState(
            Object.assign(
                this.state,
                {bannerModule: window.bannerModule()}));

        var banner = document.getElementById('banner'),
            bx, by, bstart, bend;
        // touch
        banner.addEventListener('touchstart', (e) => {
            bx = e.touches[0].clientX;
            by = e.touches[0].clientY;
            bstart = e.timeStamp;
        });
        banner.addEventListener('touchend', (e) => {
            bend = e.timeStamp;
            this.ripple(bx,by,bend - bstart);
        });
        // mouse
        banner.addEventListener('mousedown', (e) => {
            bx = e.clientX;
            by = e.clientY;
            bstart = e.timeStamp;
        });
        banner.addEventListener('mouseup', (e) => {
            bend = e.timeStamp;
            this.ripple(bx,by,bend - bstart);
        });

        window.onresize = (() => {
            this.state.bannerModule.reDraw();
        });
    }

    ripple(x,y,d){
        this.state.bannerModule.addRipple(x,y,d);
    }

    componentWillUnmount(){
        this.setState(
            Object.assign(
                this.state,
                {bannerModule: null}));
    }

    render() {
        return (
            <div id="clicky-container">
                <div id="banner"></div>
                <div id="clicky-controls" class="card card-3">
                    <p>
                        click anywhere to create a ring <br />
                        hold for faster rings <br />
                        built with pixi.js
                    </p>
                    <div 
                         class="card card-1 card-1-hover link-btn col-2">
                        <Link to="/">back</Link>
                    </div>
                </div>
            </div>
        );
    }
}
