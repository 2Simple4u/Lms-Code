package com.example.demo.exception;

public class InvalidCredentialException extends RuntimeException{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InvalidCredentialException(String S) {
		super(S);
	}

}
