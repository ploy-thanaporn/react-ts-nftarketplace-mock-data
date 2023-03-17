import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <Navbar>
        <Home />
      </Navbar>
    </div>
  );
}

export default App;
