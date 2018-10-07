import React from 'react';
import Title from './Title.jsx';
import Hamburger from './Hamburger.jsx';
import Image from './Image.jsx';
import Popup from './Popup.jsx';
import Content from './Content.jsx';
import SocialIcons from './SocialIcons.jsx';
import '../scss/styles.scss';

export default class Mainpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStatus: false,
            popupDisplay: 0,
            links: {
                facebook: 'https://facebook.com/bozd4g',
                instagram: 'https://instagram.com/bozd4g',
                twitter: 'https://twitter.com/bozd4g',
                linkedin: 'https://linkedin.com/in/bozd4g',
                medium: 'https://medium.com/@bozd4g',
                spotify: 'https://open.spotify.com/user/bozd4g',
                github: 'https://github.com/bozd4g',
                email: 'mailto:me@furkanbozdag.com'
            }
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
                <Hamburger onClicked={this.onHamburgerClicked} />
                <Content links={this.state.links} />
                <SocialIcons links={this.state.links} />
                <Popup popupDisplay={this.state.popupDisplay} />
            </div>
        );
    };
}