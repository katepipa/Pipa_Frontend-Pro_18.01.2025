import "./App.css";
import { Component } from "react";
import List from "./components/List";
import ResultsButton from "./components/ResultsButton";
import SmileCard from "./components/SmileCard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: [],
      winner: null,
    };

    this.voteForEmoji = this.voteForEmoji.bind(this);
    this.findWinner = this.findWinner.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/emojis")
      .then((res) => res.json())
      .then((data) => this.setState({ emojis: data }));
  }

  voteForEmoji(id) {
    fetch(`http://localhost:3000/vote/${id}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => this.setState({ emojis: data }));
  }

  findWinner() {
    const winner = this.state.emojis.reduce((max, emoji) =>
      emoji.votes > max.votes ? emoji : max
    );

    this.setState({ winner });
  }

  render() {
    return (
      <main className="container mt-3">
        <div className="d-flex justify-content-center">
          <List emojis={this.state.emojis} onVote={this.voteForEmoji} />
        </div>
        <ResultsButton onShow={this.findWinner} />
        {this.state.winner && <SmileCard emoji={this.state.winner} />}
      </main>
    );
  }
}

export default App;
