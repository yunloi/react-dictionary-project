import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <i className="fa-solid fa-book icon">
            <div>DICTIONARY SEARCH</div>
          </i>
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Yun Loi Lok and is{" "}
            <a
              href="https://github.com/yunloi/react-dictionary-project"
              target="blank"
              rel="noopener noreferrer"
            >
              open sourced on GitHub
            </a>{" "}
            in{" "}
            <a
              href="https://magical-gecko-a1e40d.netlify.app"
              target="blank"
              rel="noopener noreferrer"
            >
              Netlify{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
