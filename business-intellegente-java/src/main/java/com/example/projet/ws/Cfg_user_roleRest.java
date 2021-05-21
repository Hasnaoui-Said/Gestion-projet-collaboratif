package com.example.projet.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projet.beans.Cfg_user_role;
import com.example.projet.service.Cfg_user_roleService;

@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/cfg-user-role")
public class Cfg_user_roleRest {

	@Autowired
	private Cfg_user_roleService cfg_user_roleService;

	@PostMapping("/")
	public int save(@RequestBody Cfg_user_role cat_prioritie) {
		return cfg_user_roleService.save(cat_prioritie);
	}

	@GetMapping("/")
	public List<Cfg_user_role> findAll() {
		return cfg_user_roleService.findAll();
	}

	@GetMapping("/cfg_id/{id}")
	public Cfg_user_role getOne(@PathVariable Long id) {
		return cfg_user_roleService.getOne(id);
	}

	public int hashCode() {
		return cfg_user_roleService.hashCode();
	}

	public boolean equals(Object obj) {
		return cfg_user_roleService.equals(obj);
	}

	public String toString() {
		return cfg_user_roleService.toString();
	}
}
