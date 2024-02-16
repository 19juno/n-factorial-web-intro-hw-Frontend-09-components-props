import HelloText from "./components/HelloText";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";

function App() {
  return (
    <div style={{ width: "1, 440px" }} className="App">
      <Header />
      <HelloText />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
