package com.example.projet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projet.beans.Dim_cat_prioritie;
import com.example.projet.dao.Dim_cat_prioritieDao;

@Service
public class Dim_cat_prioritieService {

	@Autowired
	private Dim_cat_prioritieDao cat_prioritieDao;

	public Dim_cat_prioritie findByName(String ref) {
		return cat_prioritieDao.findByName(ref);
	}

	public int deleteByName(String ref) {
		return cat_prioritieDao.deleteByName(ref);
	}

	public int save(Dim_cat_prioritie cat_prioritie) {
		if(findByName(cat_prioritie.getName()) != null) {
			return -1;
		}else {
			cat_prioritieDao.save(cat_prioritie);
			return 1;
		}
	}

	public List<Dim_cat_prioritie> findAll() {
		return cat_prioritieDao.findAll();
	}

	public Dim_cat_prioritie getOne(Long id) {
		return cat_prioritieDao.getOne(id);
	}
}
