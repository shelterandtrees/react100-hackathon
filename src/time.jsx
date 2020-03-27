import React, { Component} from 'react';

class Time extends Component {

    render () {
        return (
            <div>
                <div className="time-container">
                    <h2>Current Time:</h2>
                    <h3 className="time">{this.props.time}</h3>
                </div>
            </div>
        )
    }
}

export default Time;