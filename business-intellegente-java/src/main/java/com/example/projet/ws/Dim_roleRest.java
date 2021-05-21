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

import com.example.projet.beans.Dim_role;
import com.example.projet.service.Dim_roleService;

@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/dim-role")
public class Dim_roleRest {

	@Autowired
	private Dim_roleService dim_roleService;

	@GetMapping("/name/{name}")
	public Dim_role findByRole(@PathVariable String name) {
		return dim_roleService.findByRole(name);
	}

	@DeleteMapping("/name/{name}")
	public int deleteByRole(@PathVariable String name) {
		return dim_roleService.deleteByRole(name);
	}

	@PostMapping("/")
	public int save(@RequestBody Dim_role cat_prioritie) {
		return dim_roleService.save(cat_prioritie);
	}

	@GetMapping("/")
	public List<Dim_role> findAll() {
		return dim_roleService.findAll();
	}

	@GetMapping("/role_id/{id}")
	public Dim_role getOne(@PathVariable Long id) {
		return dim_roleService.getOne(id);
	}

	public int hashCode() {
		return dim_roleService.hashCode();
	}

	public boolean equals(Object obj) {
		return dim_roleService.equals(obj);
	}

	public String toString() {
		return dim_roleService.toString();
	}
}
