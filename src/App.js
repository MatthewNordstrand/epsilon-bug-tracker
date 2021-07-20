import './App.css';
import TitleBar from './components/TitleBar';
import SideNav from './components/SideNav';

function App() {
    return (
        <div className="App">
            <TitleBar />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <SideNav />
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
