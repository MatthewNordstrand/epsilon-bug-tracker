import TitleBar from './components/TitleBar';
import SideNav from './components/SideNav/SideNav';
import LoginBar from './components/LoginBar';
import IssuesCard from './components/Issues/IssuesCard';
import './App.css';

function App() {
    return (
        <div className="App">
            <SideNav />
            <TitleBar />
            <LoginBar />
            <IssuesCard />
        </div>
    );
}

export default App;
