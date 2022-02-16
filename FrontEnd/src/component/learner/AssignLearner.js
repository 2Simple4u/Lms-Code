import axios from "axios";
import React,{useState} from "react";
import { useEffect } from "react";
import {useNavigate } from "react-router-dom";
// import TimesheetTable from "../component/timesheet/TimesheetTable";
import "./AssignLearner.css"

function AssignLearner() {
 
  const navigate = useNavigate();
 
  const [empdata,setEmpData]= useState({});

    const getAllEmployee = () => {
        axios.get(`http://localhost:8086/lms/employees`,{      
        }).then(
            (response) => {
                console.log(response);
                setEmpData(response.data);
            },
            (error)=>{
                console.log(error);
            }
        )
    };

    useEffect(() =>{
        getAllEmployee()
    },[]);
    
  return (
    <div className="parent_learner">
      <div className="child-learner">
        <table className="batches_data_table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Employee Id</th>
              <th>Name</th>
              <th>Phone no.</th>
              <th>Email</th>
              <th>D.O.B</th>
              <th>D.O.J</th>
            </tr>
          </thead>
          <tbody>{
            empdata.length>0?
              empdata.map((item,i) =>{
                return[
                    <tr key={i}>
                    <td> <input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                    <td>{item.eId}</td>
                    <td>{item.name}</td>
                    <td>{item.contact}</td>
                    <td>{item.email}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.dateOfJoining}</td>
                  </tr>
                   
                  ]
              }):'Data Not Found'
            }
          </tbody>
        </table>
        <button onClick={()=>navigate("/mainscreen")}>Assign</button>
      </div>
      {/* <TimesheetTable empData={empdata}/> */}
    </div>
  );
}

export default AssignLearner;
