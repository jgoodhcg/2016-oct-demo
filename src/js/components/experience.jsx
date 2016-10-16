import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory } from "react-router";

export default class Experience extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="experience" class="container">
                <div class="row" >
                    <div id="exp-skills" class="card card-1 col-12-sm">
                        <h2>preferred skills</h2>
                        <h3>languages</h3>
                        <p>javascript, clojure(script), bash, sass, sql</p>
                        <h3>frameworks/libraries</h3>
                        <p>react, reagent, reframe, d3, luminus</p>
                        <h3>platforms/tools</h3>
                        <p>node, lein, webpack, docker, vagrant, git, nginx, postgres</p>
                    </div>
                </div>
                <div class="row" >
                    <div id="exp-employment" class="card card-1 col-12-sm">
                        <h2>employment</h2>
                        <h3>onestop feb 2016 – present</h3>
                        <p>maintaining legacy e-commerce site and supporting applications</p>
                        <p>developing greenfield e-commerce site and supporting applications</p>
                        <p>php, python, javascript, bash, sql, css, sass</p>
                        <p>zend, jquery</p>
                        <p>apache, node, git, mercurial, vagrant, postgres</p>

                        <h3>city of wyoming may 2015 – nov 2015</h3>
                        <p>developed internal crud application for public works department</p>
                        <p>php, javascript, sql, sass</p>
                        <p>jquery, moment</p>
                        <p>iis, git, microsoft sql server</p>
                    </div>
                </div>
                <div class="row" >
                    <div id="exp-education" class="card card-1 col-12-sm">
                        <h2>education</h2>
                        <p>gvsu b.s. computer science with minor anthropology 2012 – 2015</p>
                        <p>kcc general education and illustration 2011</p>
                        <p>grcc general education and film & video 2010 – 2011</p>
                    </div>
                    <div id="home-btn"
                         class="card-1 card-1-hover"
                         onClick={() => {browserHistory.push('/');}}>
                        <p>back</p>
                    </div>
                </div>
            </div>
        );
    }
}
