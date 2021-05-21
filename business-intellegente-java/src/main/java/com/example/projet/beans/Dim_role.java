package com.example.projet.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
public class Dim_role  implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long roleId;
	private String role;
	private String description;

	@OneToMany(mappedBy = "roleId")
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<Cfg_user_role> list_roles = new ArrayList<Cfg_user_role>();

	public long getRole_id() {
		return roleId;
	}

	public void setRole_id(long role_id) {
		this.roleId = role_id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Cfg_user_role> getList_roles() {
		return list_roles;
	}

	public void setList_roles(List<Cfg_user_role> list_roles) {
		this.list_roles = list_roles;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (roleId ^ (roleId >>> 32));
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
		Dim_role other = (Dim_role) obj;
		if (roleId != other.roleId)
			return false;
		return true;
	}
	
	
	
	
}
