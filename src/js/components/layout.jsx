import React from "react";
import InlineSVG from 'svg-inline-react';

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {collapsed: true};
    }

    hamburgerClick(e){
        this.setState({
           collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div id="app-container">
                <div id="top-bar" class="card-2">
                    <div id="name">
                        <div>Justin Good</div>
                    </div>
                    <div id="links" class={this.state.collapsed ? "collapsed" : "expanded"}>
                        <div id="hamburger" onClick={this.hamburgerClick.bind(this)}>
                            <InlineSVG src={require("./../../resources/hamburger.svg")}/>
                        </div>
                        <div id="gmail">
                            <InlineSVG src={require("./../../resources/gmail.svg")}/>
                        </div>
                        <div id="twitter">
                            <InlineSVG src={require("./../../resources/twitter.svg")}/>
                        </div>
                        <div id="linkedin">
                            <InlineSVG src={require("./../../resources/linked-in.svg")}/>
                        </div>
                        <div id="github">
                            <InlineSVG src={require("./../../resources/github.svg")}/>
                        </div>
                    </div>
                </div>

                {this.props.children}

            </div>
        );

    }
}
