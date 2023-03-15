import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";

const App = () => {
  // const creator = {
  //   author: "Vincent Vo",
  //   lastUpdate: "March 2023"
  // }

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
