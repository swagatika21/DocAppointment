import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrentToken from "./Components/CurrentToken";
import Dashboard from "./Components/Dashboard";
import ContextHolder from "./Context/ContextHolder";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ContextHolder>
                <Dashboard />
              </ContextHolder>
            }
          />
          <Route
            path="/current-token"
            element={
              <ContextHolder>
                <CurrentToken />
              </ContextHolder>
            }
          />
          <Route
            path="*"
            element={
              <ContextHolder>
                <Dashboard />
              </ContextHolder>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
