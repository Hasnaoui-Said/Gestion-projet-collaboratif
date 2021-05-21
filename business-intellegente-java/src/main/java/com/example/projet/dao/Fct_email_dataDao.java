package com.example.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projet.beans.Fct_email_data;

@Repository
public interface Fct_email_dataDao extends JpaRepository<Fct_email_data, Long> {

	public Fct_email_data findByEmail(String ref);
	//public Fct_email_data findByCat_idName(String ref);
	public int deleteByEmail(String ref);
	
}
