import React from "react";
import InlineSVG from 'svg-inline-react';
import { IndexLink, Link, browserHistory, hashHistory } from "react-router";

export default class Activity extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div id={this.props.id} class={this.props.classes}>
                {(this.props.soon ?
                  <span class="soon" data-activity={this.props.id}>coming soon</span>
                 :
                  <span></span>)
                }
                <Link to={this.props.route} >
                    <InlineSVG src={require(`./../../resources/${this.props.resource}.svg`)}/>
                    <p>{this.props.name}</p>
                </Link>
            </div>
        );
    }
}
