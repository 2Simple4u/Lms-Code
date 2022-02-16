package com.example.demo.exception;

public class UsernameAlreadyPresentException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	public UsernameAlreadyPresentException(String S) {
		super(S);
	}

}
