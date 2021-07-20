import TitleBar from './components/TitleBar';
import SideNav from './components/SideNav/SideNav';
import './App.css';
import LoginBar from './components/LoginBar';

function App() {
    return (
        <div className="App">
            <TitleBar />
            <SideNav />
            <LoginBar />
            <div className="container">
                <div className="row mt-5">
                    
                </div>
            </div>
        </div>
    );
}

export default App;
