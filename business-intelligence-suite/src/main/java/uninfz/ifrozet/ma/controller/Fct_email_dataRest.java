package uninfz.ifrozet.ma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uninfz.ifrozet.ma.beans.*;
import uninfz.ifrozet.ma.security.service.Fct_email_dataService;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/news-lettre-app/fct-email-data")
public class Fct_email_dataRest {

	@Autowired
	private Fct_email_dataService email_dataService;

	@GetMapping("/email/{email}")
	public Fct_email_data findByEmail(@PathVariable String email) {
		return email_dataService.findByEmail(email);
	}

	@GetMapping("/searshEmail/{email}")
	public List<Fct_email_data> searshEmail(@PathVariable String email) {
		return email_dataService.searshEmail(email);
	}

	@PostMapping("/checkedtest/")
	public DataCheck ckeckedTest(@RequestBody DataCheck data) {
		return email_dataService.ckeckedTest(data);
	}

	@PostMapping("/checked/")
	public Fct_email_data checked(@RequestBody Fct_email_data  data) {
		return email_dataService.ckecked(data);
	}

	@DeleteMapping("/email/{email}")
	public int deleteByName(@PathVariable String email) {
		return email_dataService.deleteByEmail(email);
	}

	@PostMapping("/checkfortestsave")
	public int CheckForTestSave(@RequestBody Fct_email_data email_data) {
		System.out.println("etap 1");
		return email_dataService.CheckForTestSave(email_data);
	}

	@PostMapping("/")
	public int save(@RequestBody Fct_email_data email_data) {
		return email_dataService.save(email_data);
	}

	@PostMapping("/moreMail")
	public int saveMoreMail(@RequestBody Fct_email_data email_data) {
		/*System.out.println(email_data.getEmail());*/
		return email_dataService.saveMoreMail(email_data);
	}

	@GetMapping("/")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public List<Fct_email_data> findAll() {
		return email_dataService.findAll();
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
