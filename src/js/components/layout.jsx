import React from "react";
import InlineSVG from 'svg-inline-react';

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    hamburgerClick(e){
        console.log(e);
    }

    render() {
        return (
            <div id="app-container">
                <div id="top-bar" class="card-2">
                    <div id="name">
                        <div>Justin Good</div>
                    </div>
                    <div id="links">
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
                        <div id="hamburger" onClick={this.hamburgerClick}>
                            <InlineSVG src={require("./../../resources/hamburger.svg")}/>
                        </div>
                    </div>
                </div>

                {this.props.children}

            </div>
        );

    }
}
