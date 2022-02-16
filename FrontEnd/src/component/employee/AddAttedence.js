import axios from "axios";
import React from "react";
import { useState } from "react";
import "./AddAttendence.css"

function AddAttedence(prps) {
  const id = prps["emp_id"];
  console.log(id);

  //storing the employee report data in state
  const [timesheet, setTimesheet] = useState({});

  // sending the data using function
  const handleForm = (e) => {
    setTimesheet({ ...timesheet, employeeId: id });
    e.preventDefault();
    postEmployeeTimeSheet(timesheet);
  };

  const postEmployeeTimeSheet = (data) => {
    axios.post(`http://localhost:8087/lms/timeSheets/timeSheet`, data).then(
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
    <div className="parent_addBatches">
      <div className="addBatches_data">
        <div className="col-flex-1">
          <div className="curriculam child-col-flex-1">
            <label htmlFor="workTime">
              Working Hours<span className="star">*</span>
            </label>
            <input
              type="text"
              name="workTime"
              id="workTime"
              onChange={(e) => {
                setTimesheet({ ...timesheet, workTime: e.target.value });
              }}
            />
          </div>
          <div className="empEmail child-col-flex-1">
            <label htmlFor="weekDay">
              Working Day <span className="star">*</span>
            </label>
            <select id="weekDay" name="weekDay" 
            onChange=
            {(e) => {
              setTimesheet({ ...timesheet, weekDay: e.target.value });
            }}
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thrusday">Thrusday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            
          </div>
        </div>
        <div className="buttons">
          <button className="create_button" type="submit" onClick={handleForm}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAttedence;
