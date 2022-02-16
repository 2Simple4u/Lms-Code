
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const [user, setUser] = useState({});

  // sending the data using function
  const handleForm = (e) => {
    console.log(user);
    e.preventDefault();
    postUserData(user);
  };

  const postUserData = (data) => {
    axios.post(`http://localhost:8089/login/register`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="parent_signup">
      <div className="signupchild-1 ">
        <div className="signupchild1_left">
          <div className="signupchild1_left_text">
            <h2>Welcome to</h2>
            <h1>i-Transform,</h1>
            <p>One stop all solutions</p>
          </div>
        </div>
        <div className="rightparent">
          <div className="signupchild1_right">
            {/* <div className="empid signupchild-col-flex-1">
            <label htmlFor="empId">
              Employee Id <span className="star">*</span>
            </label>
            <input
              type="text"
              name="empId"
              id="empId"
              required
                onChange={(e) => {
                  setUser({ ...user, empId: e.target.value });
                }}
            />
          </div> */}
            <div className="name signupchild-col-flex-1">
              <label htmlFor="name">
                Name <span className="star">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
                required
              />
            </div>
            <div className="empName signupchild-col-flex-1">
              <label htmlFor="empName">
                Contact No. <span className="star">*</span>
              </label>
              <input
                type="text"
                name="contactNum"
                id="contactNum"
                required
                onChange={(e) => {
                  setUser({ ...user, contactNum: e.target.value });
                }}
              />
            </div>
            <div className="email signupchild-col-flex-1">
              <label htmlFor="empId">
                Email <span className="star">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div className="username signupchild-col-flex-1">
              <label htmlFor="empId">
                UserName <span className="star">*</span>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                onChange={(e) => {
                  setUser({ ...user, username: e.target.value });
                }}
              />
            </div>
            <div className="password signupchild-col-flex-1">
              <label htmlFor="password">
                Password <span className="star">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <div className="buttons">
              <button
                className="create_button"
                type="submit"
                onClick={handleForm}
              >
                Create
              </button>
            </div>
            <div className="footertext1">
                <div className="parent_text">
                <h3>Already have an account?   <span className="loginLink"><Link to="/login" className="signInScreen_log" >Log in</Link></span></h3> 
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
