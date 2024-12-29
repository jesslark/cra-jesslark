import logo from './logo.svg';
import './App.css';
import CloudTwoToneIcon from "@mui/icons-material/CloudTwoTone"
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone"

function App() {
  return (
    <div className="app">
      <header>
        <SentimentVerySatisfiedTwoToneIcon
          className="icon"
          sx={{ fontSize: 20 }}
        />
        <a href="" className="nav">
          Jess Lark
        </a>
        <a href="" className="nav">
          Projects
        </a>
        <a href="" className="nav">
          Blog
        </a>
      </header>
      <div className="content">Some very great content here.</div>
      <footer>I am such a cool footer</footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!@!!!!!
        </a>
      </header> */}
    </div>
  )
}

export default App;
