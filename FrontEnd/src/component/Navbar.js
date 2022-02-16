import React, { Component } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import { useNavigate, Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };

  render() {
    let buttons;
    if (this.props.user || localStorage.getItem("token")) {
      buttons = (
        <nav className="navbar">
          <ul>
            <Link className="link" to={"/"} onClick={this.handleLogout}>
              Log Out
            </Link>
          </ul>
        </nav>
      );
    } else {
      buttons = (
        <nav className="navbar-login">
          <ul>
            <Link className="link" to="/login">
              Login
            </Link>
          </ul>
        </nav>
      );
    }
    return (
      <div className="main_navbar">
        <NavLink className="link" to="/">
          <div className="left_navbar">
            <h2> i-Transform</h2>
          </div>
        </NavLink>

        <div className="right_navbar">
          {buttons}
          {/* <div className='right_navbar_text'>
                 <h2 onClick={() => navigate("/login")}>Login</h2>
                 <span className=""> <AccountCircleIcon fontSize='large'/></span>
                 </div>  */}

          {/* <h2>User</h2>     */}
        </div>
      </div>
    );
  }

  // let navigate = useNavigate();
  // return (
  //     <div className='main_navbar'>
  //         <div className='left_navbar'>
  //             <h2 onClick={() => navigate("/")}>i-Transform</h2>
  //         </div>
  //         <div className='right_navbar'>
  //             <div className='right_navbar_text'>
  //                 <h2 onClick={() => navigate("/login")}>Login</h2>
  //             <span className=""> <AccountCircleIcon fontSize='large'/></span>
  //             </div>
  //         </div>

  //     </div>
  // )
}

export default Navbar;
