package com.example.projet.beans;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dim_cat_prioritie  implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long priority_id;
	private String name;
	private String description;
	public long getPriority_id() {
		return priority_id;
	}
	public void setPriority_id(long priority_id) {
		this.priority_id = priority_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (priority_id ^ (priority_id >>> 32));
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
		Dim_cat_prioritie other = (Dim_cat_prioritie) obj;
		if (priority_id != other.priority_id)
			return false;
		return true;
	}
	
	
}
