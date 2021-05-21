package com.example.projet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projet.beans.Dim_cat_prioritie;
import com.example.projet.beans.Dim_categorie;
import com.example.projet.dao.Dim_categorieDao;

@Service
public class Dim_categorieService {

	@Autowired
	private Dim_categorieDao categorieDao;
	@Autowired
	private Dim_cat_prioritieService prioritieService;

	public Dim_categorie findByName(String ref) {
		return categorieDao.findByName(ref);
	}

	public int deleteByName(String ref) {
		return categorieDao.deleteByName(ref);
	}

	public int save(Dim_categorie categorie) {
		Dim_categorie categorie2 = findByName(categorie.getName()); 
		Dim_cat_prioritie prio = prioritieService.findByName(categorie.getName()); 
		if( categorie2 != null) {
			return -1;
		}else if( prio == null) {
			return -2;
		}else {
			categorie.setPriority_id(prio);
			categorieDao.save(categorie);
			return 1;
		}
		 
	}

	public List<Dim_categorie> findAll() {
		return categorieDao.findAll();
	}

	public Dim_categorie getOne(Long id) {
		return categorieDao.getOne(id);
	}
}
