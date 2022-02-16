package com.example.demo.model;

public class RoleJwt {


	private String username;
		public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

		private String jwt;
		private String role;
		private int code;

		public int getCode() {
			return code;
		}

		public void setCode(int code) {
			this.code = code;
		}

		public RoleJwt() {
			
		}

		public RoleJwt(String role,String jwt, int code,String username) {
			this.role=role;
			this.jwt=jwt;
			this.code=code;
			this.username=username;
		}

		public String getJwt() {
			return jwt;
		}

		public void setJwt(String jwt) {
			this.jwt = jwt;
		}

		public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}
		
		
		
		
		

	}


