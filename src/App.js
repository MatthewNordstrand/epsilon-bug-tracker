import './App.css';
import TitleBar from './components/TitleBar';
import SideNav from './components/SideNav/SideNav';
import LoginBar from './components/LoginBar';
import IssuesTable from './components/Issues/IssuesTable';

function App() {
    return (
        <div className="App">
            <TitleBar />
            <SideNav />
            <LoginBar />
            <IssuesTable />
        </div>
    );
}

export default App;
