import React, { Component } from 'react'

class AddPlayerForm extends Component {
    playerInput = React.createRef()

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value)
        e.currentTarget.reset();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input ref={this.playerInput} type="text" placeholder="Enter player's name" />
                <input type="submit" value="Add Player" />
            </form>
        )
    }
}

export default AddPlayerForm