import React from "react";
import MainScreen from "./component/MainScreen";
import Navbar from "./component/Navbar.js";
import "./App.css";
import Login from "./Login/Login.js";
import Home from "./screens/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Batch from "./screens/Batch";
import AddBatches from "./screens/AddBatches";
import Timesheet from "./component/timesheet/Timesheet.js";
import Report from "./component/report/Report";
import Employee from "./component/employee/Employee";
import UserScreen from "./component/UserScreens/UserScreen";
import SignupPage from "./Login/SignupPage";
import EmployeeReportView from "./component/report/EmployeeReportView";

function App() {
  return (
    <div className="main-controller">
      <Router>
        <div className="left-panel">
          <Navbar />
          {/* <Dashboard /> */}
        </div>
        <div className="right-panel">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/mainscreen" element={<MainScreen />} />
            <Route path="/userscreen" element={<UserScreen/>}/>
            <Route path="/employee" element={<Employee/>} />
            <Route path="/batch" element={<Batch />} />
            <Route path="/addbatch" element={<AddBatches />} />
            <Route path="/timesheet" element={<Timesheet/>} />
            <Route path="/report" element={<Report/>}/>
            <Route path="/reportview" element={<EmployeeReportView/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
