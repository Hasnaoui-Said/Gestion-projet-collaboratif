package com.example.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projet.beans.Dim_user;

@Repository
public interface Dim_userDao extends JpaRepository<Dim_user, Long> {

	public Dim_user findByEmail(String ref);
	public Dim_user findByEmailAndPassword(String email,String password);
	public Dim_user findByReference(String ref);
	public int deleteByEmail(String ref);
}
