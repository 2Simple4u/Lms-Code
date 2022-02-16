import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import "./Timesheet.css";
import TimesheetTable from "./TimesheetTable";

function Timesheet() {
  const [empdata, setEmpData] = useState({});

  const getAllEmployee = () => {
    axios.get(`http://localhost:8086/getAllEmployee`, {}).then(
      (response) => {
        setEmpData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAllEmployee();
  }, []);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="parent_timesheet">
      <Dashboard />
      <div className="main_timesheet">
        <div className="timesheet_topbar">
          <h2>TimeSheet</h2>
          <h3>{date}</h3>
        </div>
        {empdata.length > 0 ? (
          <TimesheetTable empData={empdata} />
        ) : (
          <div className="no-data">
            <h1 className="no-data-h1">Oop's data not exits</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timesheet;
