package com.example.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projet.beans.Dim_role;

@Repository
public interface Dim_role_Dao extends JpaRepository<Dim_role, Long> {

	public Dim_role findByRole(String ref);
	public int deleteByRole(String ref);
}
