import React from 'react';
import MediaQuery from 'react-responsive';
import g from '../global.js';
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
            <div>
                <MediaQuery query={g.maxWidth}>
                    <div className='wrapper-menu' onClick={this.onClick} style={{width: '40px', height: '40px'}}>
                        <div className='line-menu half start'></div>
                        <div className='line-menu'></div>
                        <div className='line-menu half end'></div>
                    </div>
                </MediaQuery>
                <MediaQuery query={g.minWidth}>
                    <div className='wrapper-menu' onClick={this.onClick}>
                        <div className='line-menu half start'></div>
                        <div className='line-menu'></div>
                        <div className='line-menu half end'></div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}