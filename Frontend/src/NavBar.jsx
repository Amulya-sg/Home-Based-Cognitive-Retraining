import { Component } from "react";
import "./navbarstyle.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handlecklick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbaritems">
        <h1 className="navbar-logo">Euphoria</h1>

        <div className="menu-icons" onClick={this.handlecklick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link  to="/login">Get Started</Link>
      </nav>
    );
  }
}
export default Navbar;