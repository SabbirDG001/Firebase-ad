import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
