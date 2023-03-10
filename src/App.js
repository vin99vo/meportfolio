import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Card from "./components/general/Card";
import Icon from "./components/general/Icon";

function App() {
  return (
    <div className="App">
      <div className="p1">
        <Header/>
      </div>
      <div className="p2">
        <Body content="no way man" />
      </div>
    </div>
  );
}

export default App;
