import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

import Skill from "./skill.jsx";

export default class Experience extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="experience" class="container">
                <div class="row">
                    <div id="exp-skills" class="card card-1 col-12">
                        <h2>preferred skills</h2>
                        <h3>languages</h3>
                        <p>javascript, clojure(script), bash, sass, sql</p>
                        <h3>frameworks/libraries</h3>
                        <p>react, reagent, reframe, d3, luminus</p>
                        <h3>platforms/tools</h3>
                        <p>node, lein, webpack, docker, vagrant, git, nginx, postgres</p>
                    </div>
                </div>
                <div class="row">
                    <div class="card card-1 col-5">
                        <h2>Skill Ratings</h2>
                        <p>0 - don't know it at all, 5 - master</p>
                        <code> javascript, php </code>
                        <Skill score="4"></Skill>
                        <code> sass, sql </code>
                        <Skill score="3"></Skill>
                        <code> clojure(script), bash, python </code>
                        <Skill score="2"></Skill>
                        <hr/>
                        <code>d3</code>
                        <Skill score="4"></Skill>
                        <code>react, reagent, reframe, luminus</code>
                        <Skill score="3"></Skill>
                        <hr/>
                        <code>git, svg</code>
                        <Skill score="4"></Skill>
                        <code>lein, webpack, vagrant, postgres</code>
                        <Skill score="3"></Skill>
                        <code>node, docker, nginx, apache</code>
                        <Skill score="2"></Skill>
                    </div>
                </div>
                <div class="row">
                    <div id="exp-employment" class="card card-1 col-12">
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
                <div class="row">
                    <div id="exp-education" class="card card-1 col-12">
                        <h2>education</h2>
                        <p>gvsu b.s. computer science with minor anthropology 2012 – 2015</p>
                        <p>kcc general education and illustration 2011</p>
                        <p>grcc general education and film & video 2010 – 2011</p>
                    </div>
                </div>
                <div class="row">
                    <div id="home-btn"
                         class="card card-1 card-1-hover link-btn col-2">
                        <Link to="/">back</Link>
                    </div>
                </div>
            </div>
        );
    }
}
