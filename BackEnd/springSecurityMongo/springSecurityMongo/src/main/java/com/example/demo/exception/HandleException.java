package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.demo.model.AuthenticationResponse;

@RestControllerAdvice
public class HandleException {

	
	@ExceptionHandler(InvalidCredentialException.class)
	public ResponseEntity<AuthenticationResponse> handleInvalidException(InvalidCredentialException exception){
		return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
				(exception.getMessage(), 0),HttpStatus.OK);
	}
	
	@ExceptionHandler(UsernameAlreadyPresentException.class)
	public ResponseEntity<AuthenticationResponse> handleUsernamePresentException(UsernameAlreadyPresentException exception){
		return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
				(exception.getMessage(),0),HttpStatus.OK);
	}
	@ExceptionHandler(EmailAlreadyPresentException.class)
	public ResponseEntity<AuthenticationResponse> handleEmailException(EmailAlreadyPresentException exception){
		return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
				(exception.getMessage(),0),HttpStatus.OK);
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<AuthenticationResponse> handleException(Exception exception){
		return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
				(exception.getMessage(),0),HttpStatus.OK);
	}
	
	
}
