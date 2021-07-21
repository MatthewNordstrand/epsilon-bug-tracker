import TitleBar from './components/TitleBar';
import SideNav from './components/SideNav/SideNav';
import LoginBar from './components/LoginBar';
import IssuesCard from './components/Issues/IssuesCard';
import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
        username: "Guest",
    };

    render() {
        return (
            <div className="App">
                <SideNav />
                <TitleBar />
                <LoginBar username={this.state.username} />
                <IssuesCard />
            </div>
        )
    };
}

export default App;
