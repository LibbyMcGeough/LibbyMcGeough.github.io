import React from 'react';
import '../css/Main.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Login from './Login';

export class Main extends React.Component {

    state = {page: "home"};

    onSelect = (page) => {
        if(this.state.page !== page) {
            this.setState({page: page})
        }
    };

    getPage() {
        if(this.state.page === "login") {
            return <Login/>
        } else {
            return <Home/>
        }
    }

    render() {
        return (
            <div className="Main">
                <div className="Sidebar-container">
                    <Sidebar onSelectPage={this.onSelect}/>
                </div>
                <div className="Page">
                    {this.getPage()}
                </div>
            </div>
        );
    }
}

export default Main;
