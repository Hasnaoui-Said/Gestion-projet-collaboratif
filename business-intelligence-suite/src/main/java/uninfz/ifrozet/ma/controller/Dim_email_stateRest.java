package uninfz.ifrozet.ma.controller;

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

import uninfz.ifrozet.ma.beans.Dim_email_state;
import uninfz.ifrozet.ma.security.service.Dim_email_stateService;


@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/dim-email-state")
public class Dim_email_stateRest {

	@Autowired
	private Dim_email_stateService email_stateService;

	@GetMapping("/name/{name}")
	public Dim_email_state findByName(@PathVariable String name) {
		return email_stateService.findByName(name);
	}

	@DeleteMapping("/name/{name}")
	public int deleteByName(@PathVariable String name) {
		return email_stateService.deleteByName(name);
	}

	@PostMapping("/")
	public int save(@RequestBody Dim_email_state cat_prioritie) {
		return email_stateService.save(cat_prioritie);
	}

	@GetMapping("/")
	public List<Dim_email_state> findAll() {
		return email_stateService.findAll();
	}

	

	public int hashCode() {
		return email_stateService.hashCode();
	}

	public boolean equals(Object obj) {
		return email_stateService.equals(obj);
	}

	public String toString() {
		return email_stateService.toString();
	}
}
