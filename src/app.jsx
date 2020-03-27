import React, {Component} from 'react';
import Axios from 'axios';
import './css/custom.scss';
import Meme from './meme.jsx';
import Time from './time';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                memes: [],
                image: 'https://media.makeameme.org/created/where-is-the-5bec29.jpg',
                top: '',
                bottom: '',
                topText: '',
                bottomText: '',
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
            this.setState({ memes : memes })
            //console.log(memes);
        })
        const axios = require("axios");

        axios({
            "method":"GET",
            "url":"https://world-clock.p.rapidapi.com/json/pst/now",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"world-clock.p.rapidapi.com",
            "x-rapidapi-key":"935dfb2c40msh9bf5ae7b82eb586p1bc3f9jsn2f8a40aa14e9"
            }
            })
            .then(response => {
            console.log(response.data);
            const { currentDateTime } = response.data
            this.setState({ time : currentDateTime })
            })
    }

    topInput(event) {
        this.setState({ top : event.target.value })
    }
    bottomInput(event) {
        this.setState({ bottom : event.target.value })
    }

    handleSubmit(event) {
        const randomNum = Math.floor((Math.random() * 100) + 1);
        const memes = [...this.state.memes];
        const randomImage = memes[randomNum].url;

        this.setState({ image: randomImage,
                        topText : this.state.top,
                        bottomText : this.state.bottom
                    });

        event.preventDefault()
    }


    render () {
        return (
            <div>

                <Time
                time={this.state.time}
                />

                <div className="container">
                    <h1>RANDOM MEME GENERATOR</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Top Text" value={this.state.top} onChange={this.topInput}></input>
                        <input placeholder="Bottom Text" value={this.state.bottom} onChange={this.bottomInput}></input>
                        <button type='submit'>GENERATE DA MEME</button>
                    </form>
                
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