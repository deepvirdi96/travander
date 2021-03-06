import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Login = React.lazy(() => import("./Pages/Login/Login"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/login" component={Home}></Route>
          </Switch>
        </Suspense>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
