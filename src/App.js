import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner";

const Home = React.lazy(() => {
  return Promise.all([
    import("./Pages/Home/Home"),
    new Promise(resolve => setTimeout(resolve, 0))
  ])
  .then(([moduleExports]) => moduleExports)
});
const About = React.lazy(() => import("./Pages/About/About"));
const Login = React.lazy(() => import("./Pages/Login/Login"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/login" component={Home}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
