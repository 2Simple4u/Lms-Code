import axios from "axios";
import React, { useState } from "react";

function AddEmployee() {
  //storing the employee data in state
  const [employee, setEmployee] = useState({});
  // sending the data using function
  const handleForm = (e) => {
    console.log(employee);
    e.preventDefault();
    postEmployeeData(employee);
  };

  // posting the employee data
  const postEmployeeData = (data) => {
    axios.post(`http://localhost:8086/lms/employees`, data).then(
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
            <label htmlFor="empId">
              Employee Id <span className="star">*</span>
            </label>
            <input
              type="text"
              name="eId"
              id="eId"
              // value={batch.empName}
              onChange={(e) => {
                setEmployee({ ...employee, eId: e.target.value });
              }}
            />
          </div>
          <div className="empEmail child-col-flex-1">
            <label htmlFor="email">
              Email <span className="star">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                setEmployee({ ...employee, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="col-flex-1">
          <div className="empEmail child-col-flex-1">
            <label htmlFor="name">
              Employee Name <span className="star">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              // value={batch.empName}
              onChange={(e) => {
                setEmployee({ ...employee, name: e.target.value });
              }}
            />
          </div>

          <div className="Name child-col-flex-1">
            <label htmlFor="contact">
              Phone No. <span className="star">*</span>
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              onChange={(e) => {
                setEmployee({ ...employee, contact: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="col-flex-1">
          <div className="Time child-col-flex-1">
            <label htmlFor="dateOfJoining">
              D.O.J <span className="star">*</span>
            </label>

            <input
              type="date"
              name="dateOfJoining"
              id="dateOfJoining"
              onChange={(e) => {
                setEmployee({ ...employee, dateOfJoining: e.target.value });
              }}
            />
          </div>
          <div className="empDob child-col-flex-1">
            <label htmlFor="dateOfBirth">
              D.O.B <span className="star">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={(e) => {
                setEmployee({ ...employee, dateOfBirth: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="create_button" type="submit" onClick={handleForm}>
            Create
          </button>
          {/* <button type="reset" className="cancel_button">
            Clear
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
