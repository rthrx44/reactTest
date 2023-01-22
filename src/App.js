import JNL from './JNL.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={JNL} className="App-logo" alt="logo" />
        <p>
          Jimmy Neutron Logo
        </p>
        <a
          className="App-link"
          href="https://jimmyneutron.fandom.com/wiki/Jimmy_Neutron"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Jimmy Neutron
        </a>
      </header>
    </div>
  );
}

export default App;
