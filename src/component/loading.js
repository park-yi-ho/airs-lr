import React, { Component, Fragment } from 'react';

class Loading extends Component {
    render() {
        return (
            <div className="load-box">
                <div className="loading">Loading<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                <div className="load">
                    <div></div><div></div><div></div><div></div>
                </div>
            </div>
        );
    }
}

export default Loading;