package com.example.projet.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projet.beans.Dim_user;
import com.example.projet.service.Dim_userService;

@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/dim-user")
public class Dim_userWs {

	@Autowired
	private Dim_userService dim_userService;


	@PostMapping("/login")
	public Dim_user loginUser(@RequestBody Dim_user dim_user){
		return dim_userService.loginUser(dim_user);
	}


	@GetMapping("/email/{email}/password/{password}")
	public Dim_user findByEmailAndPassword(@PathVariable String email,@PathVariable String password) {
		return dim_userService.findByEmailAndPassword(email, password);
	}

	@GetMapping("/email/{email}")
	public Dim_user findByEmail(@PathVariable String email) {
		return dim_userService.findByEmail(email);
	}
	
	@GetMapping("/reference/{reference}")
	public Dim_user findByReference(@PathVariable String reference) {
		return dim_userService.findByEmail(reference);
	}

	@DeleteMapping("/email/{email}")
	public int deleteByEmail(@PathVariable String email) {
		return dim_userService.deleteByEmail(email);
	}

	@PostMapping("/")
	public int save(@RequestBody Dim_user dim_user) {
		return dim_userService.save(dim_user);
	}

	@GetMapping("/")
	public List<Dim_user> findAll() {
		return dim_userService.findAll();
	}

	@GetMapping("/user_id/{id}")
	public Dim_user getOne(@PathVariable Long id) {
		return dim_userService.getOne(id);
	}

	public int hashCode() {
		return dim_userService.hashCode();
	}

	public boolean equals(Object obj) {
		return dim_userService.equals(obj);
	}

	public String toString() {
		return dim_userService.toString();
	}
}
