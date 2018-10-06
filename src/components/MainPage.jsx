import React from 'react';
import Title from './Title.jsx';
import Hamburger from './Hamburger.jsx';
import '../scss/styles.scss';

export default class Mainpage extends React.Component {
    render() {
        var mainStyle = {
            backgroundImage: `linear-gradient(45deg, ${'#dce35b'}, ${'#e100ff'})`
        };
        return (
            <div className='main' style={mainStyle}>
                <Title />
                <Hamburger />
            </div>
        );
    };
}