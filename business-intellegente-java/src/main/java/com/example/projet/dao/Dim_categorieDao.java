package com.example.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projet.beans.Dim_categorie;

@Repository
public interface Dim_categorieDao extends JpaRepository<Dim_categorie, Long> {

	public Dim_categorie findByName(String ref);
	public int deleteByName(String ref);
}
