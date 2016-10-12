import React from "react";
import InlineSVG from 'svg-inline-react';

export default class Index extends React.Component {
    constructor() {
        super();
    }

    collapseClick(e){
        let title_card = document.getElementById("title"),
            title_card_parent = title_card.parentNode,
            collapse_btn = document.getElementById("title-collapse-btn");

        if(title_card.className.includes("collapsed")){
            title_card.className = title_card.className.replace("collapsed", "");
            collapse_btn.className = collapse_btn.className.replace("collapsed", "");
        }else{
            title_card.className += " collapsed";
            collapse_btn.className += " collapsed";
        }

        /* removing and appending clone "refreshes" the animations so they run again*/
        /* title_card.addEventListener("animationend", (title_card, title_card_parent) => {
         *     let title_card_new = title_card.cloneNode(true);
         *     title_card_parent.appendChild(title_card_new);
         *     title_card_parent.removeChild(title_card);
         * }, false);*/
    }

    render() {
        return (
            <div id="title" class="card card-1">
                <div id="portrait">
                    <InlineSVG src={require("./../../resources/self-portrait.svg")}/>
                </div>
                <div id="info" >
                    <p id="tagline" >tagline here!</p>
                    <p id="bio" >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
                        enim
                        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                        aliquid
                        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </p>
                </div>
                <div id="title-collapse-btn" class="collapse-btn-container">
                    <div class="collapse-btn" onClick={this.collapseClick}>
                        <InlineSVG src={require("./../../resources/collapse.svg")}/>
                    </div>
                </div>
            </div>
        );
    }
}
