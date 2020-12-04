import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <div className="contact">
                    <Link to="/contact">Contact us</Link>
                    {/* <a htmlFor="contact_us.html">Contact us</a> */}
                </div>
                <div className="container">
                    <h1 className="main-title">Are you bored?</h1>
                    <div className="popup-btn">
                        <div className="btn yes-btn">
                            <Link to="/yes">
                                <img src="./img/yes-btn.svg" alt="" />
                            </Link>
                            {/* <a htmlFor="yesselection.html">
                                <img src="./img/yes-btn.svg" alt="" />
                            </a> */}
                        </div>

                        <div className="btn no-btn">
                            <Link to="/no">
                                <img src="./img/no-btn.svg" alt="" />
                            </Link>
                            {/* <a href="noselection.html">
                                <img src="./img/no-btn.svg" alt="" />
                            </a> */}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
