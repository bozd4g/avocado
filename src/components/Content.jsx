import React from 'react';
import '../scss/styles.scss';

export default class Content extends React.Component {
    render() {
        var links = this.props.links;

        return (
            <div className='about'>
                <h1 className='bigTitle'>it's me.</h1>
                <div className='information'>
                    <h2 className='first'>hey, keep calm!</h2>
                    <h2 className='second'>It's me.</h2>
                    <p>As you said, I'm Furkan.</p>
                    <p>If I have to introduce myself; I’m designing as hobby, coding as lovely
                        and sometimes writing something at somewhere like
                        <b><a href={links.twitter} rel='noopener noreferrer' target='_blank'> twitter</a></b>, 
                        <b><a href={links.medium} rel='noopener noreferrer' target='_blank'> medium</a></b> and
                        <b><a href={links.github} rel='noopener noreferrer' target='_blank'> github</a></b>.</p>
                </div>
            </div>
        )
    }
}