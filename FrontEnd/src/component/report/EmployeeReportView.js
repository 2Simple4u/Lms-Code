import React, { useState } from "react";
import "./EmployeeReportView.css";

function EmployeeReportView(report) {
  let empData=report['report'];
  let reportData=[];
  let timeSheet=[];
  if (Object.keys(empData).length!=0) {
     reportData=empData['reports'];
     timeSheet=empData['timeSheets'];
     reportData=reportData[reportData.length-1];
     timeSheet=timeSheet[timeSheet.length-1];
  } 

  return (
    <div className="parentReport_View">
      <div className="LeftReport_view">
      {/* <img src={img2} alt=""className="leftImg" /> */}
        <div className="profileImage_Circle"></div>
        <div className="pofile_Text">
        
          <h3 className="profile_name">{empData.name}</h3>
          <h3 className="Employee_Email">{empData.email}</h3>
        </div>
      </div>
      <div className="RightReport_view">
        <div className="rightview_report_text">
            
          <h2>Report</h2>
        </div>
        <div className="report_description">
          <div className="report_description_top">
            <div className="left report_description_top">
              <label htmlFor="">
                <h2>Behaviour</h2>
              </label>
              <div className="graph behaviour_graph"></div>
              <p>{reportData.behaviour}</p>
            </div>
            <div className="right report_description_top ">
              <label htmlFor="">
                <h2>Performance</h2>
              </label>
              <div className="graph Performance_graph"></div>
              <p>{reportData.performance}</p>
            </div>
          </div>
          <div className="report_desc_bootom">
            <div className="left report_description_top">
              <label htmlFor="">
                <h2>Communication</h2>
              </label>
              <div className="graph Communication_graph"></div>
              <p>{reportData.communication}</p>
            </div>
            <div className="right report_description_top ">
              <label htmlFor="">
                <h2>Description</h2>
              </label>
              <div className="graph Performance_graph">
                <p>{reportData.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timesheet_parent">
          <div className="rightview_timeshhet_text">
            <h2>Timesheet</h2>
          </div>
          <div className="timesheet_description">
            <div className="timesheet_description_top">
              <div className="lefttimesheet_description_top">
                <label htmlFor="">
                  <h2>Working hours</h2>
                </label>
                <div className="timesheet"></div>
                <p>
                  {timeSheet.workTime} <span>hrs</span>
                </p>
              </div>
              <div className="lefttimesheet_description_top ">
                <label htmlFor="">
                  <h2>Week Day</h2>
                </label>
                <div className=" timesheet"></div>
                <p>
                  {timeSheet.weekDay}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeReportView;
