import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="app-container">
                <div id="top-bar" class="card-5">
                    <div id="name">
                        <div>Justin Good</div>
                    </div>
                    <div id="links">
                        <div id="twitter">twitter</div>
                        <div id="linkedin">linked in</div>
                        <div id="github">github</div>
                    </div>
                </div>

                {this.props.children}

            </div>
        );

    }
}
