import React from 'react';
import '../scss/styles.scss';

export default class Popup extends React.Component {
    render() {
        var popupStyle = {
            opacity: this.props.popupDisplay, 
            visibility: this.props.popupDisplay === 0 ? 'hidden' : 'visible' 
        };
        return (
            <div className='popup' style={popupStyle}></div>
        );
    }
}