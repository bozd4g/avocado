import React from 'react';
import '../scss/hamburger.scss';

export default class Hamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStatus: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (!this.state.toggleStatus) {
        }
        else {
        }

        this.setState({ toggleStatus: !this.state.toggleStatus });
        var menu = document.querySelector('.wrapper-menu');
        menu.classList.toggle('open');
    }

    render() {
        return (
            <div class="wrapper-menu" onClick={this.onClick}>
                <div class="line-menu half start"></div>
                <div class="line-menu"></div>
                <div class="line-menu half end"></div>
            </div>
        );
    }
}