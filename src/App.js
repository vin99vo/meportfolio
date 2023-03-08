import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App">
      <div className="p1">
        <Header title = "Vincent Vo" content = "Junior Web Developer"/>
      </div>
      <div className="p2">
        <Body content = "no way man"/>
      </div>      
    </div>
  );
}

export default App;
