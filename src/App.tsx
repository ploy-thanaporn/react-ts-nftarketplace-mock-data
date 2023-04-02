import "./App.css";

import Navbar from "./components/NavBar";
import FilterContextProvider from "./context/FilterContext";
import FilterPriceContextProvider from "./context/FilterContextPrice";
import Router from "./Router";

function App() {
  return (
    <div>
      <FilterContextProvider>
        <FilterPriceContextProvider>
          <Navbar>
            <Router />
          </Navbar>
        </FilterPriceContextProvider>
      </FilterContextProvider>
    </div>
  );
}

export default App;
