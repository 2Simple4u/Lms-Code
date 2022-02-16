package com.addbatchservices.addBatches.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "batches")
public class Batch{
	
	@Id
	private String batchId;
	private String batchName;
	private String startDate;
	private String endDate;
	private String startTime;
	private String endTime;
	private String trainer;
	private String description;
	private List<?> employee;
	
	// creating getters and setters
	public String getBatchId() {
		return batchId;
	}
	public void setBatchId(String batchId) {
		this.batchId = batchId;
	}
	public String getBatchName() {
		return batchName;
	}
	public void setBatchName(String batchName) {
		this.batchName = batchName;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getTrainer() {
		return trainer;
	}
	public void setTrainer(String trainer) {
		this.trainer = trainer;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	// constructor using fields
	public Batch(String batchId, String batchName, String startDate, String endDate, String startTime, String endTime,
			String trainer, String description) {
		super();
		this.batchId = batchId;
		this.batchName = batchName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.trainer = trainer;
		this.description = description;
	}
	
	// default constructor
	public Batch() {
		super();
	}
	public List<?> getEmployee() {
		return employee;
	}
	public void setEmployee(List<?> employee) {
		this.employee = employee;
	}
	
	
	
	
	
	
	
}
