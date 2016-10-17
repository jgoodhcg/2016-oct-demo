import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

export default class Skill extends React.Component {
    constructor() {
        super();
    }

    render() {
        let rects = [1,2,3,4,5],
            width = 14,
            pad = 4,
            stroke = 2;
        rects = rects.map((cv, i, rects) => {
            return (<rect class={(i > +this.props.score ? "empty" : "filled")}
                     x={2+(i*width)+pad} y="4"
                     width={width} height="6"
                     stroke-width={stroke}
                     rx="2" ry="2"/>);
        });
        console.log(rects);
        return(
            <svg class="skill" width="100%" height="100%" viewBox="0 0 100 16">
                {rects}
            </svg>
        );
    }
}
