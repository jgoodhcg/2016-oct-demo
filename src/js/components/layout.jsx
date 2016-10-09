import React from "react";
import InlineSVG from 'svg-inline-react';

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    hamburgerClick(e){
        // shitty method for toggling expanded/collapsed classes
        // TODO refactor or use jquery
        let links = document.getElementById("links");
        if(links.className.includes("collapsed")){
            links.className = links.className.replace("collapsed", "");
            if(!links.className.includes("expanded ")){
                links.className += " expanded ";
            }
        }else if(links.className.includes("expanded ")){
            links.className = links.className.replace("expanded ", "");
            if(!links.className.includes("collapsed")){
                links.className += " collapsed";
            }
        }
    }

    render() {
        return (
            <div id="app-container">
                <div id="top-bar" class="card-2">
                    <div id="name">
                        <div>Justin Good</div>
                    </div>
                    <div id="links" class="collapsed">
                        <div id="hamburger" onClick={this.hamburgerClick}>
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
