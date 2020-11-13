import logo from './logo.svg';
import './App.css';
import Video from './components/Video/Video';
import samp from './images/samp.mp4';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Video video={samp} duration={15000}/>
      </header>
    </div>
  );
}

export default App;
