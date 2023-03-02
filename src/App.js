import { Counter } from "./components/Counter";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>Name: test-sass-react-mf-app</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
