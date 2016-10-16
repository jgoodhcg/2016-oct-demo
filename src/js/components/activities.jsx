import React from "react";
import InlineSVG from 'svg-inline-react';

export default class Activities extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div id="activities" class="card card-1 col-12-sm" >
                <div class="row">
                    <div class="card card-1 col-6-sm col-4 game">content</div>
                    <div class="card card-1 col-6-sm col-4 data soon">content</div>
                    <div class="card card-1 col-6-sm col-4 data soon">content</div>
                    <div class="card card-1 col-6-sm col-4 data soon">content</div>
                    <div class="card card-1 col-6-sm col-4 software soon">content</div>
                    <div class="card card-1 col-6-sm col-4 software soon">content</div>
                    <div class="card card-1 col-6-sm col-4 software soon">content</div>
                </div>
            </div>
        );
    }
}

