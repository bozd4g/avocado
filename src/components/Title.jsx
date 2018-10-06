import React from 'react';
import '../scss/styles.scss';

export default class Title extends React.Component {
    render() {
        return (
            <div className='title'>
                <h1 className='inline name'>furkan</h1>
                <h1 className='inline surname'>bozdag</h1>
            </div>
        );
    }
}