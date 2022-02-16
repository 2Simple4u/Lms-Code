import axios from "axios";
import React from "react";
import { useState } from "react";
import "./AddReport.css";

function AddReport(prps) {
  // console.log(prps['emp_id']);
  const id = prps["emp_id"];
  console.log(id);
  //storing the employee report data in state
  const [report, setReports] = useState({});
  // sending the data using function
  const handleForm = (e) => {
    setReports({ ...report, employeeId: id });
    console.log(report);
    e.preventDefault();
    postEmployeeReport(report);
  };

  const postEmployeeReport = (data) => {
    axios.post(`http://localhost:8093/lms/reports/reports`, data).then(
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
              Behaviour<span className="star">*</span>
            </label>
            <div className="behaviour_attributes">
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="behaviour"
                  id="behaviour"
                  value="Poor"
                  // onChange={(e) => {
                  //   console.log(e.target.value);
                  // }}
                  onChange={(e) => {
                    setReports({ ...report, behaviour: e.target.value });
                  }}
                />
                <span>Poor</span>
              </div>
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="empId"
                  id="empId"
                  value="Poor"
                  onChange={(e) => {
                    setReports({ ...report, behaviour: e.target.value });
                  }}
                />
                <span>Good</span>
              </div>
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="empId"
                  id="empId"
                  value="Excellent"
                  onChange={(e) => {
                    setReports({ ...report, behaviour: e.target.value });
                  }}
                />
                <span>Excellent</span>
              </div>
            </div>
          </div>
          <div className="empEmail child-col-flex-1">
            <label htmlFor="empEmail">
              Performance <span className="star">*</span>
            </label>
            <div className="behaviour_attributes">
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="performance"
                  id="performance"
                  value="poor"
                  onChange={(e) => {
                    setReports({ ...report, performance: e.target.value });
                  }}
                />
                <span>Poor</span>
              </div>
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="performance"
                  id="performance"
                  value="Good"
                  onChange={(e) => {
                    setReports({ ...report, performance: e.target.value });
                  }}
                />
                <span>Good</span>
              </div>
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="performance"
                  id="performance"
                  value="Excellent"
                  onChange={(e) => {
                    setReports({ ...report, performance: e.target.value });
                  }}
                />
                <span>Excellent</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-flex-1">
          <div className="empEmail child-col-flex-1">
            <label htmlFor="empName">
              Communication <span className="star">*</span>
            </label>
            <div className="behaviour_attributes">
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="communication"
                  id="communication"
                  value="poor"
                  onChange={(e) => {
                    setReports({ ...report, communication: e.target.value });
                  }}
                />
                <span>Poor</span>
              </div>
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="communication"
                  id="communication"
                  value="Good"
                  onChange={(e) => {
                    setReports({ ...report, communication: e.target.value });
                  }}
                />
                <span>Good</span>
              </div>
              <div className="behaviour_attributes_child">
                <input
                  type="radio"
                  name="communication"
                  id="communication"
                  value="Excellent"
                  onChange={(e) => {
                    setReports({ ...report, communication: e.target.value });
                  }}
                />
                <span>Excellent</span>
              </div>
            </div>
          </div>

          <div className="Name child-col-flex-1">
            <label htmlFor="description" className="description">
              Description <span className="star">*</span>
            </label>
            <input
              type="text"
              name="description"
              id="description1"
              onChange={(e) => {
                setReports({ ...report, description: e.target.value });
              }}
            />
            {/* <input
                  type="text"
                  name="employeeId"
                  id="employeeId"
                  // value={id}
                  // onChange={(e) => {
                  //   console.log(e.target.value);
                  // }}
                  onChange={(e) => {
                    setReports({ ...report, employeeId={id} });
                  }}/> */}

            {/* {
                    setReports({...report,employeeId:id})
                  } */}
          </div>
        </div>
        <div className="buttons">
          <button className="create_button" type="submit" onClick={handleForm}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddReport;
