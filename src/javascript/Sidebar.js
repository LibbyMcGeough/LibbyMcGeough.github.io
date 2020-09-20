import React from 'react';
import '../css/Sidebar.css';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {page: "home"};
    }

    onClick(page) {
        if(this.state.page !== page) {
            this.setState({page: page});
            this.props.onSelectPage(page);
        }
    }

    render() {
        return <div className="Sidebar">
            <div className="button-wrapper" onClick={() => this.onClick("home")}>
                <button className="sidebar-button building">
                </button>
            </div>
            <div className="button-wrapper">
                <button className="sidebar-button agent" onClick={() => this.onClick("login")}>
                </button>
            </div>
            <a className="button-wrapper" href="https://www.facebook.com/">
                <button className="sidebar-button facebook">
                </button>
            </a>
            <a className="button-wrapper" href="https://twitter.com/">
                <button className="sidebar-button twitter">
                </button>
            </a>
        </div>
    }
}

export default Sidebar;
