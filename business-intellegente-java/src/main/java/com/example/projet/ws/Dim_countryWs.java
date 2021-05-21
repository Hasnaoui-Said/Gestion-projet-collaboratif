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

import com.example.projet.beans.Dim_country;
import com.example.projet.service.Dim_countryService;

@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/dim-country")
public class Dim_countryWs {

	@Autowired
	private Dim_countryService countryService;

	@GetMapping("/reference/{ref}")
	public Dim_country findByReference(@PathVariable String ref) {
		return countryService.findByReference(ref);
	}

	@DeleteMapping("/reference/{ref}")
	public int deleteByReference(@PathVariable String ref) {
		return countryService.deleteByReference(ref);
	}

	@PostMapping("/")
	public int save(@RequestBody Dim_country entity) {
		return countryService.save(entity);
	}

	@GetMapping("/")
	public List<Dim_country> findAll() {
		return countryService.findAll();
	}

	@GetMapping("/ct_id/{id}")
	public Dim_country getOne(@PathVariable Long id) {
		return countryService.getOne(id);
	}

	public int hashCode() {
		return countryService.hashCode();
	}

	public boolean equals(Object obj) {
		return countryService.equals(obj);
	}

	public String toString() {
		return countryService.toString();
	}
}
