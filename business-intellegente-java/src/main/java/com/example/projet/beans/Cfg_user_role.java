package com.example.projet.beans;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Cfg_user_role  implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long cfgId;

	@ManyToOne
	private Dim_role roleId;
	@ManyToOne
	private Dim_user userId;
	
	public long getCfg_id() {
		return cfgId;
	}
	public void setCfg_id(long cfg_id) {
		this.cfgId = cfg_id;
	}
	public Dim_role getRole_id() {
		return roleId;
	}
	public void setRole_id(Dim_role role_id) {
		this.roleId = role_id;
	}
	public Dim_user getUser_id() {
		return userId;
	}
	public void setUser_id(Dim_user user_id) {
		this.userId = user_id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (cfgId ^ (cfgId >>> 32));
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
		Cfg_user_role other = (Cfg_user_role) obj;
		if (cfgId != other.cfgId)
			return false;
		return true;
	}
	
	
}