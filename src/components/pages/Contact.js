import React from 'react'
import Header from '../layout/Header'

class Contact extends React.Component {
    render() {
        return (
            <>
                <Header />
                <nav>
                    <div className="logo">
                        <a htmlFor="index.html"><span className="material-icons">home</span></a>
                    Are you bored?
                </div>
                    <div className="selection">
                        <div className="pill">
                            <div className="pill_left_blue"><a htmlFor="yesselection.html">Yes</a></div>
                            <div className="pill_right_blue"></div>
                            <div className="pill_left_red"><a htmlFor="noselection.html">No</a></div>
                            <div className="pill_right_red"></div>
                        </div>
                    </div>
                    <div className="empty">
                        <a htmlFor="index.html"><span className="material-icons">home</span></a>
                    Are you bored?
                </div>
                </nav>
                <main>
                    <h1>Contact us</h1>
                    <form>
                        <div className="form-group">
                            <label for="name">Your name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-group">
                            <label for="email">Your email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-group">
                            <label for="message">Your message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <a htmlFor="#"><button type="submit">Send</button></a>
                    </form>
                </main>
            </> 
        )
    }
}

export default Contact;