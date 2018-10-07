import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faMedium, faLinkedin, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../scss/styles.scss';

export default class SocialIcons extends React.Component {
    render() {
        var links = this.props.links;
        return (
            <Row className='social'>
                <Col xs>
                    <a href={links.facebook} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon className='icon' icon={faFacebook} size='3x' /></a>
                </Col>
                <Col xs>
                    <a href={links.instagram} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon className='icon' icon={faInstagram} size='3x' /></a>
                </Col>
                <Col xs>
                    <a href={links.twitter} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon className='icon' icon={faTwitter} size='3x' /></a>
                </Col>
                <Col xs>
                    <a href={links.medium} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon className='icon' icon={faMedium} size='3x' /></a>
                </Col>
                <Col xs>
                    <a href={links.linkedin} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon className='icon' icon={faLinkedin} size='3x' /></a>
                </Col>
                <Col xs>
                    <a href={links.spotify} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon className='icon' icon={faSpotify} size='3x' /></a>
                </Col>
                <Col xs>
                    <a href={links.github} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon className='icon' icon={faGithub} size='3x' /></a>
                </Col>
                <Col xs>
                    <a href={links.email}><FontAwesomeIcon className='icon' icon={faEnvelope} size='3x' /></a>
                </Col>
            </Row>
        );
    }
}
