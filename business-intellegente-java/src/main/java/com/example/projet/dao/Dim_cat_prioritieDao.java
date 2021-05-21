package com.example.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projet.beans.Dim_cat_prioritie;

@Repository
public interface Dim_cat_prioritieDao extends JpaRepository<Dim_cat_prioritie, Long> {

	public Dim_cat_prioritie findByName(String ref);
	public int deleteByName(String ref);
}
