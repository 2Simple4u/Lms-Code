import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomPopup from '../CustomPopup/Popup';
import EmployeeReportView from './EmployeeReportView';
import "./ReportTable.css"

function ReportTable({empData}) {
  const [empdata,setEmpData]= useState({});
  const getAllEmployeeById = (id) => {
    axios.get(`http://localhost:8086/lms/employees/${id}`, {}).then(
      (response) => {
        console.log(response);
        setEmpData(response.data)
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // useEffect(() => {
  //   // getAllEmployeeById();
  // }, []);

   // popup 
   const [visibility, setVisibility] = useState(false);
   const popupCloseHandler = (e) => {
     setVisibility(e);
   };
    return (
        <div className="parent_timesheetTable">
        <table className="timesheet_data_table">
          <thead>
            <tr>
              <th>EmpId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {
            empData.length>0?
            empData.map((item, i) => {
              return [
                
                <tr key={i}>
                  <td>{item.eId}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td className='reportview'
                     onClick={(e) => {
                     setVisibility(!visibility)
                    getAllEmployeeById(item.id)
                     }}>View</td>
                </tr>
              ] 
            }):'data not found'
          }
          </tbody>
        </table>
        <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Employee Report"
        >
        <EmployeeReportView report={empdata}/>
        </CustomPopup>
      </div>
    )
}

export default ReportTable
