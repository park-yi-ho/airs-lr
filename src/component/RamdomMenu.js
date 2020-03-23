import React, { Component } from 'react';

class RandomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select_restaurant: ""
        }
    }
    Submit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreateMenu(this.state);

    }


    render() {
        return (
            <form onSubmit={this.Submit}>
                <button id="contents" onClick={this.props.onSelectMenu}></button>

            </form>
        );
    }
}

export default RandomMenu;