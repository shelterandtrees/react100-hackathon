import React, {Component} from 'react';

class Meme extends Component {

    

    render () {
        return (
            <div>
            <div className='meme'>
                <img src={this.props.image} />
                <h2 className="top">{this.props.topText}</h2>
                <h2 className="bottom">{this.props.bottomText}</h2>
            </div>
            </div>
        )
    }
}

export default Meme;