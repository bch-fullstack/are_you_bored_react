import React, { Component } from 'react'
import { CHUCK_API } from '../../constants'

export default class Chuck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    handleClick = e => {
        fetch(CHUCK_API)
            .then(res => res.json())
            .then(data => {
                this.setState({ data })
            });
    }

    render() {
        return (
            <>
                <div class="Chuck">
                    <button id="jokeBtn" onClick={this.handleClick}>Click for a joke</button>
                    {
                        this.state.data ?
                        <p id="jokeText">
                            {this.state.data.value}
                        </p> :
                        ''
                    }
                    
                    <img src="./img/Chuck.png" alt="chuck" />
                </div>
            </>
        )
    }
}
