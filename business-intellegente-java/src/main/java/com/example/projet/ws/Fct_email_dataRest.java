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

import com.example.projet.beans.Fct_email_data;
import com.example.projet.service.Fct_email_dataService;

@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/fct-email-data")
public class Fct_email_dataRest {

	@Autowired
	private Fct_email_dataService email_dataService;

	@GetMapping("/email/{email}")
	public Fct_email_data findByEmail(@PathVariable String email) {
		return email_dataService.findByEmail(email);
	}

	@PostMapping("/checked/")
	public Fct_email_data checked(@RequestBody Fct_email_data  data) {
		return email_dataService.ckecked(data);
	}

	@DeleteMapping("/email/{email}")
	public int deleteByName(@PathVariable String email) {
		return email_dataService.deleteByEmail(email);
	}

	@PostMapping("/")
	public int save(@RequestBody Fct_email_data email_data) {
		return email_dataService.save(email_data);
	}

	@GetMapping("/")
	public List<Fct_email_data> findAll() {
		return email_dataService.findAll();
	}

	@GetMapping("/state_id/{id}")
	public Fct_email_data getOne(@PathVariable Long id) {
		return email_dataService.getOne(id);
	}

	public int hashCode() {
		return email_dataService.hashCode();
	}

	public boolean equals(Object obj) {
		return email_dataService.equals(obj);
	}

	public String toString() {
		return email_dataService.toString();
	}
}
