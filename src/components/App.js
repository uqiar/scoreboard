import React from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm'

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };
  //player id counter
  prevPlayerId = 4
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id != id)
      };
    });
  }
  handleScoreChange = (index, delta) => {
    this.setState({ score: this.state.players[index].score += delta })
  }
  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...this.state.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    })
  }
  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }
  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            id={player.id.toString()}
            score={player.score}
            index={index}
            key={player.id}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            isHighScore={highScore === player.score}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
