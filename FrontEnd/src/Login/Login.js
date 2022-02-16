import React, { Component,useState } from "react";
// import { useNavigate } from 'react-router-dom'
// import Navbar from "../component/Navbar.js"
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import AddEmployee from "../component/employee/AddEmployee";
// import { Link, Redirect } from "react-router-dom";
//  import CustomTost from "../component/CustomTost/CustomTost";
// import Component_Tost from "../component/CustomTost/ComponentTost";
import CustomPopup from "../component/CustomPopup/Popup";

toast.configure();
class Login extends Component {
  state = {};
  constructor(props){ 
    super(props) 
    this.state = {
        visibility: false,
        response: true
    } 
    this.updateState = this.updateState.bind(this) ;
  }
 
  updateState(){ 
    this.setState((prevState) => {
      return { visibility:true}
    })  
  }
  handleSubmit = (e) => {
    e.preventDefault();
        // Changing state 
        this.updateState();
    const credentials = {
      username: this.username,
      password: this.password,
    };
    axios
      .post("auth", credentials)
      .then((res) => {
        console.log(res);
        const code = res.data.code;
        if (code == "1") {
          localStorage.setItem("token", res.data.jwt);
          localStorage.setItem("user", res.data.username);
          localStorage.setItem("role", res.data.role);
          this.setState({
            loggedIn: true,
          });
          toast.success(`Successfully logged-in`, {
            autoClose: 5000,
          }) ;
        } else {
           
          toast.warn(`Invalid Credentials`, {
            autoClose: 5000,

          });
        }

        // this.props.setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    if (this.state.loggedIn) {
        <Navbar props='true'/>
      if (localStorage.getItem("role")=='User') {
        //User Role
        return <Navigate to={"/userscreen"} />;
      } else {
        //Admin Role
        return <Navigate to={"/mainscreen"} />; 
      }
     
    }
  
  return (
      <div className="main_LoginScreen">
        <div className="right_loginSide">
          <form action="" onSubmit={this.handleSubmit}>
            <h1>Sign In</h1>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              name="username"
              id="username"
              placeholder="Your Username"
              onChange={(e) => (this.username = e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => (this.password = e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
            <h4>
              <span className="signinscreen_new"></span>
              <Link to="/signup" className="signInScreen_log">New to Lms..? Sign Up</Link>
            </h4>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
