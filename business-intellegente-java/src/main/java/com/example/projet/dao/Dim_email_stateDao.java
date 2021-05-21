package com.example.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projet.beans.Dim_email_state;

@Repository
public interface Dim_email_stateDao extends JpaRepository<Dim_email_state, Long> {

	public Dim_email_state findByName(String ref);
	public int deleteByName(String ref);
}
