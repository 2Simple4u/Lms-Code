import React,{useState} from "react";
import "./BatchTable.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import base_url from "../api/Api";
import CustomPopup from "../component/CustomPopup/Popup";
// import AssignLearner from ".component/learner/AssignLearner";
import ReactTooltip from "react-tooltip";
import AddTaskIcon from '@mui/icons-material/AddTask';
import UpdateBatch from "../update/batch/UpdateBatch";
import AssignLearner from "../component/learner/AssignLearner";

function BatchTable({batch,update}) {
  // popup 
   const [visibility, setVisibility] = useState(false);
   const [visibility_2, setVisibility_2] = useState(false);
   const popupCloseHandler = (e) => {
     setVisibility(e);
   };
   const popupCloseHandler_2 = (e) => {
    setVisibility_2(e);
  };

const [updateId,setUpdateId]=useState("");

  const deleteBatch=(batchId)=>{
    axios.delete(`${base_url}/delete/${batchId}`).then(
      (response) => {
        console.log(response);
        console.log("sucess");
         update(batchId);
      },
      (error)=>{
        console.log(error);
      }
    ) 
  }
  return (
    <div className="parent_batchTable">
      <div className="batches_data">
        <h2>Jfs</h2>
        <p>Session : 2021 - 2022</p>
        <table className="batches_data_table">
          <thead>
            <tr>
              <th>Actions</th>
              <th>Batch</th>
              <th>Dates</th>
              <th>Time</th>
              <th>Trainer</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
                batch.map((item,i)=>{
                 return [<tr key={i}>
                    <td> 
                      <AddTaskIcon data-tip="Add Learner" data-for='toolTip1' data-place='bottom'padding={10}
                      onClick={(e) => {
                        setVisibility_2(!visibility_2)
                     }}/>
                     <ReactTooltip id="toolTip1" /> 
                      {/* <EditIcon onClick={(e) => {
                     setUpdateId(i);
                     setVisibility(!visibility)
                     }}/>  */}
                   <DeleteIcon data-tip="Delete" data-for='toolTip2' data-place='bottom'
                   onClick={()=>{
                     deleteBatch(item.batchId);
                   }}/><ReactTooltip id="toolTip2" /> 
                   </td>
                   
                    <td>{item.batchName}</td>
                    <td>{item.startDate} : {item.endDate}</td>
                    <td>{item.startTime} : {item.endTime}</td>
                    <td>{item.trainer}</td>
                    <td>{item.description}</td>
                 </tr>]
                })
            }
          </tbody>
        </table>
      </div>
      {/* <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Information of Batches"
        >
         <UpdateBatch updateData={batch[updateId]}/>
        </CustomPopup> */}
        <div className="Popup-panel" >

      <CustomPopup
          onClose={popupCloseHandler_2}
          show={visibility_2}
          title="Assign learner"
        >
         <AssignLearner/>
        </CustomPopup>
      </div>
    </div>
  );
}

export default BatchTable;
