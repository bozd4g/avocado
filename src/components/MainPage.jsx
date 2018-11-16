import React from 'react';
import Title from './Title.jsx';
import Hamburger from './Hamburger.jsx';
import Image from './Image.jsx';
import Popup from './Popup.jsx';
import Content from './Content.jsx';
import SocialIcons from './SocialIcons.jsx';
import MediaQuery from 'react-responsive';
import g from '../global.js';
import '../scss/styles.scss';

export default class MainPage extends React.Component {
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
            },
            colors: [
                { first: '#dce35b', second: '#e100ff' },
                { first: '#dce35b', second: '#45b649' },
                { first: '#7f00ff', second: '#e100ff' },
                { first: '#f12711', second: '#f5af19' },
                { first: '#FDC830', second: '#F37335' },
                { first: '#11998e', second: '#38ef7d' },
                { first: '#4568DC', second: '#B06AB3' },
            ]
        };

        this.onHamburgerClicked = this.onHamburgerClicked.bind(this);
    }

    onHamburgerClicked() {
        this.setState({
            toggleStatus: !this.state.toggleStatus,
            popupDisplay: this.state.popupDisplay === 1 ? 0 : 1
        });
        var menu = document.querySelector('.wrapper-menu');
        menu.classList.toggle('open');

        this.popup.initializePosts();
    }

    render() {
        var day = new Date().getDay();
        var mainStyle = {
            background: `linear-gradient(45deg, ${this.state.colors[day].first}, ${this.state.colors[day].second})`
        };

        return (
            <div className='main' style={mainStyle}>
                <MediaQuery query={g.minWidth}>
                    <Image />
                </MediaQuery>
                <Title />
                <Hamburger onClicked={this.onHamburgerClicked} />
                <Content links={this.state.links} />
                <SocialIcons links={this.state.links} />
                <Popup ref={e=>this.popup = e} popupDisplay={this.state.popupDisplay} />
            </div>
        );
    };
}