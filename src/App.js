import logo from "./amp.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width={800}
          style={{ maxHeight: 120 }}
        />
        <p>This is amplify test.</p>
      </header>
    </div>
  );
}

export default App;
