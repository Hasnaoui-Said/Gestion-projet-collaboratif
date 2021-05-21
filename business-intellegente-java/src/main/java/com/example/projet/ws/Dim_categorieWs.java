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

import com.example.projet.beans.Dim_categorie;
import com.example.projet.service.Dim_categorieService;

@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/dim-categorie")
public class Dim_categorieWs {

	@Autowired
	private Dim_categorieService categorieService;

	@GetMapping("/name/{name}")
	public Dim_categorie findByName(@PathVariable String ref) {
		return categorieService.findByName(ref);
	}

	@DeleteMapping("/name/{name}")
	public int deleteByName(@PathVariable String ref) {
		return categorieService.deleteByName(ref);
	}

	@PostMapping("/")
	public int save(@RequestBody Dim_categorie categorie) {
		return categorieService.save(categorie);
	}

	@GetMapping("/")
	public List<Dim_categorie> findAll() {
		return categorieService.findAll();
	}

	@GetMapping("/cat_id/{id}")
	public Dim_categorie getOne(@PathVariable Long id) {
		return categorieService.getOne(id);
	}

	public int hashCode() {
		return categorieService.hashCode();
	}

	public boolean equals(Object obj) {
		return categorieService.equals(obj);
	}

	public String toString() {
		return categorieService.toString();
	}
}
