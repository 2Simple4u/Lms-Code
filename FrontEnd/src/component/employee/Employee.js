import axios from "axios";
import React , {useEffect, useState}from "react";
import CustomPopup from "../CustomPopup/Popup";
import Dashboard from "../Dashboard";
import AddEmployee from "./AddEmployee";
import EmployeeTable from "./EmployeeTable";
import UpdateEmployee from "./UpdateEmployee";

function Employee() {

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
    });

 // upating batch table after delete
    const updateEmployee = (id) => {
        setEmpData(empdata.filter((eId) => eId.id != id));
        console.log(empdata)
    }

     // popup 
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  return (
    <div className="same-component">
      <Dashboard />
      <div className="main_Batch">
        <div className="batch_topbar">
          <h2>Employee</h2>
          <button type="submit" onClick={(e) => setVisibility(!visibility)}>
            {" "}
            + Add{" "}
          </button>
        </div>
        {empdata.length > 0 ? (
          <EmployeeTable employee={empdata} updateEmp={updateEmployee}/>
        ) : (
          <div className="no-data">
            <h1 className="no-data-h1">Oop's data not exits</h1>
          </div>
        )}
      </div>
      <div className="Popup-panel">
        <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Information of Batches"
        >
          <AddEmployee/>
        </CustomPopup>
      </div>
    </div>
  );
}

export default Employee;
