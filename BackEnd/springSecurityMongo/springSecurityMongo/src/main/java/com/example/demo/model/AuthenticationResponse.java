package com.example.demo.model;

public class AuthenticationResponse {
	
	private String response;
	private int code;

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public AuthenticationResponse() {
		
	}

	public AuthenticationResponse(String response, int code) {
		this.response=response;
		this.code=code;
	}
	
	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}
	
	
	

}
