import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav class="yes">
                <h1>Are you bored?</h1>
                <Link to="/">
                    <img src="img/Group 9.png" alt="blue" />
                    <img src="img/Group 10.png" alt="red" />
                </Link>
            </nav>
        </header>
    )
}

export default Header
