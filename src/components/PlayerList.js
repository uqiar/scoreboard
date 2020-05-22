import React from 'react'
import { Consumer } from './Context'
import Player from './Player'

const PlayerList = () => {

    return (
        <Consumer>
            {
                ({players,actions}) => (
                    <React.Fragment>
                        {players.map((player, index) =>
                            <Player
                                index={index}
                                isHighScore={actions.highScore === player.score}
                            />
                        )}
                    </React.Fragment>
                )
            }
        </Consumer>
    )
}
export default PlayerList