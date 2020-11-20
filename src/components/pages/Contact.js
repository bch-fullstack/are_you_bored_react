import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <div className="logo">
                        <a href="index.html"><span className="material-icons">home</span></a>
                    Are you bored?
                </div>
                    <div className="selection">
                        <div className="pill">
                            <div className="pill_left_blue"><a href="yesselection.html">Yes</a></div>
                            <div className="pill_right_blue"></div>
                            <div className="pill_left_red"><a href="noselection.html">No</a></div>
                            <div className="pill_right_red"></div>
                        </div>
                    </div>
                    <div className="empty">
                        <a href="index.html"><span className="material-icons">home</span></a>
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
                        <a href="#"><button type="submit">Send</button></a>
                    </form>
                </main>
            </>
        )
    }
}

export default Contact;