import React from "react";
import "./TimesheetTable.css";

function TimesheetTable({ empData }) {
  console.log(empData);

  return (
    <div className="parent_timesheetTable">
      <table className="timesheet_data_table">
        <thead>
          <tr>
            <th>EmpId</th>
            <th>Name</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thus</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          {
          empData.length>0?
          empData.map((item, i) => {
            return [
              <tr key={i}>
                <td>{item.empId}</td>
                <td>{item.empName}</td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
            ] 
          }) : "Date not Found"
        }
        </tbody>
      </table>
     <button>Submit</button>
    </div>
  );
}

export default TimesheetTable;
