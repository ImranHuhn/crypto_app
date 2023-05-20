import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

class App extends React.Component {
  state = {
    on: false,
  };

  handleClick = () => {
    const { on } = this.state;
    const themeSetting = !on;
    this.setState({ on: themeSetting });
    localStorage.setItem("themeSetting", JSON.stringify(themeSetting));
  };

  componentDidMount = () => {
    const storedTheme = JSON.parse(localStorage.getItem("themeSetting"));
    this.setState({ on: storedTheme });
  };

  render() {
    const { on } = this.state;
    return (
      <div className={on ? "dark" : ""}>
        <Router>
          <div className="bg-[#ededed] dark:bg-[#1f2128]">
            <Navbar handleClick={this.handleClick} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
