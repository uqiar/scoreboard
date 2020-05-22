import React, { PureComponent } from 'react';
import Counter from './Counter'
import PropTypes from 'prop-types'
import Icon from './Icon';
import { Consumer } from './Context'
class Player extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }
  render() {
    const {
      index
    } = this.props
    return (
      <div className="player">
        <Consumer>
          {
            ({ actions, players }) => (

              <span className="player-name">
                <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
                <Icon isHighScore={this.props.isHighScore} />
                {players[index].name}
              </span>

            )
          }
        </Consumer>
        <Counter
          index={index}
        />
      </div>
    );
  }
}
export default Player;