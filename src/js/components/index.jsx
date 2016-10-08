import React from "react";
import InlineSVG from 'svg-inline-react';

export default class Index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="title" class="card card-1">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <InlineSVG id='portrait' src={require("./../../resources/self-portrait.svg")}/>
                        </div>
                    </div>
                </div>
            </div>
                );

    }
}
