package com.example.projet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projet.beans.Cfg_user_role;
import com.example.projet.beans.Dim_role;
import com.example.projet.beans.Dim_user;
import com.example.projet.dao.Cfg_user_roleDao;

@Service
public class Cfg_user_roleService {

	@Autowired
	private Cfg_user_roleDao user_roleDao;
	@Autowired
	private Dim_roleService dim_roleService ;
	@Autowired
	private Dim_userService dim_userService ;

	

	public int save(Cfg_user_role user_role) {
		Dim_user dim_user = dim_userService.findByEmail(user_role.getUser_id().getEmail());
		Dim_role dim_role = dim_roleService.findByRole(user_role.getRole_id().getRole());
		if(dim_user == null && dim_role == null){
			return -1;
		}else {
			user_role.setRole_id(dim_role);
			user_role.setUser_id(dim_user);
			user_roleDao.save(user_role);
			return 1;
		}
	}

	public List<Cfg_user_role> findAll() {
		return user_roleDao.findAll();
	}

	public Cfg_user_role getOne(Long id) {
		return user_roleDao.getOne(id);
	}
}
