import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
// import Footer from "./components/footer/Footer";

const App = () => {
  // const creator = {
  //   author: "Vincent Vo",
  //   lastUpdate: "March 2023"
  // }
  return (
    <div className="App">
        <Header/>
        <Body />
        {/* <Footer/> */}
    </div>
  );
}

export default App;
