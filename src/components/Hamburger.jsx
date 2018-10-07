import React from 'react';
import '../scss/hamburger.scss';

export default class Hamburger extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClicked();
    }

    render() {
        return (
            <div className='wrapper-menu' onClick={this.onClick}>
                <div className='line-menu half start'></div>
                <div className='line-menu'></div>
                <div className='line-menu half end'></div>
            </div>
        );
    }
}