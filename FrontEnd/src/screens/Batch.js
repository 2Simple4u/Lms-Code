import React, {useEffect, useState}from "react";
import "./Batch.css"
import BatchTable from "./BatchTable.js";
import Dashboard from "../component/Dashboard";
import AddBatches from "./AddBatches.js";
import CustomPopup from "../component/CustomPopup/Popup.js";
import axios from "axios";
import base_url from "../api/Api";

function Batch ()
{
  
  const getAllBatchFromServer = () => {
    axios.get(`${base_url}/getAllBatch`,{
    }).then(
      (response) => {
        console.log(response);
        setBatchTable(response.data)
      },
      (error) => {
        console.log(error);
      }
    );
};

useEffect(() => {
  getAllBatchFromServer()
});
  
  const [batchTable, setBatchTable] = useState([]);
  const updateBatch = (batchId) => {
    setBatchTable(batchTable.filter((bId) => bId.batchId != batchId));
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
        <h2>Batches</h2>
        <button type="submit" onClick={(e) => setVisibility(!visibility)}> + Add </button>
      </div>
      {
        batchTable.length > 0
        ? <BatchTable batch={batchTable} update={updateBatch}/>: 
        <div className="no-data">
          <h1 className="no-data-h1">Oop's data not exits</h1>
        </div>
        }
      </div>
      {/* <AssignLearner  employee={employeeTable} /> */}
      <div className="Popup-panel" >
      <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Information of Batches"
        >
         <AddBatches />
        </CustomPopup>
      </div>
      
      </div>
  );
}

export default Batch;
