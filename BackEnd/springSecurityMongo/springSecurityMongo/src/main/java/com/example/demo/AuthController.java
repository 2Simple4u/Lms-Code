package com.example.demo;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.EmailAlreadyPresentException;
import com.example.demo.exception.UsernameAlreadyPresentException;
import com.example.demo.model.*;
import com.example.demo.service.UserService;
import com.example.demo.utils.JwtUtils;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class AuthController {

	
	
	@Autowired
	UserRepository userrepo;
	
	@Autowired
	AuthenticationManager authenticates;
	
	@Autowired
	UserService userservice;
	
	@Autowired
	JwtUtils jwtutil;
	
	@Autowired
	 PasswordEncoder passwordEncoder;
	
	
	@PostMapping("/register")
	private ResponseEntity<AuthenticationResponse>subscribeClient
	(@RequestBody AuthenticationRequest authreq){
		UserModel usermodel =new UserModel();
		

		UserDetails userdetail1=userservice.loadUserByUsername(authreq.getUsername());
		if (userdetail1 != null ) {
			throw new UsernameAlreadyPresentException("Please give unique username");
		}
		else if(userrepo.findByemail(authreq.getEmail()) != null) {
			throw new EmailAlreadyPresentException("Email is already registered");		
		}
		else {
			
			usermodel.setUsername(authreq.getUsername());
			usermodel.setEmpId(authreq.getEmpId());
			usermodel.setPassword(passwordEncoder.encode(authreq.getPassword()));
			usermodel.setEmail(authreq.getEmail());
			usermodel.setContactNum(authreq.getContactNum());
//			usermodel.setDoj(authreq.getDoj());
			usermodel.setName(authreq.getName());
//			usermodel.setManagerName(authreq.getManagerName());
//			usermodel.setManagerEmail(authreq.getManagerEmail());	
//			usermodel.setLocation(authreq.getLocation());
//			usermodel.setGrade(authreq.getGrade());
			
			if (authreq.getRoles()==null) {
				usermodel.setRoles("ROLE_USER");
			}
			else {
				String rolee=  authreq.getRoles();
				if (rolee.contains("ADMIN")) {
					usermodel.setRoles("ROLE_ADMIN");
				}
				else {
					System.out.print(rolee);
					return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
							("Invalid role ",0) , HttpStatus.OK);
				}
			
			}		
			userrepo.save(usermodel);
			
			return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
					("Successful subs for client " +authreq.getUsername(),1), HttpStatus.OK);
		}
	}
	
	
	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authreq){
		String username=authreq.getUsername();
		String password= authreq.getPassword();
		try {
			authenticates.authenticate(new UsernamePasswordAuthenticationToken(username, password));
				
		}
		catch(Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse(" Bad Credential..!",0));
		}
		
		UserDetails userdetails= userservice.loadUserByUsername(username);
		
		Collection<? extends GrantedAuthority> roles = userdetails.getAuthorities();
		
		String jwt = jwtutil.generateToken(userdetails);
		
		if (roles.contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
			return ResponseEntity.ok(new RoleJwt("Admin",jwt,1,username));
		}
		else {
			return ResponseEntity.ok(new RoleJwt("User",jwt,1,username));
		}	
	}
	
	@GetMapping("/getAllUsers")
	public List<UserModel> getAllUser() {
		
		List<UserModel> userList=new ArrayList<UserModel>();
		userrepo.findAll().forEach(userList::add);
		return userList;
	}

	@DeleteMapping("/admin/delUser/{username}")
	public ResponseEntity<?> delUser(@PathVariable("username") String username) {
		return userservice.delByName(username);
		
	}
	
	@GetMapping("/getByName/{username}")
	public UserModel getByName(@PathVariable("username") String username) {
		return userrepo.findByusername(username);
	}
	@GetMapping("/getuser")
	  @ResponseBody
	  public String currentUserName(Principal principal) {
	     return principal.getName();
	  }
	
	
}
