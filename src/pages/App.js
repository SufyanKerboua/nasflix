import logo from '../assets/logo.svg';
import './App.css';

import VideoPlayer from '../components/VideoPlayer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <VideoPlayer />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
