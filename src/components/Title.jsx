import React from 'react';
import MediaQuery from 'react-responsive';
import g from '../global.js';
import '../scss/styles.scss';

export default class Title extends React.Component {
    render() {
        var mobileStyle = {
            fontSize: '2em',
            display: 'block',
            marginTop: '-10px'
        };
        return (
            <div>
                <MediaQuery query={g.maxWidth}>
                    <div className='title'>
                        <h1 className='inline name' style={mobileStyle}>furkan</h1>
                        <h1 className='inline surname' style={mobileStyle}>bozdag</h1>
                    </div>
                </MediaQuery>
                <MediaQuery query={g.minWidth}>
                    <div className='title'>
                        <h1 className='inline name'>furkan</h1>
                        <h1 className='inline surname'>bozdag</h1>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}