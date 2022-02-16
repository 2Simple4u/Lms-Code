package com.example.demo.exception;

public class EmailAlreadyPresentException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public EmailAlreadyPresentException(String S) {
		super(S);
	}

}
