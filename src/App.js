import React from "react";
import axios from "axios";
import Quote from "./Quote";
import "./App.css";

class App extends React.Component {
  state = {
    quotes: [],
    randomQuote: null,
    author: ""
  };

  selectQuote = async () => {
    const res = await axios.get(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    );
    const data = await res.data;

    this.setState({
      quotes: data
    });
    const randomNumber = Math.floor(Math.random() * this.state.quotes.length);
    const randQuote = this.state.quotes[randomNumber];

    this.setState({
      randomQuote: randQuote.quote,
      author: randQuote.author
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="heading" style={{ marginTop: "3rem" }}>
          Random Quote Generator
        </h1>
        <button
          className="btn btn-primary btn-lg"
          style={{ marginTop: "2rem" }}
          onClick={this.selectQuote}
        >
          Click Me!
        </button>
        <Quote
          author={this.state.author}
          randomQuote={this.state.randomQuote}
        />
      </div>
    );
  }
}

export default App;
