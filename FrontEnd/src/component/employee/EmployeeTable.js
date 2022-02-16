import React from "react";
import ReactTooltip from "react-tooltip";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
import AddEmployee from "./AddEmployee.js"
import CustomPopup from "../CustomPopup/Popup.js";
import UpdateEmployee from "./UpdateEmployee.js";
import AddReport from "./AddReport.js";
import { ListItem } from "@mui/material";
import AddAttedence from "./AddAttedence.js";
// import CustomPopup from "./component/CustomPopup/Popup.js";

function EmployeeTable({employee,updateEmp}) {
   // popup 
   const [visibility, setVisibility] = useState(false);
   const [visibility2, setVisibility2] = useState(false);
   const [Emp_Id, setEmpId] = useState('');

   const popupCloseHandler = (e) => {
     setVisibility(e);
   };
   const popupCloseHandler2 = (e) => {
    setVisibility2(e);
  };

   // calling the api
    const deleteEmployee=(id)=>{
        axios.delete(`http://localhost:8086/lms/employees/${id}`).then(
          (response) => {
            console.log(response);
            console.log("sucess");
             updateEmp(id);
          },
          (error)=>{
            console.log(error);
          }
        ) 
      }




  return (
    <div className="parent_batchTable">
      <div className="batches_data">
        <h2>Capgemini</h2>
        <p>Session : 2021 - 2022</p>
        <table className="batches_data_table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Employee Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>D.O.B</th>
              <th>D.O.J</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item, i) => {
              return [
                <tr key={i} e-id={item.id}>
                  <td>
                    {/* <AddTaskIcon
                      data-tip="Add Learner"
                      data-for="toolTip1"
                      data-place="bottom"
                      padding={10}
                      onClick={(e) => {
                        setVisibility2(!visibility2);
                      }}
                    /> */}
                     <CalendarTodayIcon
                     data-tip="TimeSheet"
                     data-for="toolTip1"
                     data-place="bottom"
                     onClick={(e) => {
                      console.log(e)
                     setVisibility2(!visibility2)
                     setEmpId(item.id)
                     }}/> 
                     <ReactTooltip id="toolTip1" />
                    <EditIcon 
                    data-tip="Report"
                    data-for="toolTip2"
                    data-place="bottom"
                    onClick={(e) => {
                      console.log(e)
                     setVisibility(!visibility)
                      setEmpId(item.id);
                     }}/> 
                     <ReactTooltip id="toolTip2" />
                    <DeleteIcon
                      data-tip="Delete"
                      data-for="toolTip3"
                      data-place="bottom"
                      onClick={()=>{
                        deleteEmployee(item.id);
                      }}
                    />
                    <ReactTooltip id="toolTip3" />
                  </td>

                  <td>{item.eId}</td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>{item.contact}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>{item.dateOfJoining}</td>
                </tr>,
              ];
            })}
          </tbody>
        </table>
      </div>
      <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Information of Report"
        >
         <AddReport emp_id={Emp_Id}/>
        </CustomPopup>
      <div className="Popup-panel">
        <CustomPopup
          onClose={popupCloseHandler2}
          show={visibility2}
          title="Information of Attendence"
        >
          <AddAttedence emp_id={Emp_Id}/>
        </CustomPopup>
      </div>
    </div>
  );
}

export default EmployeeTable;
