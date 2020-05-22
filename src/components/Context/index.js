import React, { Component } from 'react'

const ScoreboardContext = React.createContext()

export class Provider extends Component {
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
                players: prevState.players.filter(p => p.id !== id)
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
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer,
                    highScore: this.getHighScore()
                }
            }}>
                {this.props.children}
            </ScoreboardContext.Provider>
        )
    }
}

export const Consumer = ScoreboardContext.Consumer;