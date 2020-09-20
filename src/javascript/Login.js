import React from 'react';
import '../css/Login.css';

export class Login extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
    }

    onClick() {
        this.setState({loggedIn: true})
    }

    getLoginPage() {
        return <div className="Login">
            <div className="Title">
                Login
            </div>
            <div className="login-content">
                <div className="input-label">
                    <h1>
                        Please enter your AgentID
                    </h1>
                </div>
                <input className="input">
                </input>
                <button className="submit" onClick = {() => this.onClick()}>
                    Submit
                </button>
            </div>
        </div>
    }

    getLoggedInPage() {
        return <div className="Login">
            <div className="Title">
                Welcome!
            </div>
            <div className="login-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis vestibulum quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam efficitur id ligula a tempus. Sed consectetur libero eu ante semper condimentum. Sed tristique facilisis convallis. Duis a lacus orci. Quisque aliquam velit non ipsum iaculis, interdum venenatis felis gravida. Sed semper pellentesque orci a vestibulum.

                Donec ipsum orci, condimentum id eleifend vestibulum, suscipit sed nibh. Aenean at ante id magna varius molestie et vel libero. Sed ultrices malesuada diam quis congue. Suspendisse id lectus ac dui consectetur finibus. Mauris sodales, neque non scelerisque feugiat, metus risus iaculis nibh, lobortis porta nibh enim ac nunc. Vestibulum mauris elit, convallis sed viverra vel, volutpat non metus. Vestibulum et semper tellus. Donec sodales scelerisque libero, at sollicitudin est congue id. Proin justo magna, tincidunt sit amet porttitor non, luctus vitae dui. Nunc eget lorem ut nisi tristique cursus.
            </div>
        </div>
    }

    render() {
        if(this.state.loggedIn) {
            return this.getLoggedInPage();
        } else {
            return this.getLoginPage();
        }
    }
}

export default Login;
