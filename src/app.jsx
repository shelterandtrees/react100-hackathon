import React, {Component} from 'react';
import Axios from 'axios';
import './css/custom.scss';
import Meme from './meme.jsx';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                memes: [],
                image: 'https://media.makeameme.org/created/where-is-the-5bec29.jpg',
                top: '',
                bottom: '',
                topText: '',
                bottomText: ''
            };

            this.handleSubmit = this.handleSubmit.bind(this);
            this.topInput = this.topInput.bind(this);
            this.bottomInput = this.bottomInput.bind(this);
            //this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentDidMount(){
        Axios
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            this.setState({memes: memes})
            console.log(memes);
        })
        
    }

    topInput(event) {
        this.setState({ top : event.target.value })
    }
    bottomInput(event) {
        this.setState({ bottom : event.target.value })
    }

    handleSubmit(event) {
        console.log(this.state.memes.id)
        
        const randomNum = Math.floor((Math.random() * 100) + 1);
        console.log(randomNum);
        const memes = [...this.state.memes];
        const randomImage = memes[randomNum].url;
        console.log(randomImage);

        this.setState({ image: randomImage,
                        topText : this.state.top,
                        bottomText : this.state.bottom
                    });

        event.preventDefault()
    }


    render () {
        return (
            <div>
                <div className="container">
                    <h1>RANDOM MEME GENERATOR</h1>
                    <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Top Text" value={this.state.top} onChange={this.topInput}></input>
                        <input placeholder="Bottom Text" value={this.state.bottom} onChange={this.bottomInput}></input>
                        <button type='submit'>GENERATE DA MEME</button>
                    </form>
                </div>
                
                <Meme 
                topText={this.state.topText}
                bottomText={this.state.bottomText}
                image={this.state.image}
                memes={this.state.memes}
                />

                </div>
            </div>
        )
    }
}

export default App;