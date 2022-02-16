package com.example.demo.model;
// import java.time.LocalDate;
//import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

 @Document(collection="users")
public class UserModel {
	
	@Id
	private String empId;
	
//	LocalDateTime currentTime = LocalDateTime.now();
	private String name;
//	private String doj;
//	private String managerEmail;
//	private String managerName;
	private String contactNum;
//	private String location;
//	private String grade;	
//	private  LocalDate date1 = currentTime.toLocalDate();
	private String username;
	private String password;
	private String email;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	private String roles;

	
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
//	public String getDoj() {
//		return doj;
//	}
//	public void setDoj(String doj) {
//		this.doj = doj;
//	}
//	public String getManagerEmail() {
//		return managerEmail;
//	}
//	public void setManagerEmail(String managerEmail) {
//		this.managerEmail = managerEmail;
//	}
//	public String getManagerName() {
//		return managerName;
//	}
//	public void setManagerName(String managerName) {
//		this.managerName = managerName;
//	}
	public String getContactNum() {
		return contactNum;
	}
	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}
//	public String getLocation() {
//		return location;
//	}
//	public void setLocation(String location) {
//		this.location = location;
//	}
//	public String getGrade() {
//		return grade;
//	}
//	public void setGrade(String grade) {
//		this.grade = grade;
//	}
//	public LocalDate getDate1() {
//		return date1;
//	}
//	public void setDate1(LocalDate date1) {
//		this.date1 = date1;
//	}
	public String getRoles() {
		return roles;
	}
	public void setRoles(String roles) {
		this.roles = roles;
	}
	public UserModel() {
		
	}
	public String getUsername() {
		return username;
	}
	public  void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
 
 
 
 
 
 
 
