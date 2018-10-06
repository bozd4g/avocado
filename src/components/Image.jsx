import React from 'react';
import '../scss/styles.scss';

export default class Image extends React.Component {
    render() {
        return (
            <div className='image-area'>
                <div className='clip-mask'></div>
            </div>
        );
    }
}