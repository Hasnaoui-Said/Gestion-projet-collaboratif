package uninfz.ifrozet.ma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uninfz.ifrozet.ma.beans.Dim_country;
import uninfz.ifrozet.ma.security.service.Dim_countryService;


@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/dim-country")
//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
public class Dim_countryWs {

	@Autowired
	private Dim_countryService countryService;

	@GetMapping("/reference/{ref}")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public Dim_country findByReference(@PathVariable String ref) {
		return countryService.findByReference(ref);
	}

	@DeleteMapping("/reference/{ref}")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public int deleteByReference(@PathVariable String ref) {
		return countryService.deleteByReference(ref);
	}

	@PostMapping("/")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public int save(@RequestBody Dim_country entity) {
		return countryService.save(entity);
	}

	@GetMapping("/")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public List<Dim_country> findAll() {
		return countryService.findAll();
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
