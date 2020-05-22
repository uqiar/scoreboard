import React, { Component } from 'react'
import { Consumer } from './Context'
class AddPlayerForm extends Component {
    playerInput = React.createRef()
    render() {
        return (
            <Consumer>
                {
                    ({ actions }) => {
                        const handleSubmit = (e) => {
                            e.preventDefault();
                            actions.addPlayer(this.playerInput.current.value)
                            e.currentTarget.reset();
                        }
                        return (
                            <form onSubmit={handleSubmit} >
                                <input ref={this.playerInput} type="text" placeholder="Enter player's name" />
                                <input type="submit" value="Add Player" />
                            </form>
                        )
                    }
                }
            </Consumer>

        )
    }
}

export default AddPlayerForm