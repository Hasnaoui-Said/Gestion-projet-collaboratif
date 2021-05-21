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

import com.example.projet.beans.Dim_cat_prioritie;
import com.example.projet.service.Dim_cat_prioritieService;

@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/dim-cat-prioritie")
public class Dim_cat_prioritieRest {

	@Autowired
	private Dim_cat_prioritieService cat_prioritieService;

	@GetMapping("/name/{name}")
	public Dim_cat_prioritie findByName(@PathVariable String name) {
		return cat_prioritieService.findByName(name);
	}

	@DeleteMapping("/name/{name}")
	public int deleteByName(@PathVariable String name) {
		return cat_prioritieService.deleteByName(name);
	}

	@PostMapping("/")
	public int save(@RequestBody Dim_cat_prioritie cat_prioritie) {
		return cat_prioritieService.save(cat_prioritie);
	}

	@GetMapping("/")
	public List<Dim_cat_prioritie> findAll() {
		return cat_prioritieService.findAll();
	}

	@GetMapping("/priority_id/{id}")
	public Dim_cat_prioritie getOne(@PathVariable Long id) {
		return cat_prioritieService.getOne(id);
	}

	public int hashCode() {
		return cat_prioritieService.hashCode();
	}

	public boolean equals(Object obj) {
		return cat_prioritieService.equals(obj);
	}

	public String toString() {
		return cat_prioritieService.toString();
	}
}
