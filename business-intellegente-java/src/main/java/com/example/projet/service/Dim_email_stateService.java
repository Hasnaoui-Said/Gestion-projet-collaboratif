package com.example.projet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projet.beans.Dim_email_state;
import com.example.projet.dao.Dim_email_stateDao;

@Service
public class Dim_email_stateService {

	@Autowired
	private Dim_email_stateDao dim_email_stateDao ;

	public Dim_email_state findByName(String ref) {
		return dim_email_stateDao.findByName(ref);
	}

	public int deleteByName(String ref) {
		return dim_email_stateDao.deleteByName(ref);
	}

	public int save(Dim_email_state email_state) {
		if(findByName(email_state.getName()) != null) {
			return -1;
		}else {
			dim_email_stateDao.save(email_state);
			return 1;
		}
	}

	public List<Dim_email_state> findAll() {
		return dim_email_stateDao.findAll();
	}

	public Dim_email_state getOne(Long id) {
		return dim_email_stateDao.getOne(id);
	}
}
