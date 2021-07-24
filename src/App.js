import SideNav from './components/SideNav/SideNav';
import './App.css';
import IssueListManager from './components/IssueListManager/IssueListManager';

function App()  {
    return (
        <div className="App">
            <SideNav />
            <IssueListManager />
        </div>
    )
}

export default App;
