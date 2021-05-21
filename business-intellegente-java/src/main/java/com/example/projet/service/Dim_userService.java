package com.example.projet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projet.beans.Dim_country;
import com.example.projet.beans.Dim_user;
import com.example.projet.dao.Dim_userDao;

@Service
public class Dim_userService {

	@Autowired
	private Dim_userDao dim_userDao;
	@Autowired
	private Dim_countryService countryService;

	public int save(Dim_user dim_user) {
		Dim_country country = countryService.findByReference(dim_user.getCt_id().getReference());
		if(findByReference(dim_user.getReference()) != null){
			return -1;
		}else if(country == null){
			return -2;
		}else {
			dim_user.setCt_id(country);
			dim_userDao.save(dim_user);
			return 1;
		}
	}
	
	public Dim_user loginUser(Dim_user dim_user){
		Dim_user login_user = findByEmailAndPassword( dim_user.getEmail(), dim_user.getPassword());
		if(login_user != null){
			return login_user;
		}else {
			return null;
		}
	}
	
	public Dim_user findByEmail(String ref) {
		return dim_userDao.findByEmail(ref);
	}
	
	public Dim_user findByEmailAndPassword(String email,String password) {
		return dim_userDao.findByEmailAndPassword( email, password);
	}
	public Dim_user findByReference(String ref) {
		return dim_userDao.findByReference(ref);
	}


	public int deleteByEmail(String ref) {
		return dim_userDao.deleteByEmail(ref);
	}


	public List<Dim_user> findAll() {
		return dim_userDao.findAll();
	}


	public Dim_user getOne(Long id) {
		return dim_userDao.getOne(id);
	}



	
}
