import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard';
import ReportTable from './ReportTable';

function Report() {
    const [empdata, setEmpData] = useState({});
  
    const getAllEmployee = () => {
      axios.get(`http://localhost:8086/lms/employees`, {}).then(
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
    return (
      <div className="parent_timesheet">
        <Dashboard />
        <div className="main_timesheet">
          <div className="timesheet_topbar">
            <h2>Report</h2>
            <h3></h3>
          </div>
          {empdata.length > 0 ? (
            <ReportTable empData={empdata} />
          ) : (
            <div className="no-data">
              <h1 className="no-data-h1">Oop's data not exits</h1>
            </div>
          )}
        </div>
      </div>
    );
  }

export default Report
