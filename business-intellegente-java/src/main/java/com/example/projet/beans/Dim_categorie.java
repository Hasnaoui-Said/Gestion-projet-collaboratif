package com.example.projet.beans;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Dim_categorie implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long cat_id;
	private String name;
	@ManyToOne
	private Dim_cat_prioritie priority_id;
	public long getCat_id() {
		return cat_id;
	}
	public void setCat_id(long cat_id) {
		this.cat_id = cat_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Dim_cat_prioritie getPriority_id() {
		return priority_id;
	}
	public void setPriority_id(Dim_cat_prioritie priority_id) {
		this.priority_id = priority_id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (cat_id ^ (cat_id >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Dim_categorie other = (Dim_categorie) obj;
		if (cat_id != other.cat_id)
			return false;
		return true;
	}
	
	
}
