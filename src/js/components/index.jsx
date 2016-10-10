import React from "react";
import InlineSVG from 'svg-inline-react';

export default class Index extends React.Component {
    constructor() {
        super();
    }

    collapseClick(e){
        let title_card = document.getElementById("title"),
            portrait = document.getElementById("portrait"),
            p_expanded_cont = document.getElementById("portrait-expanded-container"),
            p_collapsed_cont = document.getElementById("portrait-collapsed-container"),
            collapse_btn = document.getElementById("title-collapse-btn");

        if(title_card.className.includes("collapsed")){
            title_card.className = title_card.className.replace("collapsed", "");
            collapse_btn.className = collapse_btn.className.replace("collapsed", "");
            p_collapsed_cont.removeChild(portrait);
            p_expanded_cont.appendChild(portrait);
        }else{
            title_card.className += " collapsed";
            collapse_btn.className += " collapsed";
            p_expanded_cont.removeChild(portrait);
            p_collapsed_cont.appendChild(portrait);
        }
    }

    render() {
        return (
            <div id="title" class="card card-1">
                <div class="container expanded-only">
                    <div class="row">
                        <div id="portrait-expanded-container" class="col-12">
                            <div id="portrait">
                                <InlineSVG src={require("./../../resources/self-portrait.svg")}/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                        </div>
                    </div>
                </div>
                <div class="container collapsed-only">
                    <div class="row">
                        <div id="portrait-collapsed-container" class="col-4-sm col-2">
                        </div>
                        <div id="tagline" class="col-6-sm col-10">
                            <p>Making cool stuff...</p>
                        </div>
                    </div>
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
