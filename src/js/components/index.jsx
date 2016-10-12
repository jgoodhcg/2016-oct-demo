import React from "react";
import InlineSVG from 'svg-inline-react';

export default class Index extends React.Component {
    constructor() {
        super();
    }

    collapseClick(e){
        let title_card = document.getElementById("title"),
            collapse_btn = document.getElementById("title-collapse-btn");

        // TODO refactor collapse or use jquery toggle
        if(collapse_btn.className.includes("collapsed")){
            collapse_btn.className = collapse_btn.className.replace("collapsed", "");
        }else{
            collapse_btn.className = collapse_btn.className.trim();
            collapse_btn.className += " collapsed";
        }

        if(title_card.className.includes("collapsed")){
            title_card.className = title_card.className.replace("collapsed", "");
            if(!title_card.className.includes("expanded")){
                title_card.className = title_card.className.trim();
                title_card.className += " expanded";
            }
        }else if (title_card.className.includes("expanded")){
            title_card.className = title_card.className.replace("expanded", "");
            if(!title_card.className.includes("collapsed")){
                title_card.className = title_card.className.trim();
                title_card.className += " collapsed";
            }
        }
    }

    render() {
        return (
            <div id="title" class="card card-1 expanded">
                <div id="portrait">
                    <InlineSVG src={require("./../../resources/self-portrait.svg")}/>
                </div>
                <div id="info" >
                    <p>
                        <span id="tagline" >tagline here, make it of a little length! </span>
                        <span id="bio" >
                            this is where I would put a bio IF I HAD ONE! But really this should be a couple of lines long maybe even explaining this project and my life goals. More importantly there needs to be a clicky button because if you can't click it nobody will read it and they probably still won't read it if they can click it.
                       </span>
                    </p>
                </div>
                <div><input type="button" class="card-1 card-1-hover" value="experience"></input></div>
                <div id="title-collapse-btn" class="collapse-btn-container">
                    <div class="collapse-btn" onClick={this.collapseClick}>
                        <InlineSVG src={require("./../../resources/collapse.svg")}/>
                    </div>
                </div>
            </div>
        );
    }
}
