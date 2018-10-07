import React from 'react';
import Title from './Title.jsx';
import Hamburger from './Hamburger.jsx';
import Image from './Image.jsx';
import '../scss/styles.scss';

export default class Mainpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStatus: false,
            popupDisplay: 0
        };

        this.onHamburgerClicked = this.onHamburgerClicked.bind(this);
    }

    onHamburgerClicked() {
        if (!this.state.toggleStatus) {
        }
        else {
        }

        this.setState({ 
            toggleStatus: !this.state.toggleStatus, 
            popupDisplay: this.state.popupDisplay === 1 ? 0 : 1
        });
        var menu = document.querySelector('.wrapper-menu');
        menu.classList.toggle('open');
    }

    render() {
        var mainStyle = {
            background: `linear-gradient(45deg, ${'#dce35b'}, ${'#e100ff'})`
        };

        return (
            <div className='main' style={mainStyle}>
                <Image />
                <Title />
                <Hamburger onClicked={this.onHamburgerClicked}/>

                <div className='popup' style={{opacity: this.state.popupDisplay}}>
                </div>
            </div>
        );
    };
}