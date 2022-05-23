import logo from './logo.svg';
import './App.css';
import Focus from './exersizes/14.1.focus';
import Copy from './exersizes/14.2.copy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          style={{ width: '200px' }}
          src={logo} className="App-logo" alt="logo" />
        <p>
          23.5.22 refs exercises
        </p>
        {/* <Focus /> */}
        <Copy />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
