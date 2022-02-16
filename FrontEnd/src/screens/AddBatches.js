import React, { useState } from "react";
import "./AddBatches.css";
import axios from "axios";
import base_url from "../api/Api";

function AddBatches() {
  const [batch, setBatch] = useState({});
  const handleForm = (e) => {
    console.log(batch);
    e.preventDefault();
    postBatchData(batch);
  };

  const postBatchData = (data) => {
    axios.post(`${base_url}/addbatch`, data).then(
      (response) => {
        console.log(response);
        console.log("sucess");
        //   setBatch({batchName: "",
        //   description: "",
        //   endDate: "",
        //   endTime: "",
        //   startDate: "",
        //   startTime: "",
        //   trainer: ""});
        //
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
            <label htmlFor="curriculum">
              Curriculum <span className="star">*</span>
            </label>
            <input
              type="text"
              name="curriculum"
              id="curriculum"
              value={batch.curriculum}
              onChange={(e) => {
                setBatch({ ...batch, curriculum: e.target.value });
              }}
            />
          </div>
          {/* <div className="Session child-col-flex-1">
            <label htmlFor="Session">
              Session <span className="star">*</span>
            </label>
            <input type="text" name="Session" id="Session"
            onChange={(e) => {
              setBatch({...batch, session:e.target.value});
            }} />
          </div> */}
        </div>
        <div className="col-flex-1">
          <div className="Name child-col-flex-1">
            <label htmlFor="Name">
             Batch Name <span className="star">*</span>
            </label>
            <input
              type="text"
              name="batchName"
              id="name"
              onChange={(e) => {
                setBatch({ ...batch, batchName: e.target.value });
              }}
            />
          </div>
          <div className="Trainer child-col-flex-1">
            <label htmlFor="Trainer">
              Trainer <span className="star">*</span>
            </label>
            <input
              type="text"
              name="trainer"
              id="Trainer"
              onChange={(e) => {
                setBatch({ ...batch, trainer: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="col-flex-1">
          <div className="Time child-col-flex-1">
            <label htmlFor="Time">
              Time <span className="star">*</span>
            </label>
            <div className="col-date">
              <label htmlFor="startDate" className="child-date">
                Start Time
              </label>
              <input
                type="time"
                name="startTime"
                id="Time"
                onChange={(e) => {
                  setBatch({ ...batch, startTime: e.target.value });
                }}
              />
              <label htmlFor="endDate" className="child-date">
                End Time
              </label>
              <input
                type="time"
                name="endTime"
                id="Time"
                onChange={(e) => {
                  setBatch({ ...batch, endTime: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="Date child-col-flex-1">
            <label htmlFor="Date">
              Date <span className="star">*</span>
            </label>
            <div className="col-date">
              <label htmlFor="startDate" className="child-date">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                onChange={(e) => {
                  setBatch({ ...batch, startDate: e.target.value });
                }}
              />
              <label htmlFor="startDate" className="child-date">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                onChange={(e) => {
                  setBatch({ ...batch, endDate: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <div className="description child-col-flex-1">
          <label htmlFor="description">Description</label>
          <textarea
            name="Description"
            id="description"
            cols="30"
            rows="10"
            onChange={(e) => {
              setBatch({ ...batch, description: e.target.value });
            }}
          ></textarea>
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

export default AddBatches;
