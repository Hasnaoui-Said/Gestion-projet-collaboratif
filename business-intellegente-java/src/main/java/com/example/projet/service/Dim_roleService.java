package com.example.projet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projet.beans.Dim_role;
import com.example.projet.dao.Dim_role_Dao;

@Service
public class Dim_roleService {

	@Autowired
	private Dim_role_Dao role_Dao;

	public Dim_role findByRole(String ref) {
		return role_Dao.findByRole(ref);
	}

	public int deleteByRole(String ref) {
		return role_Dao.deleteByRole(ref);
	}

	public int save(Dim_role dim_role) {
		if(findByRole(dim_role.getRole()) != null) {
			return -1;
		}else {
			role_Dao.save(dim_role);
			return 1;
		}
	}

	public List<Dim_role> findAll() {
		return role_Dao.findAll();
	}

	public Dim_role getOne(Long id) {
		return role_Dao.getOne(id);
	}
}
